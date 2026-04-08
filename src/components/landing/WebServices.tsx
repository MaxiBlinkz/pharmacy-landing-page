import { motion } from "framer-motion";
import { Globe, Smartphone, Code, MessageCircle, Mail, Zap, Layers, Sparkles } from "lucide-react";

export const WebServices = () => {
    const services = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Website Design",
            description: "Custom, responsive, and high-converting websites tailored to your brand identity and business goals.",
            color: "blue"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile App Development",
            description: "Modern cross-platform mobile applications that provide seamless user experiences on both iOS and Android.",
            color: "indigo"
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Software Development",
            description: "Scalable enterprise solutions, APIs, and custom software designed to solve complex business challenges.",
            color: "violet"
        }
    ];

    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6 border border-indigo-100 dark:border-indigo-800"
                    >
                        <Sparkles className="w-4 h-4 fill-current" /> Beyond Pharmacy Management
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Services</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 font-medium"
                    >
                        Looking for more than just a pharmacy system? I offer end-to-end development services to help your business thrive in the digital age.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-${service.color}-100 dark:bg-${service.color}-900/30 text-${service.color}-600 dark:text-${service.color}-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <Layers className="w-64 h-64 -mr-20 -mt-20" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-black mb-4">Have a project in mind?</h3>
                            <p className="text-blue-100 text-lg font-medium max-w-md">
                                Let's build something amazing together. Reach out for a free consultation and quote.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/233594716427"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-black/10 transition-colors hover:bg-blue-50"
                            >
                                <MessageCircle className="w-5 h-5" /> WhatsApp Me
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:maxwellquofie77@gmail.com"
                                className="px-8 py-4 bg-blue-500/20 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500/30 transition-colors"
                            >
                                <Mail className="w-5 h-5" /> Send Email
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500" /> Fast delivery and 24/7 technical support included.
                    </p>
                </div>
            </div>
        </section>
    );
};
