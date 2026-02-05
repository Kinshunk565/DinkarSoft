import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ChatbotDemo from './ChatbotDemo';

const FloatingCrystal = ({ className, delay }) => (
    <motion.div
        className={`absolute ${className} backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-glow rounded-xl`}
        initial={{ y: 0, rotate: 0 }}
        animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
    />
);

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-32">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-neon-violet)_0%,_transparent_50%)] opacity-10 blur-[100px] pointer-events-none" />

            {/* Floating 3D Elements */}
            <FloatingCrystal className="w-24 h-24 top-1/4 left-10 opacity-60" delay={0} />
            <FloatingCrystal className="w-32 h-32 bottom-1/4 right-10 opacity-40" delay={2} />
            <FloatingCrystal className="w-16 h-16 top-1/3 right-1/4 opacity-30" delay={1} />

            <div className="z-10 text-center max-w-5xl px-4 relative w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-8 tracking-tighter">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            Automate Support
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-violet via-neon-pink to-neon-violet bg-300% animate-gradient">
                            In Minutes, Not Months.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    The secure, verifiable alternative to generic AI and expensive human teams.
                    <span className="text-white"> Deploy in 2 minutes</span> with
                    <span className="text-cyber-cyan"> fixed pricing</span> and
                    <span className="text-white"> 100% data privacy</span>.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Button variant="primary" className="min-w-[200px]">
                        Get Started
                    </Button>
                    <Button variant="secondary" className="min-w-[200px]">
                        Explore Services
                    </Button>
                </motion.div>

                {/* Live Demo */}
                <ChatbotDemo />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
