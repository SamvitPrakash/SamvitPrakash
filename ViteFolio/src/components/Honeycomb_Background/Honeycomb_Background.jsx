import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import './Honeycomb_Background.css';

function HoneycombBackground({ width, height, visibilityMatrix, children, animate = true, parrallax = false }) {
    const hexRefs = useRef([]);

    useEffect(() => {
        if (!animate) return;

        const hexList = [];
        for (let col = 0; col < width; col++) {
            for (let row = 0; row < height; row++) {
                if (!visibilityMatrix || visibilityMatrix[row]?.[col]) {
                    hexList.push(hexRefs.current[row][col]);
                }
            }
        }

        let timeoutIds = [];
        let intervalId;

        function animateWave() {
            hexList.forEach((hex, idx) => {
                timeoutIds.push(setTimeout(() => {
                    if (hex) hex.classList.add('shiver');
                    setTimeout(() => {
                        if (hex) hex.classList.remove('shiver');
                    }, 400);
                }, idx * 60));
            });
        }

        animateWave();
        intervalId = setInterval(() => {
            animateWave();
        }, width * height * 40 );

        return () => {
            timeoutIds.forEach(clearTimeout);
            clearInterval(intervalId);
        };
    }, [width, height, visibilityMatrix, animate]);

    if (!hexRefs.current.length || hexRefs.current.length !== height) {
        hexRefs.current = Array.from({ length: height }, () =>
            Array.from({ length: width })
        );
    }

    const renderRow = (rowIdx) => (
        <div
            className={`honeycomb-row${rowIdx % 2 === 1 ? ' tabbed' : ''}`}
            key={rowIdx}
        >
            {Array.from({ length: width }).map((_, colIdx) => (
                <motion.div
                    key={`${rowIdx}-${colIdx}`}
                    id={`hex-${rowIdx}-${colIdx}`}
                    className="honeycomb-background"
                    ref={el => hexRefs.current[rowIdx][colIdx] = el}
                    style={{
                        visibility: visibilityMatrix?.[rowIdx]?.[colIdx] ? 'visible' : 'hidden',
                    }}
                    initial={ parrallax ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 } }
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ 
						duration: 0.8, 
						type: 'spring',
						stiffness: 80,
						damping: 20,
					}}
                />
            ))}
        </div>
    );

    return (
        <div className="honeycomb-bg-wrapper">
            <div className="honeycomb-container">
                {Array.from({ length: height }).map((_, rowIdx) => renderRow(rowIdx))}
            </div>
            <div className="honeycomb-content">
                {children}
            </div>
        </div>
    );
}

export default HoneycombBackground;
