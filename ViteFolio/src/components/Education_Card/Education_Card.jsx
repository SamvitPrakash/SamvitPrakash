import './Education_Card.css';
import { FaRegCalendarAlt, FaLocationArrow } from "react-icons/fa";

function EducationCard({icon, institution, degree, startYear, endYear, description, degreeLink}){
    return(
        <div className="education-card">
            <div className="education-header">
                <img className='education-logo' src={icon} alt={`${institution} Logo`} />
                <div className='education-header-text'>
                    <h4 className='education-institution'>{institution}</h4>
                    <p className='education-institution'>
                        <FaRegCalendarAlt className="year-icon" style={{marginRight: "0.5em"}} />
                        {startYear}-{endYear}
                    </p>
                    
                </div>
            </div>
            <div className="education-body">
                <h5 className='education-degree'>{degree}</h5>
                <p>{description}</p>
            </div>
            <a className='view-degree-button' href={degreeLink} >Go to Institution
                <FaLocationArrow className="degree-icon" style={{marginLeft: "0.5em"}} />
            </a>
        </div>
    );
}

export default EducationCard;