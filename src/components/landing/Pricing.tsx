import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Loader2, ShieldCheck, AlertCircle, ArrowRight } from "lucide-react";
import type { Currency } from "../../hooks/useCurrency";

type PricingProps = {
    formatPrice: (amount: number) => string;
    currency: Currency;
};

// Base prices in GHS
const BASE_PRICES = {
    standard: {
        monthly: Number(import.meta.env.VITE_APP_PRICE_STANDARD_MONTHLY) || 50,
        yearly: Number(import.meta.env.VITE_APP_PRICE_STANDARD_YEARLY) || 500,
        lifetime: Number(import.meta.env.VITE_APP_PRICE_STANDARD_LIFETIME) || 2500
    },
    server: {
        monthly: Number(import.meta.env.VITE_APP_PRICE_SERVER_MONTHLY) || 120,
        yearly: Number(import.meta.env.VITE_APP_PRICE_SERVER_YEARLY) || 1200,
        lifetime: Number(import.meta.env.VITE_APP_PRICE_SERVER_LIFETIME) || 6000
    },
    cloud: {
        monthly: Number(import.meta.env.VITE_APP_PRICE_CLOUD_MONTHLY) || 250,
        yearly: Number(import.meta.env.VITE_APP_PRICE_CLOUD_YEARLY) || 2500,
        lifetime: Number(import.meta.env.VITE_APP_PRICE_CLOUD_LIFETIME) || 12000
    }
};

type BillingCycle = 'monthly' | 'yearly' | 'lifetime';
type PlanId = 'standard' | 'server' | 'cloud';

const API_URL = import.meta.env.VITE_LICENSE_API_URL || "https://pharmacy-license-api.vercel.app/";

export const Pricing = ({ formatPrice, currency }: PricingProps) => {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('yearly');
    const [showCheckout, setShowCheckout] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState<PlanId | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        businessName: "",
        email: "",
        phone: ""
    });

    const getPrice = (base: { monthly: number, yearly: number, lifetime: number }) => {
        return formatPrice(base[billingCycle]);
    };

    const periodLabel = billingCycle === 'monthly' ? '/mon' : billingCycle === 'yearly' ? '/year' : 'one-time';

    const plans = [
        {
            id: 'standard' as PlanId,
            name: "Standalone",
            price: getPrice(BASE_PRICES.standard),
            rawPrice: BASE_PRICES.standard[billingCycle],
            period: periodLabel,
            description: "Perfect for single-terminal pharmacies.",
            features: [
                "Single Device License",
                "Unlimited Products",
                "Offline Mode",
                "Basic Reporting",
                "Local Database"
            ],
            buttonText: "Purchase License",
            popular: false
        },
        {
            id: 'server' as PlanId,
            name: "Local Server",
            price: getPrice(BASE_PRICES.server),
            rawPrice: BASE_PRICES.server[billingCycle],
            period: periodLabel,
            description: "For pharmacies with multiple counters.",
            features: [
                "Up to 5 Devices",
                "Centralized Local Server",
                "Multi-user Access",
                "Advanced Reporting",
                "Network Printing"
            ],
            buttonText: "Purchase License",
            popular: true
        },
        {
            id: 'cloud' as PlanId,
            name: "Cloud",
            price: getPrice(BASE_PRICES.cloud),
            rawPrice: BASE_PRICES.cloud[billingCycle],
            period: periodLabel,
            description: "Enterprise management from anywhere.",
            features: [
                "Unlimited Devices",
                "Cloud Sync & Backup",
                "Remote Management",
                "Multi-store Support",
                "AI Insights"
            ],
            buttonText: "Coming Soon",
            popular: false,
            disabled: true // Disabled as requested
        }
    ];

    const handlePurchaseClick = (planId: PlanId) => {
        setSelectedPlanId(planId);
        setShowCheckout(true);
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPlanId) return;

        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${API_URL}/api/payment/initialize`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    businessName: formData.businessName,
                    phone: formData.phone,
                    plan: selectedPlanId,
                    billingCycle: billingCycle,
                    currency: currency,
                    callbackUrl: `${window.location.origin}/purchase-completion`
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Payment initialization failed');
            }

            if (data.authorization_url) {
                window.location.href = data.authorization_url;
            } else {
                throw new Error('No payment URL received from server');
            }

        } catch (err: any) {
            console.error('Payment error:', err);
            setError(err.message || 'Failed to initialize payment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const selectedPlan = plans.find(p => p.id === selectedPlanId);

    return (
        <section id="pricing" className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Simple, Transparent <br />
                        <span className="text-blue-700 dark:text-blue-400">Pricing</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        Choose the license that fits your pharmacy size. No hidden fees.
                        Prices shown in {currency}.
                    </p>

                    {/* Billing Cycle Toggle */}
                    <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1 space-x-1">
                        {(['monthly', 'yearly', 'lifetime'] as const).map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle)}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${billingCycle === cycle
                                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300"
                                    }`}
                            >
                                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                                {cycle === 'yearly' && <span className="ml-1 text-xs text-green-500 font-bold">-20%</span>}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`mt-6 p-8 rounded-[2.5rem] relative ${
                                plan.popular
                                    ? 'bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-600/30 border border-blue-500/50 transform md:-translate-y-4 z-10'
                                    : 'bg-white/80 backdrop-blur-sm dark:bg-slate-900 text-slate-900 dark:text-white shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-200/60 dark:border-slate-800 z-0'
                            }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-sm opacity-80 mb-6">{plan.description}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <span className="opacity-70">{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="mb-8 space-y-4 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 opacity-70 shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handlePurchaseClick(plan.id)}
                                    disabled={plan.disabled}
                                    className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                                        plan.disabled 
                                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed border-none' 
                                            : plan.popular
                                                ? 'bg-white text-blue-700 hover:bg-slate-50 shadow-xl shadow-black/10 hover:shadow-black/20'
                                                : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 shadow-lg hover:shadow-xl'
                                    }`}
                                >
                                    {plan.buttonText}
                                    {!plan.disabled && <ArrowRight className="w-4 h-4" />}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Checkout Modal */}
            <AnimatePresence>
                {showCheckout && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
                        >
                            <div className="relative p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                        <ShieldCheck className="w-5 h-5 text-blue-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Secure Checkout</h3>
                                </div>
                                <button
                                    onClick={() => setShowCheckout(false)}
                                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-500" />
                                </button>
                            </div>

                            <div className="p-6">
                                {selectedPlan && (
                                    <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-between border border-slate-200 dark:border-slate-800">
                                        <div>
                                            <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-1">Selected Plan</p>
                                            <p className="font-bold text-slate-900 dark:text-white">{selectedPlan.name} ({billingCycle})</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-slate-900 dark:text-white">{selectedPlan.price}</p>
                                            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-medium">{selectedPlan.period === 'one-time' ? 'One-time Payment' : 'Billed ' + billingCycle}</p>
                                        </div>
                                    </div>
                                )}

                                {error && (
                                    <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
                                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                                        <p className="text-xs font-bold text-red-700 dark:text-red-400">{error}</p>
                                    </div>
                                )}

                                <form onSubmit={handlePayment} className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight ml-1">Pharmacy / Business Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="e.g., Central Pharmacy"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            value={formData.businessName}
                                            onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight ml-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="admin@pharmacy.com"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight ml-1">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+233 00 000 0000"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Initializing Payment...
                                                </>
                                            ) : (
                                                <>
                                                    Complete Purchase
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
                                            By clicking "Complete Purchase", you will be redirected to our secure payment processor, Paystack.
                                            A license code and file will be sent to your email upon successful payment.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
