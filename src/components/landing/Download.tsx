import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Monitor, Store, Command, Shield, Zap, CheckCircle2, Loader2 } from "lucide-react";

export const DownloadSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [links, setLinks] = useState({
        exe: import.meta.env.VITE_APP_DOWNLOAD_LINK_EXE || "#",
        msStore: import.meta.env.VITE_APP_DOWNLOAD_LINK_MSSTORE || "#",
        macos: import.meta.env.VITE_APP_DOWNLOAD_LINK_MACOS || "#",
        version: "v1.0.4"
    });

    useEffect(() => {
        const fetchLatestRelease = async () => {
            try {
                // Fetch update.json from Supabase Storage (public)
                // Appending a timestamp to avoid stale cache from Supabase CDN
                const response = await fetch(
                    `https://xssjirycnvkqrwleilkh.supabase.co/storage/v1/object/public/axeon-setup/update.json?t=${Date.now()}`
                );
                
                if (!response.ok) throw new Error("Failed to fetch release manifest");
                
                const data = await response.json();
                
                if (data.platforms) {
                    setLinks({
                        exe: data.platforms["windows-x86_64"]?.url || links.exe,
                        msStore: links.msStore,
                        macos: data.platforms["darwin-aarch64"]?.url || data.platforms["darwin-x86_64"]?.url || links.macos,
                        version: data.version || links.version
                    });
                }
            } catch (error) {
                console.error("Error fetching latest download links:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLatestRelease();
    }, []);

    return (
        <section id="download" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-indigo-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-100 dark:border-blue-800"
                    >
                        <Zap className="w-4 h-4 fill-current" /> Cross-Platform Power
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Axeon</span> Anywhere
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                    >
                        The ultimate pharmacy management desktop application. Optimized for speed, security, and simplicity.
                        <span className="block mt-2 text-sm font-bold opacity-75">Latest Stable Release: {links.version}</span>
                    </motion.p>
                </div>

                {/* Unified Download Hub */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                    
                    <div className="relative bg-white/70 backdrop-blur-2xl dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Primary Section: Windows */}
                            <div className="lg:w-3/5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200/60 dark:border-slate-800">
                                <div className="flex items-start gap-6 mb-10">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                                        <Monitor className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">Windows Client</h3>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xs">High-performance native application for Windows 10 & 11.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Auto-Updates
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Offline Sync
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Encrypted DB
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Hardware Support
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={links.exe}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all text-lg min-w-[200px]"
                                    >
                                        {isLoading ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <Download className="w-5 h-5" />
                                        )}
                                        {isLoading ? "Checking Latest..." : "Download Now"}
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={links.msStore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-4 px-8 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all outline-none"
                                    >
                                        <Store className="w-5 h-5" /> Microsoft Store
                                    </motion.a>
                                </div>
                            </div>

                            {/* Secondary Section: Other OS */}
                            <div className="lg:w-2/5 bg-slate-50/50 dark:bg-slate-900/50 p-8 md:p-12 flex flex-col justify-center">
                                <h4 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">Other Platforms</h4>
                                
                                <div className="space-y-6">
                                    <motion.a 
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={links.macos}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all hover:shadow-md hover:border-blue-500/50 group/item ${links.macos === "#" ? "opacity-50 pointer-events-none" : ""}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white flex items-center justify-center border border-slate-200/30 dark:border-slate-600/30 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                <Command className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">macOS Native</p>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-tight mt-0.5">
                                                    {links.macos === "#" ? "Coming Soon" : "macOS"}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-tighter transition-colors ${links.macos === "#" ? "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500" : "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 group-hover/item:bg-blue-600 group-hover/item:text-white"}`}>
                                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (links.macos === "#" ? "Stay Tuned" : "Download")}
                                        </div>
                                    </motion.a>

                                    <div className="p-6 rounded-[2rem] bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100/50 dark:border-indigo-800/30">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                            <p className="font-bold text-indigo-900 dark:text-indigo-200 text-sm">Security First</p>
                                        </div>
                                        <p className="text-xs text-indigo-700/70 dark:text-indigo-300/60 font-medium leading-relaxed">
                                            All Axeon builds are digitally signed and verified for your protection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Installation Hint */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-500 dark:text-slate-500 font-medium flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500 fill-amber-500" /> 
                        Initial setup takes less than 2 minutes. No credit card required to start your trial.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
