import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader, CheckCircle, Bot, Send, Globe, Brain, Zap } from 'lucide-react';

const DemoModal = ({ isOpen, onClose, url }) => {
    const [step, setStep] = useState('form'); // form, processing, ready
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: url || '',
        company: '',
        address: ''
    });
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState([]);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    // Reset when closed
    useEffect(() => {
        if (!isOpen) {
            setStep('form');
            setProgress(0);
            setLogs([]);
            setMessages([]);
            setFormData({
                name: '',
                email: '',
                phone: '',
                website: url || '',
                company: '',
                address: ''
            });
        } else {
            // Update website if url prop changes while open (unlikely but good practice)
            setFormData(prev => ({ ...prev, website: url || prev.website }));
        }
    }, [isOpen, url]);

    // Processing Logic
    useEffect(() => {
        if (step !== 'processing') return;

        const processSteps = [
            { time: 500, msg: `Connecting to ${url}...`, progress: 10 },
            { time: 1500, msg: "Crawling sitemap...", progress: 30 },
            { time: 2500, msg: "Extracting key product data...", progress: 60 },
            { time: 3500, msg: "Vectorizing content...", progress: 80 },
            { time: 4500, msg: "Initializing neural weights...", progress: 95 },
            { time: 5500, msg: "Bot ready!", progress: 100 }
        ];

        let timeouts = [];

        processSteps.forEach(({ time, msg, progress: p }) => {
            const t = setTimeout(() => {
                setLogs(prev => [...prev, msg]);
                setProgress(p);
                if (p === 100) {
                    setTimeout(() => {
                        setStep('ready');
                        setMessages([{
                            id: 1,
                            role: 'bot',
                            text: `Hi! I've studied ${url} and I'm ready to help. Ask me about your pricing, features, or support options.`
                        }]);
                    }, 800);
                }
            }, time);
            timeouts.push(t);
        });

        return () => timeouts.forEach(clearTimeout);
    }, [step, url]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setStep('processing');
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Fake bot thinking
        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                role: 'bot',
                text: "That's a great question! Based on the site structure, I can tell you that our AI platform handles this automatically. (This is a demo response - connect your backend to get real answers!)"
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    // Auto-scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-brand-navy/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-5xl h-[85vh] bg-surface-white rounded-2xl shadow-2xl flex overflow-hidden border border-slate-200"
                    >
                        {/* Close Button */}
                        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-red-500">
                            <X size={20} />
                        </button>

                        {step === 'form' ? (
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-50/50">
                                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="text-2xl font-display font-bold text-brand-navy mb-2 text-center">Setup Your Demo Bot</h3>
                                    <p className="text-slate-500 mb-8 text-center text-sm">We'll train a custom AI agent on {url || 'your website'} in seconds.</p>

                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-teal transition-colors text-sm"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Work Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-teal transition-colors text-sm"
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-teal transition-colors text-sm"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phone}
                                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Website URL</label>
                                                <input
                                                    type="url"
                                                    required
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-teal transition-colors text-sm"
                                                    placeholder="https://example.com"
                                                    value={formData.website}
                                                    onChange={e => setFormData({ ...formData, website: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Company Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-teal transition-colors text-sm"
                                                placeholder="Acme Inc."
                                                value={formData.company}
                                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Company Address <span className="text-slate-400 font-normal lowercase ml-1">(Optional)</span></label>
                                            <input
                                                type="text"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-teal transition-colors text-sm"
                                                placeholder="123 Business St, City, Country"
                                                value={formData.address}
                                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl mt-4 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                                        >
                                            <Bot size={20} />
                                            Generate Demo Bot
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ) : step === 'processing' ? (
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                                <div className="w-24 h-24 mb-8 relative">
                                    <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                                    <div
                                        className="absolute inset-0 border-4 border-brand-teal rounded-full border-t-transparent animate-spin"
                                    ></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-brand-teal font-bold text-xl">
                                        {progress}%
                                    </div>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-brand-navy mb-2">Buildling your AI...</h3>
                                <p className="text-slate-500 mb-8 max-w-md">Scanning {url} and training a dedicated model on your content.</p>

                                <div className="w-full max-w-md bg-slate-50 rounded-lg p-4 border border-slate-100 font-mono text-xs text-left h-48 overflow-y-auto">
                                    {logs.map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="mb-1 text-slate-600 flex items-center gap-2"
                                        >
                                            <span className="text-brand-teal">✓</span> {log}
                                        </motion.div>
                                    ))}
                                    <div className="animate-pulse text-brand-teal">_</div>
                                </div>
                            </div>
                        ) : (
                            // Ready State - Split View
                            <div className="flex w-full h-full flex-col md:flex-row">
                                {/* Left Sidebar - Context */}
                                <div className="w-full md:w-80 bg-slate-50 border-r border-slate-200 p-6 flex flex-col">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="p-2 bg-brand-teal/10 rounded-lg text-brand-teal">
                                                <Globe size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-brand-navy text-sm">Source</h3>
                                                <p className="text-xs text-slate-500 truncate max-w-[150px]">{url}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 overflow-y-auto">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Learned Knowledge</h4>
                                        <div className="space-y-3">
                                            {['Pricing', 'Features', 'Contact', 'About Us', 'API Docs'].map((item) => (
                                                <div key={item} className="flex items-center gap-2 text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">
                                                    <Brain size={14} className="text-brand-teal" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-slate-200">
                                        <div className="bg-brand-navy rounded-xl p-4 text-white text-sm">
                                            <div className="flex items-center gap-2 mb-2 font-bold text-brand-teal-light">
                                                <Zap size={16} /> Pro Tip
                                            </div>
                                            <p className="opacity-80 text-xs leading-relaxed">
                                                DinkarSoft bots automatically sync when you update your website content.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Panel - Chat */}
                                <div className="flex-1 flex flex-col bg-white">
                                    {/* Chat Header */}
                                    <div className="h-16 border-b border-slate-100 flex items-center px-6 justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <div className="w-2 h-2 rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-white"></div>
                                                <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center text-white">
                                                    <Bot size={18} />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-brand-navy text-sm">Support Bot</h3>
                                                <p className="text-xs text-slate-400">Online • Fixed by DinkarSoft</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chat Messages */}
                                    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                                        {messages.map((msg) => (
                                            <motion.div
                                                key={msg.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div className={`
                                                    max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                                                    ${msg.role === 'user'
                                                        ? 'bg-brand-navy text-white rounded-tr-none'
                                                        : 'bg-white border border-slate-200 text-text-body rounded-tl-none'}
                                                `}>
                                                    {msg.text}
                                                </div>
                                            </motion.div>
                                        ))}
                                        <div ref={messagesEndRef} />
                                    </div>

                                    {/* Input Area */}
                                    <div className="p-4 bg-white border-t border-slate-100">
                                        <form onSubmit={handleSendMessage} className="relative">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                placeholder="Type your message..."
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-4 pr-12 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all text-sm text-brand-navy"
                                            />
                                            <button
                                                type="submit"
                                                disabled={!inputValue.trim()}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-teal text-white rounded-lg hover:bg-teal-600 disabled:opacity-50 disabled:hover:bg-brand-teal transition-all"
                                            >
                                                <Send size={16} />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DemoModal;
