import './Skill_Node.css';

function SkillNode({icon, name}) {
    return (
        <div style={{display: "inline-block", position: "relative"}}>
            <div className="skill-node">
                <img className='skill-icon' src={icon} alt={name} />
            </div>
            <div className='skill-modal'>
                <h5>{name}</h5>
            </div>
        </div>
    );
}

export default SkillNode;