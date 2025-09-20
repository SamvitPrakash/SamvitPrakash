import './Minimal_Card.css';

function MinimalCard({icon, name, subtitle}){
   return (
    <div className="minimal-card">
       <div className="education-header">
            <img className='education-logo' src={icon} alt={`${name} Logo`} />
            <div className='education-header-text'>
                <h4 className='education-institution'>{name}</h4>
                <p className='education-institution'>
                    {subtitle}
                </p>
            </div>
        </div>
    </div>
   );
}

export default MinimalCard;