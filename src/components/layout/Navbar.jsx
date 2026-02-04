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
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/10 border-b border-white/5"
        >
            <div className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-violet to-neon-pink">
                DinkarSoft
            </div>

            <nav className="hidden md:flex gap-8 items-center">
                {links.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium hover:text-cyber-cyan transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-cyan transition-all group-hover:w-full" />
                    </a>
                ))}
            </nav>

            <div className="hidden md:block">
                <Button variant="secondary" className="px-6 py-2 text-sm">
                    Get Started
                </Button>
            </div>

            {/* Mobile Menu Toggle would go here */}
        </motion.header>
    );
};

export default Navbar;
