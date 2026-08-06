import './Feed_Path.css'
import FeedCard from './Feed_Card/Feed_Card.jsx';

function FeedPath({ experience }) {
    return (
        <div className="feed-path-container">
            {experience.map((item, index) => (
                <div className={index % 2 === 0 ? "feed-path-left" : "feed-path-right"} style={{marginTop: "20rem"}}>
                    <FeedCard
                        position={item.position}
                        institution={item.company}
                        year={item.date}
                        description={item.description}
                        icon={item.icon}
                        link={item.link}
                        />
                </div>
            ))}
        </div>
    )

}

export default FeedPath;