import { useRef, useEffect, useState, Children } from "react";
import './Gallery.css';

function Gallery({ children, interval = 1000, gap = 32 }) {
    const childArray = Children.toArray(children);
    const [offset, setOffset] = useState(0);
    const [animateIn, setAnimateIn] = useState(true);
    const trackRef = useRef(null);
    const [childWidth, setChildWidth] = useState(0);

    useEffect(() => {
        if (trackRef.current && trackRef.current.children.length > 0) {
            setChildWidth(trackRef.current.children[0].offsetWidth );
        }
    }, [children, gap]);

    useEffect(() => {
        if (childArray.length === 0 || childWidth === 0) return;
        const totalWidth = childWidth * childArray.length;
        const step = 1;
        const id = setInterval(() => {
            setOffset(prev => {
                const next = (prev + step) % totalWidth + gap;
                if (next < prev) {
                    setAnimateIn(false);
                    setTimeout(() => setAnimateIn(true), 10);
                }
                return next;
            });
        }, interval/60);
        return () => clearInterval(id);
    }, [childArray.length, childWidth, interval, gap]);

    return (
        <>
            <div className='skill-tree-description-container'>
                <div
                    className={`carousel-track${animateIn ? ' animate-in' : ''}`}
                    ref={trackRef}
                    style={{ transform: `translateX(-${offset}px)` }}
                >
                    {childArray.map((child, idx) => (
                        <div
                            className="carousel-slide"
                            key={idx}
                            style={{
                                marginRight: `${gap}px`
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Gallery;