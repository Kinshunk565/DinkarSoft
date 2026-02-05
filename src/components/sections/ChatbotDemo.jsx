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
                <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/30 flex-shrink-0">
                    <Bot className="w-4 h-4 text-neon-cyan" />
                </div>
            )}

            <div className={`
                max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                ${isBot
                    ? 'bg-surface-charcoal border border-white/10 text-gray-200 rounded-tl-none'
                    : 'bg-neon-violet/20 border border-neon-violet/30 text-white rounded-tr-none'}
            `}>
                {message.text}
            </div>

            {!isBot && (
                <div className="w-8 h-8 rounded-full bg-neon-violet/20 flex items-center justify-center border border-neon-violet/30 flex-shrink-0">
                    <User className="w-4 h-4 text-neon-violet" />
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
        <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/30 flex-shrink-0">
            <Bot className="w-4 h-4 text-neon-cyan" />
        </div>
        <div className="bg-surface-charcoal border border-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center h-10">
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
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
                // User message typing delay simulation (not shown visually, just pause)
                timeouts.push(setTimeout(() => {
                    setMessages(prev => [...prev, { id: Date.now(), sender: msg.sender, text: msg.text }]);

                    // Trigger bot typing after user message
                    if (msg.sender === 'user') {
                        setIsTyping(true);
                    }
                }, currentTime + msg.delay));

                // If next is bot, remove typing indicator before it appears
                if (msg.sender === 'user' && index < conversation.length - 1) {
                    // The delay for the NEXT bot message is conversation[index+1].delay
                    // So we need to stop typing right before that
                    const nextMsgDelay = conversation[index + 1]?.delay;
                    if (nextMsgDelay) {
                        timeouts.push(setTimeout(() => {
                            setIsTyping(false);
                        }, currentTime + nextMsgDelay - 500)); // Stop typing 500ms before message
                    }
                }
            });

            // Reset conversation
            timeouts.push(setTimeout(() => {
                setMessages([{ id: 1, sender: 'bot', text: "Hello! How can I help you optimize your support today?" }]);
                setCycle(c => c + 1); // Trigger re-run
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
            className="w-full max-w-2xl mx-auto mt-16 relative z-20"
        >
            {/* Window Frame */}
            <div className="bg-vanta-black/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative">
                {/* Header */}
                <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        DinkarSoft Assistant
                    </div>
                    <div className="w-8" /> {/* Spacer */}
                </div>

                {/* Chat Area */}
                <div
                    ref={scrollRef}
                    className="h-[400px] overflow-y-auto p-6 scroll-smooth scrollbar-hide"
                >
                    <AnimatePresence mode='popLayout'>
                        {messages.map(msg => (
                            <ChatMessage key={msg.id} message={msg} />
                        ))}
                    </AnimatePresence>
                    {isTyping && <TypingIndicator />}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/5 bg-white/2 cursor-default">
                    <div className="flex gap-2">
                        <div className="flex-1 bg-surface-charcoal rounded-lg h-10 px-4 flex items-center text-sm text-gray-500 border border-white/5">
                            Type your message...
                        </div>
                        <button className="w-10 h-10 rounded-lg bg-neon-cyan/20 flex items-center justify-center text-neon-cyan border border-neon-cyan/30">
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Glow Effect behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-neon-cyan/10 blur-[80px] -z-10 rounded-full pointer-events-none" />
        </motion.div>
    );
};

export default ChatbotDemo;
