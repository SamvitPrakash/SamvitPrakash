import { useState, useEffect } from "react";
import "./Feed_Card.css";
import { FaRegCalendarAlt, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

function FeedCard({ icon, institution, position, year, description, link, expanded = false }) {
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 600);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="feed-card-container">
            <div className={`node-wrapper ${expanded ? "hide-node" : "show-node"}`}>
                <div className="skill-node lock-container">
                    <FaMapMarkerAlt className="lock-icon" />
                    {/* <img className='skill-icon' src={icon} /> */}
                </div>
            </div>

            <div className={`feed-card ${expanded ? "show-card" : "hide-card"}`}>
                <div className="feed-header">
                    <img
                        className="feed-logo"
                        src={icon}
                        alt={`${institution} Logo`}
                    />

                    <div className="feed-header-text">
                        <h4 className="feed-institution">
                            {institution}
                        </h4>

                        <p className="feed-institution">
                            <FaRegCalendarAlt
                                className="year-icon"
                                style={{ marginRight: "0.5em" }}
                            />
                            {year}
                        </p>
                    </div>
                </div>

                <div className="feed-body">
                    <h5 className="feed-degree">{position}</h5>

                    <p>
                        {description}
                        <span
                            className="blinking-cursor"
                            style={{
                                opacity: showCursor ? 1 : 0,
                            }}
                        >
                            {" |"}
                        </span>
                    </p>
                </div>

                <a
                    className="view-degree-button"
                    href={link}
                >
                    Visit
                    <FaLocationArrow
                        className="degree-icon"
                        style={{ marginLeft: "0.5em" }}
                    />
                </a>
            </div>
        </div>
    );
}

export default FeedCard;