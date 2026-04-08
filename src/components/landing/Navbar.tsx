import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import type { Currency } from "../../hooks/useCurrency";

export const Navbar = ({ currency, setCurrency }: { currency: Currency, setCurrency: (c: Currency) => void }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Services", href: "#services" },
        { name: "Download", href: "#download" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-950/80"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <img src="/axeon_light.png" alt="Axeon" className="h-8 md:h-10 w-auto block dark:hidden" />
                        <img src="/axeon_dark.png" alt="Axeon" className="h-8 md:h-10 w-auto hidden dark:block" />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />

                        <div className="flex items-center gap-4">
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value as Currency)}
                                className="bg-transparent text-sm font-medium text-slate-600 dark:text-slate-300 border-none outline-none cursor-pointer hover:text-blue-700 focus:ring-0"
                            >
                                <option value="GHS">GHS</option>
                                <option value="NGN">NGN</option>
                                <option value="USD">USD</option>
                            </select>

                            <ThemeToggle />

                            <a
                                href="#download"
                                className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-xl dark:bg-slate-950/95 border-t border-slate-100 dark:border-slate-800 md:hidden z-40 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6 h-full">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-slate-800/50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800/50 mt-4">
                                <span className="text-slate-600 dark:text-slate-400 font-medium tracking-wide text-sm uppercase">Currency</span>
                                <select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value as Currency)}
                                    className="bg-transparent text-lg font-bold text-slate-900 dark:text-white border-none outline-none focus:ring-0"
                                >
                                    <option value="GHS">GHS</option>
                                    <option value="NGN">NGN</option>
                                    <option value="USD">USD</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800/50 mb-6">
                                <span className="text-slate-600 dark:text-slate-400 font-medium tracking-wide text-sm uppercase">App Theme</span>
                                <ThemeToggle />
                            </div>

                            <a
                                href="#download"
                                className="w-full text-center px-6 py-4 bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-800 transition-colors mt-auto mb-32"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started Today
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
