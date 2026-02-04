import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, actionLabel, onAction }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-surface-charcoal border border-white/10 p-8 rounded-2xl max-w-lg w-full relative shadow-glow"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {title && (
                                <h3 className="text-2xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    {title}
                                </h3>
                            )}

                            <div className="text-gray-300 mb-8">
                                {children}
                            </div>

                            {actionLabel && (
                                <div className="flex justify-end gap-4">
                                    <Button variant="ghost" onClick={onClose} className="px-6">
                                        Close
                                    </Button>
                                    <Button onClick={onAction}>
                                        {actionLabel}
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
