import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Loader2, AlertCircle, ShieldCheck, ArrowLeft, Download } from 'lucide-react';

const API_URL = import.meta.env.VITE_LICENSE_API_URL || "https://pharmacy-license-api.vercel.app";

export const PurchaseCompletion = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [licenseKey, setLicenseKey] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const reference = searchParams.get('reference');

        if (!reference) {
            setStatus('error');
            setError('No payment reference found. Please contact support if you have been charged.');
            return;
        }

        verifyPayment(reference);
    }, [searchParams]);

    const verifyPayment = async (reference: string) => {
        try {
            const response = await fetch(`${API_URL}/api/payment/verify/${reference}`);

            if (!response.ok) {
                throw new Error('Payment verification failed');
            }

            const data = await response.json();

            if (data.status === 'success' && data.license_key) {
                setLicenseKey(data.license_key);
                setStatus('success');
            } else if (data.status === 'processing') {
                // Still processing, check again in a few seconds
                setTimeout(() => verifyPayment(reference), 3000);
            } else {
                setStatus('error');
                setError(data.message || 'Payment not completed');
            }

        } catch (err: any) {
            console.error('Verification error:', err);
            setStatus('error');
            setError(err.message || 'Failed to verify payment');
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(licenseKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const downloadLicenseFile = () => {
        const element = document.createElement("a");
        const file = new Blob([licenseKey], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `axeon_license_${new Date().getTime()}.lic`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
            <AnimatePresence mode="wait">
                {status === 'loading' && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 max-w-md w-full text-center"
                    >
                        <div className="mx-auto w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6">
                            <Loader2 className="w-8 h-8 text-blue-700 animate-spin" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Verifying Payment</h2>
                        <p className="text-slate-500 dark:text-slate-400">
                            Please wait while we confirm your transaction and generate your license key.
                        </p>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-red-100 dark:border-red-900/30 max-w-md w-full text-center"
                    >
                        <div className="mx-auto w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
                            <AlertCircle className="w-8 h-8 text-red-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Payment Failed</h2>
                        <p className="text-red-600 dark:text-red-400 mb-8 text-sm">
                            {error}
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => navigate('/')}
                                className="w-full py-3 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-xl font-bold transition-all hover:bg-slate-800"
                            >
                                Back to Pricing
                            </button>
                        </div>
                    </motion.div>
                )}

                {status === 'success' && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-blue-100 dark:border-blue-900/20 max-w-2xl w-full"
                    >
                        <div className="text-center mb-8">
                            <div className="mx-auto w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Purchase Successful!</h2>
                            <p className="text-slate-500 dark:text-slate-400">
                                Your Axeon license has been generated. A copy has also been sent to your email.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 rounded-2xl flex gap-4">
                                <ShieldCheck className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-blue-900 dark:text-blue-200 text-sm uppercase tracking-wider mb-1">Activation Required</h4>
                                    <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                                        Use the license key or file below to activate your pharmacy system. Keep this information secure.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Serial Key</span>
                                </div>
                                <div className="relative group">
                                    <textarea
                                        readOnly
                                        value={licenseKey}
                                        className="w-full h-32 p-4 pr-12 font-mono text-[10px] bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-700 dark:text-slate-300"
                                    />
                                    <button
                                        onClick={copyToClipboard}
                                        className="absolute top-3 right-3 p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:bg-blue-600 hover:text-white transition-all group-hover:scale-105"
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                    onClick={downloadLicenseFile}
                                    className="flex items-center justify-center gap-2 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95 px-6"
                                >
                                    <Download className="w-5 h-5" />
                                    Download .lic File
                                </button>
                                <button
                                    onClick={() => navigate('/')}
                                    className="flex items-center justify-center gap-2 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold transition-all hover:opacity-90 active:scale-95 px-6"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to Home
                                </button>
                            </div>

                            <div className="p-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl">
                                <h4 className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Quick Setup</h4>
                                <ol className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
                                    <li className="flex gap-2">
                                        <span className="w-5 h-5 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                                        <span>Open the **Axeon Pharmacy Desktop App**</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="w-5 h-5 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                                        <span>Go to **Settings** &gt; **License Activation**</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="w-5 h-5 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0">3</span>
                                        <span>Upload the license file or paste the key and click **Activate**</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
