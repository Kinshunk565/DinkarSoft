import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.2;
        const y = (clientY - (top + height / 2)) * 0.2;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseStyles = "relative px-8 py-3 rounded-full font-display font-medium tracking-wide transition-all duration-300";
    const variants = {
        primary: "bg-neon-violet text-white hover:bg-neon-pink shadow-glow hover:shadow-glow-cyan",
        secondary: "border border-white/20 hover:bg-white/5 hover:border-white/50 text-white",
        ghost: "text-white/70 hover:text-white hover:bg-white/5"
    };

    return (
        <motion.button
            ref={ref}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            {...props}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};

export default Button;
