import { motion } from "framer-motion";
import {
    BarChart3,
    Box,
    CreditCard,
    FileText,
    Settings,
    Users
} from "lucide-react";

const features = [
    {
        icon: <Box className="w-5 h-5 text-blue-700 dark:text-blue-400" />,
        title: "Inventory Management",
        description: "Real-time tracking of stock levels, expirations, and low-stock alerts. Never run out of essentials."
    },
    {
        icon: <CreditCard className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />,
        title: "POS System",
        description: "Fast and reliable point of sale interface. Process sales offline or online with ease."
    },
    {
        icon: <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
        title: "Advanced Analytics",
        description: "Gain insights into sales trends, profit margins, and peak hours with detailed reports."
    },
    {
        icon: <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
        title: "Customer Database",
        description: "Manage customer profiles, purchase history, and loyalty programs efficiently."
    },
    {
        icon: <FileText className="w-5 h-5 text-red-600 dark:text-red-400" />,
        title: "Receipt Printing",
        description: "Generate professional receipts (thermal or A4) with your pharmacy logo."
    },
    {
        icon: <Settings className="w-5 h-5 text-slate-600 dark:text-slate-400" />,
        title: "Drug Reference",
        description: "Built-in reference for drug interactions, dosages, and contraindications."
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-14 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Everything You Need <br />
                            <span className="text-blue-700 dark:text-blue-400">To Run Your Pharmacy</span>
                        </h2>
                        <p className="text-base text-slate-600 dark:text-slate-400">
                            Axeon combines powerful features with an intuitive interface, making pharmacy management effortless.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {features.map((feature, index) => {
                            // Create asymmetrical layout classes based on index
                            let spanClass = "col-span-1";
                            if (index === 0) spanClass = "md:col-span-2 lg:col-span-2"; // Large highlight card
                            if (index === 1) spanClass = "md:col-span-1 lg:col-span-1";
                            if (index === 2) spanClass = "md:col-span-1 lg:col-span-1";
                            if (index === 3) spanClass = "md:col-span-1 lg:col-span-1";
                            if (index === 4) spanClass = "md:col-span-1 lg:col-span-2"; // Second highlight card
                            if (index === 5) spanClass = "md:col-span-2 lg:col-span-1";

                            // Make the highlighted cards slightly larger text
                            const titleSize = (index === 0 || index === 4) ? 'text-xl md:text-2xl' : 'text-lg md:text-xl';
                            const textSize = (index === 0 || index === 4) ? 'text-sm md:text-base max-w-sm' : 'text-sm';

                            return (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.95, y: 10 },
                                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
                                    }}
                                    className={`p-6 rounded-3xl bg-white/70 backdrop-blur-md dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group relative overflow-hidden flex flex-col ${spanClass}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity dark:from-blue-900/10 pointer-events-none" />
                                    
                                    <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center shadow-sm border border-slate-200/50 dark:border-slate-700 mb-5 group-hover:scale-105 group-hover:shadow-md transition-all duration-300 text-blue-600 dark:text-blue-400 shrink-0">
                                        {feature.icon}
                                    </div>
                                    
                                    <h3 className={`relative z-10 font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors tracking-tight ${titleSize}`}>
                                        {feature.title}
                                    </h3>
                                    
                                    <p className={`relative z-10 text-slate-600 dark:text-slate-400 leading-relaxed mt-auto ${textSize}`}>
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
