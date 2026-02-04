import React, { useState, useEffect } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const { x, y } = useMousePosition();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        return () => document.removeEventListener('mouseover', handleMouseOver);
    }, []);

    return (
        <motion.div
            className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
            animate={{
                x: x,
                y: y,
                scale: isHovered ? 1.5 : 1
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        />
    );
};

export default CustomCursor;
