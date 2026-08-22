import './SecondaryProject.css';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'motion/react';

const MotionDiv = motion.div;

export function SecondaryProject({ name, description, link, parralax=false }) {
    return (
        <MotionDiv
            initial={!parralax ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 2.5,
                type: 'spring',
                stiffness: 80,
                damping: 20,
            }}
        >

            <div className='secondary-project-container'>
                <h4 className='secondary-project-name'>{name}</h4>
                <p className='secondary-project-bio'>{description}</p>
                <a className='view-degree-button' target='_blank' href={link} >
                    Github
                    <FaGithub className="degree-icon" style={{marginLeft: "0.5em"}} />
                </a>
            </div>

        </MotionDiv>
    )

}

export default SecondaryProject;