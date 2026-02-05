import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, MessageSquare, Palette, Brain } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-surface-charcoal p-8 rounded-2xl border border-white/5 hover:border-neon-violet/50 hover:shadow-glow transition-all group h-full"
    >
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-violet/20 transition-colors">
            <Icon className="text-neon-violet w-6 h-6 group-hover:text-white" />
        </div>
        <h3 className="text-xl font-display font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
            {description}
        </p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            icon: Brain,
            title: "Zero Hallucinations",
            description: "We enforce strict 'Positive Scope' rules. If it's not on your site, the bot doesn't invent it."
        },
        {
            icon: ShieldCheck,
            title: "Privacy First",
            description: "Your data stays local. We don't train public models on your proprietary info."
        },
        {
            icon: Search,
            title: "Predictable Fixed Pricing",
            description: "No token overages or hidden fees. Scale your support without worrying about runaway costs."
        },
        {
            icon: MessageSquare,
            title: "Client Portal",
            description: "See what your customers are asking. Capture leads directly from the chat."
        },
        {
            icon: Palette,
            title: "Brand Match",
            description: "Customize colors, logos, and greeting messages to fit your brand identity perfectly."
        }
    ];

    return (
        <section id="features" className="py-24 px-6 md:px-12 relative z-10 bg-vanta-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Why <span className="text-neon-pink">Us?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Addressing your pain points with precision, privacy, and control.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
