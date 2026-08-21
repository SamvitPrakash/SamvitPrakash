import "./Feed_Path.css";
import FeedCard from "./Feed_Card/Feed_Card.jsx";
import { useEffect, useRef, useState } from "react";

const defaultPath = `
M 65 0

C 65 35 22 35 22 70

C 22 105 78 105 78 140

C 78 175 22 175 22 210

C 22 245 78 245 78 280

C 78 315 22 315 22 350

C 22 385 78 385 78 420

C 78 455 22 455 22 490

C 22 525 78 525 78 560

C 78 595 50 630 50 700
`;

function FeedPath({ experience, path = defaultPath }) {
    const pathRef = useRef(null);
    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    const [progress, setProgress] = useState(0);
    const [length, setLength] = useState(0);
    const [pointX, setPointX] = useState(0);
    const [pointY, setPointY] = useState(0);
    const [expandedCards, setExpandedCards] = useState([]);

    useEffect(() => {
        if (!pathRef.current) return;

        setLength(pathRef.current.getTotalLength());
        setExpandedCards(new Array(experience.length).fill(false));
    }, [experience.length]);

    useEffect(() => {
        function handleScroll() {
            if (!containerRef.current || !pathRef.current) return;

            const containerRect =
                containerRef.current.getBoundingClientRect();

            const viewportCenter = window.innerHeight / 2;

            const end =
                containerRect.height - viewportCenter;

            const travelled =
                viewportCenter - containerRect.top;

            const p = Math.max(
                0,
                Math.min(1, travelled / end)
            );

            setProgress(p);

            const point = pathRef.current.getPointAtLength(
                pathRef.current.getTotalLength() * p
            );

            const svgRect =
                pathRef.current.ownerSVGElement.getBoundingClientRect();

            const svgViewBoxHeight = 700;
            const svgViewBoxWidth = 100;

            const scaleX =
                svgRect.width / svgViewBoxWidth;

            const scaleY =
                svgRect.height / svgViewBoxHeight;

            const pointX =
                svgRect.left + point.x * scaleX;

            const pointY =
                svgRect.top + point.y * scaleY;

            const verticalThreshold = 250;

            const expanded = cardRefs.current.map((card) => {
                if (!card) return false;

                const rect = card.getBoundingClientRect();

                const centerY = rect.top + rect.height / 2;

                return Math.abs(pointY - centerY) < verticalThreshold;
            });

            setExpandedCards(expanded);
            setPointX(pointX);
            setPointY(pointY);
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                handleScroll
            );
        };
    }, [experience.length]);

    return (
        <div
            className="feed-path-container"
            ref={containerRef}
        >
            <svg
                className="feed-path-svg"
                viewBox="0 0 100 700"
                preserveAspectRatio="none"
            >
                <path
                    ref={pathRef}
                    d={path}
                    fill="none"
                    stroke="var(--current-primary)"
                    strokeWidth={0.2}
                    strokeDasharray={length}
                    strokeDashoffset={
                        length * (1 - progress)
                    }
                />
            </svg>

            {experience.map((item, index) => (
                <div
                    key={index}
                    ref={(el) =>
                        (cardRefs.current[index] = el)
                    }
                    className={
                        index % 2 === 0
                            ? "feed-path-left"
                            : "feed-path-right"
                    }
                    style={{ marginTop: "20rem" }}
                >
                    <FeedCard
                        position={item.position}
                        institution={item.company}
                        year={item.date}
                        description={item.description}
                        icon={item.icon}
                        link={item.link}
                        expanded={expandedCards[index]}
                    />
                </div>
            ))}
        </div>
    );
}

export default FeedPath;