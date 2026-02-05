import React from 'react';
import { motion } from 'framer-motion';
import { Radar, Filter, Rocket } from 'lucide-react';

const StepCard = ({ icon: Icon, step, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300"
    >
        {/* Step Badge */}
        <div className="absolute -top-4 bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            {step}
        </div>

        <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-900/20 text-white z-10 group">
            <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        </div>

        <h4 className="text-xl font-display font-bold mb-3 text-brand-navy">{title}</h4>
        <p className="text-text-body leading-relaxed text-sm">
            {description}
        </p>
    </motion.div>
);

const HowItWorks = () => {
    const steps = [
        {
            icon: Radar,
            step: "STEP 1",
            title: "Smart Scan",
            description: "We crawl your sitemap and identifying key product pages, skipping the fluff."
        },
        {
            icon: Filter,
            step: "STEP 2",
            title: "Curate Knowledge",
            description: "You choose what your bot learns. Deselect outdated blogs or irrelevant pages with one click."
        },
        {
            icon: Rocket,
            step: "STEP 3",
            title: "Instant Deploy",
            description: "Get a copy-paste snippet. Your bot is live and answers questions using your verified data."
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 relative z-10 bg-surface-alt overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide border border-blue-100">
                        PROCESS
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-brand-navy">
                        How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-600">Works</span>
                    </h2>
                    <p className="text-text-body max-w-2xl mx-auto text-lg">
                        Three simple steps to automate your customer support without the technical headaches.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[50%] left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 -z-10 -translate-y-1/2 rounded-full opacity-50"></div>

                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            {...step}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
