import './Feed_Card.css'

const FeedCard = ({ feed }) => {
    return (
        <div className='feed-container'>
            {feed.map((item, index) => (
            <div className={`minimal-card feed-card ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`} key={index}>
                <div className="education-header">
                    <img className='education-logo' src={item.icon} alt={`${item.company} Logo`} />
                    <div className='education-header-text'>
                        <h4 className='education-institution'>{item.position}</h4>
                        <p className='education-institution'>
                            {item.company}
                        </p>
                        <p className='feed-text'>{item.description}</p>
                    </div>
                </div>
            </div>

            ))}

        </div>
    )
};

export default FeedCard;