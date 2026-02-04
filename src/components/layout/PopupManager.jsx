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
                <p className="mb-4">
                    Experience the next generation of digital solutions with DinkarSoft.
                    We've redesigned our experience to be faster, bolder, and more intuitive.
                </p>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-neon-violet font-bold">New:</span> Check out our interactive portfolio.
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
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-surface-charcoal border border-neon-pink/30 p-6 rounded-2xl shadow-glow w-80"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="font-bold text-lg">Join the Inner Circle</h4>
                                <button onClick={() => setActivePopup(null)} className="text-gray-400 hover:text-white"><X size={18} /></button>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">Get exclusive design insights and tech trends delivered to your inbox.</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email address" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm w-full focus:border-neon-pink outline-none" />
                                <button className="bg-neon-pink p-2 rounded hover:bg-neon-pink/80"><ArrowRight size={18} /></button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.button
                            key="badge"
                            onClick={() => setActivePopup('newsletter')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-surface-charcoal border border-white/10 p-4 rounded-full shadow-lg flex items-center gap-3 group"
                        >
                            <div className="bg-neon-pink/20 p-2 rounded-full text-neon-pink group-hover:bg-neon-pink group-hover:text-white transition-colors">
                                <Mail size={20} />
                            </div>
                            <div className="text-left pr-2">
                                <div className="text-xs text-gray-400 font-medium">New Updates</div>
                                <div className="text-sm font-bold">Subscribe</div>
                            </div>
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default PopupManager;
