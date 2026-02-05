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
            human: "Variable"
        },
        {
            name: "Source Transparency",
            dinkar: "Source Linking",
            generic: "Black Box",
            human: "N/A"
        },
        {
            name: "Cost",
            dinkar: "Fixed Flat Rate",
            generic: "High Token Costs",
            human: "Extremely High"
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-surface-alt relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold tracking-wide">
                        COMPARE
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
                        Why Choose DinkarSoft?
                    </h2>
                    <p className="text-text-body max-w-2xl mx-auto">
                        See how our specialized AI solution outperforms generic models and traditional staffing.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
                >
                    <div className="min-w-[900px] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-4 border-b border-slate-100 bg-slate-50/50 text-sm tracking-wide uppercase text-slate-500 font-semibold">
                            <div className="p-6">Feature</div>
                            <div className="p-6 text-brand-teal bg-brand-teal/5 border-x border-brand-teal/10 relative">
                                DinkarSoft AI
                                <div className="absolute top-0 left-0 w-full h-1 bg-brand-teal" />
                            </div>
                            <div className="p-6">Generic Chatbots</div>
                            <div className="p-6">Human Support</div>
                        </div>

                        {/* Rows */}
                        {features.map((row, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-4 border-b border-slate-100 hover:bg-slate-50/30 transition-colors last:border-0`}
                            >
                                {/* Feature Name */}
                                <div className="p-6 flex items-center text-brand-navy font-medium">
                                    {row.name}
                                </div>

                                {/* DinkarSoft Column */}
                                <div className="p-6 flex items-center text-brand-navy font-bold bg-brand-teal/5 border-x border-brand-teal/10 shadow-[inset_0_0_20px_rgba(15,118,110,0.02)]">
                                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 flex-shrink-0">
                                        <Check className="w-3.5 h-3.5 text-brand-teal" />
                                    </div>
                                    {row.dinkar}
                                </div>

                                {/* Generic Column */}
                                <div className="p-6 flex items-center text-text-body">
                                    {row.generic === "Hallucinates" || row.generic === "Public Training" || row.generic === "High Token Costs" || row.generic === "Black Box" ? (
                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                                            <X className="w-3.5 h-3.5 text-red-600" />
                                        </div>
                                    ) : (
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-3 flex-shrink-0">
                                            <Minus className="w-3.5 h-3.5 text-slate-500" />
                                        </div>
                                    )}
                                    {row.generic}
                                </div>

                                {/* Human Column */}
                                <div className="p-6 flex items-center text-text-body">
                                    {row.human === "Weeks of Hiring" || row.human === "Very High" || row.human === "Variable" || row.human === "Extremely High" ? (
                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                                            <X className="w-3.5 h-3.5 text-red-600" />
                                        </div>
                                    ) : row.human === "N/A" ? (
                                        <span className="text-slate-400 pl-2">N/A</span>
                                    ) : (
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-3 flex-shrink-0">
                                            <Check className="w-3.5 h-3.5 text-slate-500" />
                                        </div>
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
