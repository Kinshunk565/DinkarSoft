import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ChatbotDemo from './ChatbotDemo';
import DemoModal from '../features/DemoModal';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [url, setUrl] = useState('');

    const handleStartDemo = (e) => {
        e.preventDefault();
        if (url) {
            setIsModalOpen(true);
        }
    };

    return (
        <section className="min-h-[90vh] flex items-center relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-white to-surface-alt">
            <DemoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                url={url}
            />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brand-teal/5 text-brand-teal text-sm font-semibold tracking-wide border border-brand-teal/10"
                    >
                        <Sparkles size={14} /> AI-POWERED CUSTOMER SUPPORT
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-brand-navy tracking-tight"
                    >
                        Automate Support <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-600">
                            In Minutes.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-text-body mb-8 max-w-lg leading-relaxed"
                    >
                        Instantly deploy an AI agent trained on your website content.
                        No coding required. Just enter your URL.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="max-w-md"
                    >
                        <form onSubmit={handleStartDemo} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-blue-500 rounded-xl opacity-20 blur group-hover:opacity-40 transition duration-500" />
                            <div className="relative flex p-1.5 bg-white rounded-xl border border-slate-200 shadow-xl">
                                <input
                                    type="url"
                                    placeholder="dinkarsoft.com"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="flex-1 px-4 py-3 bg-transparent text-brand-navy placeholder:text-slate-400 outline-none text-base"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-brand-navy hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-navy-900/20 whitespace-nowrap"
                                >
                                    Create Bot <ArrowRight size={16} />
                                </button>
                            </div>
                        </form>
                        <p className="mt-3 text-xs text-slate-400 flex items-center gap-2">
                            <PlayCircle size={14} className="text-brand-teal" />
                            No credit card required. Free demo generation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-12 pt-8 border-t border-slate-200"
                    >
                        <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Trusted by industry leaders</p>
                        <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholders for logos */}
                            <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" />
                            <div className="h-8 w-24 bg-slate-200 rounded animate-pulse delay-75" />
                            <div className="h-8 w-24 bg-slate-200 rounded animate-pulse delay-150" />
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual */}
                <div className="relative z-10 lg:h-auto flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative w-full max-w-lg">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-blue-500 rounded-2xl opacity-20 blur-lg" />
                        <div className="relative bg-white rounded-2xl shadow-card-hover border border-slate-100 overflow-hidden">
                            <ChatbotDemo />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
