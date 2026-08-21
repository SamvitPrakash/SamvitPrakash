import './Scroll_To_Top.css';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'motion/react';

export function ScrollToTopButton() {
    return(
        <motion.div 
            className='scroll-to-top-button-container'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 1.5,
                type: 'spring',
                stiffness: 80,
                damping: 20,
            }}
        >
            <button className='skill-node lock-container scroll-to-top-button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                <FaArrowUp className='scroll-to-top-icon' />
            </button>
        </motion.div>

    )
}

export default ScrollToTopButton;