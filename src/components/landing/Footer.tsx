import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/axeon_light.png" alt="Axeon" className="h-8 w-auto block dark:hidden" />
                            <img src="/axeon_dark.png" alt="Axeon" className="h-8 w-auto hidden dark:block" />
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            Empowering pharmacies with modern, reliable, and efficient management solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"><Github className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><a href="#features" className="hover:text-blue-700 transition-colors">Features</a></li>
                            <li><a href="#pricing" className="hover:text-blue-700 transition-colors">Pricing</a></li>
                            <li><a href="#download" className="hover:text-blue-700 transition-colors">Download</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Support Center</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Community</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> maxwellquofie77@gmail.com</li>
                            <li>Kumasi <br /> Ghana</li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} Axeon. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
