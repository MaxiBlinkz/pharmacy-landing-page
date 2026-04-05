import { motion } from "framer-motion";
import { Cloud, Server, Globe } from "lucide-react";

export const CloudTeaser = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                        <Cloud className="w-6 h-6 text-blue-400 mr-2" />
                        <span className="font-semibold text-blue-100">Coming Soon</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Axeon Cloud Orchestrator
                    </h2>

                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
                        Seamlessly connect multiple pharmacy branches, manage universal inventory, and access real-time analytics from anywhere in the world.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                            <Globe className="w-8 h-8 text-indigo-400 mb-4 mx-auto" />
                            <h3 className="font-bold text-lg mb-2">Remote Access</h3>
                            <p className="text-sm text-slate-400">Monitor your business from any device, anywhere.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                            <Server className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                            <h3 className="font-bold text-lg mb-2">Centralized Data</h3>
                            <p className="text-sm text-slate-400">One database for all your branches. Real-time sync.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-amber-400 mx-auto mb-4 animate-spin-slow"></div>
                            <h3 className="font-bold text-lg mb-2">Auto Backups</h3>
                            <p className="text-sm text-slate-400">Never lose data. Automated daily cloud backups.</p>
                        </div>
                    </div>

                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email for updates"
                            className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
                        />
                        <button type="submit" className="px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors">
                            Notify Me
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
