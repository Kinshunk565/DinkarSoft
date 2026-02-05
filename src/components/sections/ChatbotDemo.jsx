import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, RefreshCw } from 'lucide-react';

const ChatMessage = ({ message }) => {
    const isBot = message.sender === 'bot';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex gap-3 mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}
        >
            {isBot && (
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20 flex-shrink-0">
                    <Bot className="w-4 h-4 text-brand-teal" />
                </div>
            )}

            <div className={`
                max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                ${isBot
                    ? 'bg-white border border-slate-200 text-text-body rounded-tl-none'
                    : 'bg-brand-teal text-white rounded-tr-none'}
            `}>
                {message.text}
            </div>

            {!isBot && (
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <User className="w-4 h-4 text-slate-500" />
                </div>
            )}
        </motion.div>
    );
};

const TypingIndicator = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex gap-3 mb-4 justify-start"
    >
        <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20 flex-shrink-0">
            <Bot className="w-4 h-4 text-brand-teal" />
        </div>
        <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center h-10 shadow-sm">
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            />
        </div>
    </motion.div>
);

const ChatbotDemo = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'bot', text: "Hello! How can I help you optimize your support today?" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [cycle, setCycle] = useState(0);
    const scrollRef = useRef(null);

    const conversation = [
        { sender: 'user', text: "Can you search my internal PDFs?", delay: 1500 },
        { sender: 'bot', text: "Yes! I can index your entire knowledge base, including PDFs, Docs, and Notion pages.", delay: 3500 },
        { sender: 'user', text: "Is my data secure?", delay: 5500 },
        { sender: 'bot', text: "Absolutely. We use local-first processing and strict domain whitelisting. Your data never trains public models.", delay: 8000 }
    ];

    useEffect(() => {
        let timeouts = [];

        const runConversation = () => {
            let currentTime = 0;

            conversation.forEach((msg, index) => {
                timeouts.push(setTimeout(() => {
                    setMessages(prev => [...prev, { id: Date.now(), sender: msg.sender, text: msg.text }]);

                    if (msg.sender === 'user') {
                        setIsTyping(true);
                    }
                }, currentTime + msg.delay));

                if (msg.sender === 'user' && index < conversation.length - 1) {
                    const nextMsgDelay = conversation[index + 1]?.delay;
                    if (nextMsgDelay) {
                        timeouts.push(setTimeout(() => {
                            setIsTyping(false);
                        }, currentTime + nextMsgDelay - 500));
                    }
                }
            });

            timeouts.push(setTimeout(() => {
                setMessages([{ id: 1, sender: 'bot', text: "Hello! How can I help you optimize your support today?" }]);
                setCycle(c => c + 1);
            }, 14000));
        };

        runConversation();

        return () => timeouts.forEach(clearTimeout);
    }, [cycle]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-2xl mx-auto h-full flex flex-col relative z-20"
        >
            {/* Window Frame */}
            <div className="bg-surface-alt/50 backdrop-blur-xl h-full flex flex-col">
                {/* Header */}
                <div className="h-12 bg-white border-b border-slate-200 flex items-center px-4 justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-300" />
                        <div className="w-3 h-3 rounded-full bg-slate-300" />
                        <div className="w-3 h-3 rounded-full bg-slate-300" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        DinkarSoft Assistant
                    </div>
                    <div className="w-8" /> {/* Spacer */}
                </div>

                {/* Chat Area */}
                <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto p-6 scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent bg-slate-50/50"
                >
                    <AnimatePresence mode='popLayout'>
                        {messages.map(msg => (
                            <ChatMessage key={msg.id} message={msg} />
                        ))}
                    </AnimatePresence>
                    {isTyping && <TypingIndicator />}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-slate-200 bg-white">
                    <div className="flex gap-2">
                        <div className="flex-1 bg-slate-100 rounded-lg h-10 px-4 flex items-center text-sm text-slate-400 border border-transparent">
                            Type your message...
                        </div>
                        <button className="w-10 h-10 rounded-lg bg-brand-teal text-white flex items-center justify-center hover:bg-teal-800 transition-colors shadow-sm">
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ChatbotDemo;
