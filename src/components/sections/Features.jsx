import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, MessageSquare, Palette, Brain } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 relative overflow-hidden"
    >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300 text-brand-teal">
            <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-display font-bold mb-3 text-brand-navy group-hover:text-brand-teal transition-colors">{title}</h3>
        <p className="text-text-body leading-relaxed text-sm">
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
        <section id="features" className="py-24 px-6 md:px-12 relative z-10 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold tracking-wide border border-brand-teal/20">
                        FEATURES
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-brand-navy">
                        Why Leading Companies <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-600">Choose DinkarSoft?</span>
                    </h2>
                    <p className="text-text-body max-w-2xl mx-auto text-lg">
                        Addressing your technical pain points with precision, privacy, and absolute control.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
