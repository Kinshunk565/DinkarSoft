import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, ArrowRight } from 'lucide-react';

const PopupManager = () => {
    const [activePopup, setActivePopup] = useState(null);
    const [hasSeenWelcome, setHasSeenWelcome] = useState(false);

    // Trigger Welcome Popup after 3 seconds
    useEffect(() => {
        if (!hasSeenWelcome) {
            const timer = setTimeout(() => {
                setActivePopup('welcome');
                setHasSeenWelcome(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [hasSeenWelcome]);

    const closePopup = () => setActivePopup(null);

    return (
        <>
            {/* 1. Welcome Modal */}
            <Modal
                isOpen={activePopup === 'welcome'}
                onClose={closePopup}
                title="Welcome to the Future"
                actionLabel="Explore Now"
                onAction={closePopup}
            >
                <p className="mb-4 text-slate-300">
                    Experience the next generation of digital solutions with DinkarSoft.
                    We've redesigned our experience to be faster, bolder, and more intuitive.
                </p>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-brand-teal font-bold">New:</span> Check out our interactive portfolio.
                </div>
            </Modal>

            {/* 2. Hiring/Newsletter Badge (Bottom Right) */}
            <motion.div
                className="fixed bottom-8 right-8 z-[90]"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 5 }}
            >
                <AnimatePresence mode="wait">
                    {activePopup === 'newsletter' ? (
                        <motion.div
                            key="expanded"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-brand-navy text-white border border-brand-teal/30 p-0 rounded-2xl shadow-2xl w-[340px] overflow-hidden relative"
                        >
                            {/* Decorative Top Gradient */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-blue-500" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/20 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="p-6 relative z-10">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="inline-block px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal-light text-xs font-bold tracking-wide mb-2 border border-brand-teal/20">
                                        EXCLUSIVE
                                    </div>
                                    <button
                                        onClick={() => setActivePopup(null)}
                                        className="text-slate-400 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                <h4 className="font-display font-bold text-xl mb-2">Join the Inner Circle</h4>
                                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                                    Get exclusive design insights and top-tier tech trends delivered directly to your inbox.
                                </p>

                                <div className="flex flex-col gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-sm w-full focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none placeholder:text-slate-500 text-white transition-all"
                                    />
                                    <button className="bg-brand-teal text-white font-medium py-3 rounded-lg hover:bg-teal-600 transition-colors shadow-lg shadow-teal-900/20 flex items-center justify-center gap-2">
                                        Subscribe Now <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.button
                            key="badge"
                            onClick={() => setActivePopup('newsletter')}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-navy border border-brand-teal/30 p-3 pr-6 rounded-full shadow-2xl shadow-teal-900/20 flex items-center gap-4 group hover:border-brand-teal transition-colors"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-brand-teal blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="bg-gradient-to-br from-brand-teal to-teal-800 p-3 rounded-full text-white relative z-10">
                                    <Mail size={20} />
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] text-brand-teal-light font-bold uppercase tracking-wider">Stay Updated</div>
                                <div className="text-sm font-bold text-white group-hover:text-brand-teal-light transition-colors">Join Newsletter</div>
                            </div>
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default PopupManager;
