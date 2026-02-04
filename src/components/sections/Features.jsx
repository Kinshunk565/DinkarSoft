import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-surface-charcoal p-8 rounded-2xl border border-white/5 hover:border-neon-violet/50 hover:shadow-glow transition-all group"
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
            icon: Cpu,
            title: "We Speak Your Business Language",
            description: "Generic AI fails because it doesn't know you. Our RAG technology builds a custom knowledge base from your documents and data, answering with 100% precision."
        },
        {
            icon: ShieldCheck,
            title: "Built for Privacy & Speed",
            description: "Security is our foundation. We use advanced domain-whitelisting and secure tunnels. Our local-first architecture means lightning-fast responses without data risks."
        },
        {
            icon: Zap,
            title: "Future-Proof Architecture",
            description: "Today a chatbot, tomorrow an agent. Our backend is built on flexible Python/FastAPI architecture that scales with you, ready for Agentic Workflows."
        }
    ];

    return (
        <section id="solutions" className="py-24 px-6 md:px-12 relative z-10 bg-vanta-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Why DinkarSoft AI <span className="text-neon-pink">Leads the Market</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Zero-Config RAG Chatbots engineered for enterprise scale and security.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
