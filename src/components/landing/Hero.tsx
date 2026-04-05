import { motion } from "framer-motion";
import { ArrowRight, Download, Shield, Zap, Sparkles } from "lucide-react";

export const Hero = () => {
    const downloadLink = import.meta.env.VITE_APP_DOWNLOAD_LINK || "#download";
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Ambient Lighting Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/20 dark:bg-blue-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-400/20 dark:bg-indigo-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
                <div className="absolute top-[30%] left-[60%] w-[40%] h-[40%] bg-cyan-300/20 dark:bg-cyan-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-lighten"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/60 dark:bg-slate-900/60 border border-blue-100 dark:border-blue-900/30 backdrop-blur-md shadow-sm text-blue-700 dark:text-blue-300 text-sm font-semibold mb-8">
                            <Sparkles className="w-4 h-4 text-blue-500" />
                            <span>The Next Generation Pharmacy OS</span>
                        </motion.div>
                        
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            Manage Your Pharmacy <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                                With Precision.
                            </span>
                        </motion.h1>
                        
                        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                            An elegant, lightning-fast standalone solution for inventory, sales, and analytics. Built specifically for modern pharmacies.
                        </motion.p>
                        
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                            <a
                                href={downloadLink}
                                target={downloadLink.startsWith('http') ? "_blank" : "_self"}
                                rel={downloadLink.startsWith('http') ? "noopener noreferrer" : ""}
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download Axeon Now
                            </a>
                            <a
                                href="#features"
                                className="w-full sm:w-auto px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-800 border border-slate-200/50 font-bold rounded-2xl hover:bg-white transition-all dark:text-white dark:border-slate-800 dark:hover:bg-slate-800 flex items-center justify-center gap-2 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                            >
                                Explore Features
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* UI-Simulated Dashboard Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative max-w-5xl mx-auto mt-24 h-[420px] w-full perspective-[2000px] hidden md:block"
                >
                    {/* Background Plate / Main Dashboard Window */}
                    <div className="absolute inset-x-8 inset-y-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl rounded-t-[2.5rem] border-t border-x border-white/60 dark:border-slate-700/50 shadow-2xl overflow-hidden flex flex-col">
                        {/* Fake Browser Titlebar */}
                        <div className="h-12 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center px-6 gap-2 bg-slate-50/50 dark:bg-slate-950/50">
                            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                            <div className="ml-4 px-4 py-1.5 rounded-md bg-white/80 dark:bg-slate-800/80 text-xs font-medium text-slate-400 font-mono w-48 text-center shadow-sm">
                                axeon.pharmacy/pos
                            </div>
                        </div>

                        {/* Fake UI Body */}
                        <div className="p-8 flex gap-8 h-full">
                            {/* Fake Sidebar */}
                            <div className="w-48 flex flex-col gap-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`h-8 rounded-lg ${i === 0 ? 'bg-blue-100 dark:bg-blue-900/30 w-full' : 'bg-slate-100 dark:bg-slate-800/50 w-3/4'}`}></div>
                                ))}
                            </div>

                            <div className="flex-1 flex flex-col gap-6">
                                {/* Top Stats Row */}
                                <div className="flex gap-4">
                                    <div className="flex-1 h-24 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-slate-800/50 rounded-2xl border border-indigo-100 dark:border-indigo-900/20 p-4 shadow-sm flex flex-col justify-between">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 mb-2">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Daily Revenue</p>
                                            <p className="text-lg font-bold text-slate-800 dark:text-slate-200">$4,250</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 h-24 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-4 shadow-sm">
                                         <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 mb-2">
                                            <Shield className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Prescriptions</p>
                                            <p className="text-lg font-bold text-slate-800 dark:text-slate-200">142</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Chart Area */}
                                <div className="flex-1 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-6 flex flex-col shadow-sm">
                                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-6">Sales Overview</h3>
                                    <div className="flex items-end gap-2 h-full flex-1">
                                        {[40, 25, 60, 45, 80, 55, 90, 65, 100].map((height, i) => (
                                            <motion.div 
                                                key={i}
                                                className="flex-1 bg-blue-500/10 dark:bg-blue-500/20 rounded-t-md relative group cursor-pointer"
                                                initial={{ height: "10%" }}
                                                animate={{ height: `${height}%` }}
                                                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                            >
                                                <div className="absolute inset-x-0 bottom-0 bg-blue-500 rounded-t-sm transition-all group-hover:bg-blue-400" style={{ height: '100%' }}></div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Overlapping UI Cards to create depth */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-4 top-32 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-100 dark:border-slate-700 rounded-2xl shadow-2xl z-20 w-64"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                            </span>
                            <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Low Stock Alert</span>
                        </div>
                        <div className="space-y-2">
                             <div className="flex justify-between items-center text-sm">
                                 <span className="font-semibold text-slate-700 dark:text-slate-200">Amoxicillin 500mg</span>
                                 <span className="text-rose-500 font-bold">4 left</span>
                             </div>
                             <div className="flex justify-between items-center text-sm">
                                 <span className="font-semibold text-slate-700 dark:text-slate-200">Ibuprofen 400mg</span>
                                 <span className="text-rose-500 font-bold">12 left</span>
                             </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -right-4 top-20 p-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl shadow-2xl border border-slate-700 z-20 w-72"
                    >
                         <h4 className="text-sm font-bold text-slate-300 mb-4 border-b border-slate-700 pb-2">Recent POS Transactions</h4>
                         <div className="space-y-3">
                             <div className="flex justify-between items-center">
                                 <div className="flex items-center gap-2">
                                     <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</div>
                                     <div>
                                         <p className="text-sm font-semibold">Paracetamol, Vit C</p>
                                         <p className="text-xs text-slate-400">Walk-in Customer</p>
                                     </div>
                                 </div>
                                 <span className="font-bold text-emerald-400">+$24.50</span>
                             </div>
                             <div className="flex justify-between items-center opacity-70">
                                 <div className="flex items-center gap-2">
                                     <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</div>
                                     <div>
                                         <p className="text-sm font-semibold">Insulin Pen</p>
                                         <p className="text-xs text-slate-400">Prescription Refill</p>
                                     </div>
                                 </div>
                                 <span className="font-bold text-emerald-400">+$85.00</span>
                             </div>
                         </div>
                    </motion.div>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 text-center pt-8 max-w-4xl mx-auto"
                >
                    <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-8">
                        The Operating System for Modern Pharmacies
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 dark:opacity-40 grayscale mix-blend-multiply dark:mix-blend-lighten">
                        {/* More stylized Placeholder Logos */}
                        <div className="text-2xl font-black tracking-tighter">MEDCORE</div>
                        <div className="text-2xl font-bold flex items-center gap-2"><Shield className="w-6 h-6"/> HEALTHSYNC</div>
                        <div className="text-2xl font-black italic tracking-wider">Pharma<span className="text-slate-400">Plus</span></div>
                        <div className="text-2xl font-bold tracking-tight">RxCare AI</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
