import React from 'react';
import { motion } from 'framer-motion';
import { Radar, Filter, Rocket } from 'lucide-react';

const StepCard = ({ icon: Icon, step, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="relative flex flex-col items-center text-center p-6"
    >
        <div className="w-16 h-16 bg-surface-charcoal rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-glow transition-all hover:scale-110 hover:border-neon-cyan/50 z-10">
            <Icon className="text-neon-cyan w-8 h-8" />
        </div>
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neon-cyan/50 to-transparent -z-0 md:hidden"></div>

        <h3 className="text-neon-pink font-mono text-sm mb-2">{step}</h3>
        <h4 className="text-xl font-display font-bold mb-3 text-white">{title}</h4>
        <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
            {description}
        </p>
    </motion.div>
);

const HowItWorks = () => {
    const steps = [
        {
            icon: Radar,
            step: "STEP 1",
            title: "Scan",
            description: "We crawl your sitemap and identifying key product pages, skipping the fluff."
        },
        {
            icon: Filter,
            step: "STEP 2",
            title: "Curate",
            description: "You choose what your bot learns. Deselect outdated blogs or irrelevant pages with one click."
        },
        {
            icon: Rocket,
            step: "STEP 3",
            title: "Deploy",
            description: "Get a copy-paste snippet. Your bot is live and answers questions using your verified data."
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 relative z-10 bg-vanta-black/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        How It <span className="text-neon-cyan">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Three simple steps to automate your customer support.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent border-t border-dashed border-white/10"></div>

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
