import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Navbar = () => {
    const links = ['Products', 'Solutions', 'About'];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm"
        >
            <div className="text-2xl font-display font-bold text-brand-navy tracking-tight">
                DinkarSoft
            </div>

            <nav className="hidden md:flex gap-8 items-center">
                {links.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium text-text-body hover:text-brand-teal transition-colors relative group"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <div className="hidden md:block">
                <Button variant="primary" className="px-6 py-2 text-sm">
                    Get Started
                </Button>
            </div>

            {/* Mobile Menu Toggle would go here */}
        </motion.header>
    );
};

export default Navbar;
