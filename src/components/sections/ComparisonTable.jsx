import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const ComparisonTable = () => {
    const features = [
        {
            name: "Setup Time",
            dinkar: "< 2 Mins",
            generic: "Days / Weeks",
            human: "Weeks of Hiring"
        },
        {
            name: "Data Privacy",
            dinkar: "Local / Private Cloud",
            generic: "Public Training",
            human: "N/A"
        },
        {
            name: "Accuracy",
            dinkar: "High (Strict Scope)",
            generic: "Hallucinates",
            human: "High"
        },
        {
            name: "Source Transparency",
            dinkar: "Source Linking",
            generic: "Text Only",
            human: "N/A"
        },
        {
            name: "Cost",
            dinkar: "Fixed / Predictable",
            generic: "High Token Costs",
            human: "Very High"
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 relative z-10 bg-surface-charcoal/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Why We <span className="text-neon-cyan">Win</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See how DinkarSoft AI stacks up against the competition.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto"
                >
                    <div className="min-w-[800px] bg-surface-charcoal rounded-2xl border border-white/5 overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-4 bg-white/5 border-b border-white/5">
                            <div className="p-6 font-display font-bold text-gray-400">Feature</div>
                            <div className="p-6 font-display font-bold text-neon-cyan bg-neon-cyan/5 border-x border-neon-cyan/20 relative">
                                DinkarSoft AI
                                <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                            </div>
                            <div className="p-6 font-display font-bold text-gray-400">Generic Chatbots</div>
                            <div className="p-6 font-display font-bold text-gray-400">Human Support</div>
                        </div>

                        {/* Rows */}
                        {features.map((row, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-4 border-b border-white/5 hover:bg-white/2 transition-colors ${index === features.length - 1 ? 'border-b-0' : ''
                                    }`}
                            >
                                <div className="p-6 flex items-center text-gray-300 font-medium">
                                    {row.name}
                                </div>
                                <div className="p-6 flex items-center text-white font-bold bg-neon-cyan/5 border-x border-neon-cyan/20">
                                    <Check className="w-5 h-5 text-neon-cyan mr-2 flex-shrink-0" />
                                    {row.dinkar}
                                </div>
                                <div className="p-6 flex items-center text-gray-400">
                                    {row.generic === "Hallucinates" || row.generic === "Public Training" || row.generic === "High Token Costs" ? (
                                        <X className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
                                    ) : (
                                        <Minus className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                                    )}
                                    {row.generic}
                                </div>
                                <div className="p-6 flex items-center text-gray-400">
                                    {row.human === "Weeks of Hiring" || row.human === "Very High" ? (
                                        <X className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
                                    ) : row.human === "N/A" ? (
                                        <span className="text-gray-600">N/A</span>
                                    ) : (
                                        <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                                    )}
                                    {row.human !== "N/A" && row.human}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ComparisonTable;
