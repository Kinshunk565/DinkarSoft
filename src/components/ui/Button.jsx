import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-brand-teal text-white hover:bg-teal-800 shadow-sm hover:shadow-md focus:ring-brand-teal",
        secondary: "bg-white text-text-main border border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus:ring-slate-200",
        ghost: "text-text-body hover:text-brand-teal hover:bg-teal-50"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
