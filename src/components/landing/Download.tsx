import { motion } from "framer-motion";
import { Download, Monitor, Store, Command } from "lucide-react";

export const DownloadSection = () => {
    const downloadExe = import.meta.env.VITE_APP_DOWNLOAD_LINK_EXE || "#";
    const downloadMsStore = import.meta.env.VITE_APP_DOWNLOAD_LINK_MSSTORE || "#";
    const downloadMacOs = import.meta.env.VITE_APP_DOWNLOAD_LINK_MACOS || "#";

    return (
        <section id="download" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-100 dark:border-blue-800"
                    >
                        <Download className="w-4 h-4" /> Available Now
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Get Started with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Axeon</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                    >
                        Download the native desktop application for your system. Experience lighting fast management today.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                    {/* Windows Exe */}
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -8 }}
                        href={downloadExe}
                        target={downloadExe.startsWith('http') ? "_blank" : "_self"}
                        rel={downloadExe.startsWith('http') ? "noopener noreferrer" : ""}
                        className="group relative p-6 md:p-8 bg-white/70 backdrop-blur-md dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 dark:shadow-none transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="w-14 h-14 md:w-20 md:h-20 mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 dark:from-blue-900/40 dark:to-blue-900/10 dark:text-blue-400 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <Monitor className="w-7 h-7 md:w-10 md:h-10" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Windows Setup</h3>
                        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mb-6 md:mb-8">Works seamlessly on Windows 10 & 11 (x64 architectures).</p>
                        
                        <div className="mt-auto w-full py-3 md:py-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold flex items-center justify-center gap-2 text-slate-800 dark:text-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Download className="w-4 h-4 md:w-5 md:h-5" /> Download .exe
                        </div>
                    </motion.a>

                    {/* Microsoft Store */}
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: -8 }}
                        href={downloadMsStore}
                        target={downloadMsStore.startsWith('http') ? "_blank" : "_self"}
                        rel={downloadMsStore.startsWith('http') ? "noopener noreferrer" : ""}
                        className="group relative p-6 md:p-8 bg-white/70 backdrop-blur-md dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 dark:shadow-none transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="w-14 h-14 md:w-20 md:h-20 mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 text-indigo-600 dark:from-indigo-900/40 dark:to-indigo-900/10 dark:text-indigo-400 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <Store className="w-7 h-7 md:w-10 md:h-10" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-indigo-600 transition-colors">Microsoft Store</h3>
                        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mb-6 md:mb-8">Secure, automated updates through the official Microsoft Store.</p>
                        
                        <div className="mt-auto w-full py-3 md:py-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold flex items-center justify-center gap-2 text-slate-800 dark:text-slate-200 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Download className="w-4 h-4 md:w-5 md:h-5" /> Get App
                        </div>
                    </motion.a>

                    {/* macOS */}
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ y: -8 }}
                        href={downloadMacOs}
                        target={downloadMacOs.startsWith('http') ? "_blank" : "_self"}
                        rel={downloadMacOs.startsWith('http') ? "noopener noreferrer" : ""}
                        className="group relative p-6 md:p-8 bg-white/70 backdrop-blur-md dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-300 dark:shadow-none transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="w-14 h-14 md:w-20 md:h-20 mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 text-slate-800 dark:from-slate-800 dark:to-slate-700 dark:text-white flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <Command className="w-7 h-7 md:w-10 md:h-10" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-teal-600 transition-colors">macOS Build</h3>
                        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mb-6 md:mb-8">Universal binary for incredibly fast Apple Silicon & Intel support.</p>
                        
                        <div className="mt-auto w-full py-3 md:py-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold flex items-center justify-center gap-2 text-slate-800 dark:text-slate-200 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            <Download className="w-4 h-4 md:w-5 md:h-5" /> Download .dmg
                        </div>
                    </motion.a>
                </div>

                {/* Setup Steps Timeline */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="max-w-4xl mx-auto p-8 md:p-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-800 rounded-[2.5rem]"
                >
                    <h3 className="text-center font-bold text-slate-800 dark:text-slate-200 mb-10 text-xl tracking-tight">Installation in 3 Simple Steps</h3>
                    <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-slate-200 dark:bg-slate-800 -z-10"></div>
                        
                        <div className="flex-1 flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-4 shadow-lg shadow-blue-600/30 border-4 border-white dark:border-slate-900">1</div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Download Client</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Grab the executable and run the installer on your machine.</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-black text-xl mb-4 border-4 border-white dark:border-slate-900">2</div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Admin Account</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Launch Axeon and create your offline administrator profile.</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-black text-xl mb-4 border-4 border-white dark:border-slate-900">3</div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Manage Store</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Import products instantly and start processing sales!</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
