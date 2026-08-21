import './Projects.css'
import { motion } from 'motion/react';
import Navigation from '../../components/Navigation_Bar/Navigation.jsx';
import TypedName from '../../components/Typed_Name/Typed_Name.jsx';
import ScrollExpand from '../../components/Scroll_Expand/ScrollExpand.jsx';
import InformationModal from '../../components/Information_Modal/InformationModal.jsx';
import HoneycombBackground from '../../components/Honeycomb_Background/Honeycomb_Background.jsx';
import SecondaryProject from '../../components/Secondary_Project/SecondaryProject.jsx';
import ScrollToTopButton from '../../components/Scroll_To_Top/Scroll_To_Top.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import direwolfCover from '../../../assets/Projects/Direwolf/Cover.png'
import direwolfLogo from '../../../assets/Projects/Direwolf/Logo.svg'
import auroraCover from '../../../assets/Projects/Aurora/Cover.mp4'
import greencartCover from '../../../assets/Projects/Greencart/Cover.mp4'
import { FaGithub } from 'react-icons/fa';

export function Projects() {
    const visibilityMatrixSecondaryProjects = [
        [0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[1,1,0,0,0,1,0,0,0,1,0],  
		[1,1,1,1,1,0,0,0,0,1,1],  
        [1,1,0,1,1,1,0,1,1,1,0],  
		[0,1,1,1,1,0,1,0,1,0,1],  
		[1,1,1,1,1,1,1,0,1,1,0],  
		[1,1,1,1,1,1,1,1,1,1,0],  
		[0,0,1,1,1,1,1,1,1,1,1],  
		[1,1,1,1,1,1,1,1,1,1,0],  
		[1,1,0,1,0,1,1,0,0,1,1],  
    ]

    const visibilityMatrixProjects = [
		[1,1,0,0,0,0,0,0,0,0,1],  
		[1,0,0,0,0,0,0,0,1,1,1],  
		[0,0,0,0,0,0,0,0,1,1,1],  
		[0,0,0,0,0,0,0,0,0,0,1],  
		[0,0,0,0,0,0,0,0,0,1,1],  
		[0,0,0,0,0,0,0,0,1,1,0],  
		[0,0,0,0,0,0,0,0,0,1,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0], 
		[1,0,0,0,0,0,0,0,0,1,0],  
		[1,1,0,0,0,0,0,0,0,0,1],  
		[0,1,0,0,0,0,0,0,0,0,0], 
		[1,1,0,1,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0], 
		[1,0,0,0,0,0,0,0,0,0,0],  
		[1,0,0,0,0,0,0,0,0,0,0],  
		[1,0,0,0,1,0,0,0,0,1,1],  
		[1,0,0,0,0,1,0,0,1,1,1],  
		[0,0,0,0,0,0,0,0,1,1,0],  
		[0,0,0,0,0,0,0,0,0,0,1], 
		[0,0,0,0,0,0,0,0,0,1,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,1,0,0,0,0,0,0,1,0,0],  
		[1,0,0,0,0,0,0,1,1,0,0],  
		[1,1,0,0,0,0,0,0,0,0,0],  
		[1,0,0,0,0,0,0,0,0,0,0],  
		[1,0,0,0,0,0,0,0,0,0,0],  
		[1,1,0,0,0,0,0,0,0,0,0], 
		[0,1,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,1,1,0,0,0,1],  
		[0,0,0,0,1,1,1,0,0,0,0],  
		[0,0,0,0,0,0,0,1,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,1],  
		[0,0,0,0,0,0,0,0,1,1,1],  
		[0,0,0,0,0,0,0,0,1,1,0],  
		[0,0,0,0,0,0,0,0,0,1,0],  
		[0,0,0,0,0,0,0,0,0,0,1],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[1,0,0,0,0,0,0,0,0,0,0],  
		[1,1,0,0,0,0,0,0,0,0,0],  
		[0,1,1,0,0,0,0,0,0,0,0],  
		[1,0,0,0,0,0,0,0,0,0,0],  
		[1,1,0,0,0,0,0,0,0,0,0],  
		[1,1,0,0,0,0,0,0,0,0,1],  
		[0,0,0,0,0,0,0,0,0,1,0],  
		[0,1,0,0,0,0,0,0,1,1,1],  
		[0,0,0,0,0,0,0,0,0,1,1],  
		[0,0,0,0,0,0,0,0,1,0,0],  
		[0,0,0,0,0,0,0,0,0,0,0],  
		[0,0,0,0,0,0,0,0,0,0,1],  
		[0,0,0,0,0,0,0,0,0,1,1]   
	];

    return(
        <>
            <Navigation />
            
            <TypedName fullText='Welcome to my ' fullName='Projects Showcase' punctuation='!'/>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 1.5,
                    type: 'spring',
                    stiffness: 80,
                    damping: 20,
                }}
            >
                <p className="bio">A <em>selection</em> of <em>projects</em> that represent the <em>work</em> I'm most <em>proud</em> of, highlighting my <em>interests</em>, <em>skills</em>, and <em>approach</em> to <em>software development</em>. Each project explores a <em>different idea</em>, <em>technology</em>, or <em>challenge</em>, offering a <em>glimpse</em> into how I <em>build</em> and <em>experiment</em> with software.</p>
            </motion.div>
            
            <HoneycombBackground width={11} height={60} visibilityMatrix={visibilityMatrixProjects} animate={false} parrallax>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1.5,
                        type: 'spring',
                        stiffness: 80,
                        damping: 20,
                    }}
                >
                    <ScrollExpand 
                        src={direwolfCover} 
                        title='Direwolf' 
                        alt='Direwolf project cover' 
                        scrollHint='Scroll to expand' 
                        endRadius='22'
                        className='project-title-direwolf'
                        useWindowScroll
                    >

                        <InformationModal className='project-content'>
                            <div className='project-links'>
                                <a className='view-degree-button' target='_blank' href='https://github.com/SamvitPrakash/Direwolf' >Github
                                    <FaGithub className="degree-icon" style={{marginLeft: "0.5em"}} />
                                </a>
                            </div>
                            <p className='project-bio'><em>Direwolf</em> is a modern <em>Linux Desktop Shell</em> built on top of <em>Wayland</em> and <em>Hyprland</em>, focused on delivering a <em>clean</em>, <em>aesthetic</em>, and highly <em>integrated</em> desktop experience.</p>
                        </InformationModal>
                        
                    </ScrollExpand>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1.5,
                        type: 'spring',
                        stiffness: 80,
                        damping: 20,
                    }}
                >
                    <ScrollExpand 
                        src={auroraCover} 
                        title='Aurora' 
                        poster={direwolfCover}
                        alt='Aurora project cover' 
                        mediaType='video'
                        scrollHint='Scroll to expand' 
                        endRadius='22'
                        className='project-title-aurora'
                        useWindowScroll
                    >
                        <InformationModal className='project-content'>
                            <div className='project-links'>
                                <a className='view-degree-button' target='_blank' href='https://github.com/SamvitPrakash/Aurora' >Github
                                    <FaGithub className="degree-icon" style={{marginLeft: "0.5em"}} />
                                </a>
                            </div>
                            <p className='project-bio'><em>Aurora</em> is a modern, cross-platform <em>mobile weather</em> application built with <em>React Native</em> and <em>Expo</em>. Designed with a focus on <em>minimalit</em> UI/UX practices, <em>Aurora</em> provides users with <em>comprehensive</em> weather information, including current <em>conditions</em>, <em>hourly forecasts</em>, and detailed <em>metrics</em> such as <em>UV index</em>, <em>moon phases</em>, and more.</p>
                        </InformationModal>
                    </ScrollExpand>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1.5,
                        type: 'spring',
                        stiffness: 80,
                        damping: 20,
                    }}
                >
                    <ScrollExpand 
                        src={greencartCover} 
                        title='GreenCart' 
                        poster={direwolfCover}
                        alt='GreenCart project cover' 
                        mediaType='video'
                        scrollHint='Scroll to expand' 
                        endRadius='22'
                        className='project-title-greencart'
                        useWindowScroll
                    >
                        <InformationModal className='project-content'>
                            <div className='project-links'>
                                <a className='view-degree-button' target='_blank' href='https://github.com/COS301-SE-2025/Green-Cart' >Github
                                    <FaGithub className="degree-icon" style={{marginLeft: "0.5em"}} />
                                </a>
                            </div>
                            <p className='project-bio'><em>GreenCart</em> is a purpose-driven <em>e-commerce</em> platform built to promote <em>sustainable consumerism</em> by providing <em>transparent</em> insights into <em>eco-conscious products</em>. Users can explore <em>verified</em> ethical brands, track <em>carbon footprints</em>, and make <em>informed purchases</em> in a seamless digital shopping experience.</p>
                        </InformationModal>
                    </ScrollExpand>


                </motion.div>
            </HoneycombBackground>

            <h2 className='secondary-project-title'><span className='name'>Projects</span> Along the Way</h2>

            <HoneycombBackground width={11} height={20} visibilityMatrix={visibilityMatrixSecondaryProjects} animate parrallax>
                <div className='secondary-projects-content-container'>
                
                    <SecondaryProject 
                        name='Shiny Chainsaw' 
                        description='An insider-threat detection platform that demonstrates how AI can be applied to metadata analysis in digital forensics investigations. The system ingests raw behavioural metadata records for employees, aggregates them into per-user profiles, and applies three complementary AI techniques to automate pattern recognition, anomaly detection, and correlation analysis.' 
                        link='https://github.com/SamvitPrakash/shiny-chainsaw' 
                        parralax
                    />

                    <SecondaryProject 
                        name='Compiler Project' 
                        description='A compiler, developed as part of the COS 341 semester project. This compiler is designed for the Student Programming Language (SPL) and provides a robust environment for compiling SPL programs.' 
                        link='https://github.com/SamvitPrakash/Compiler-Project' 
                        parralax
                    />

                </div>
            </HoneycombBackground>

            {/* <h2 className='upcomming-projects-title'>Upcoming <span className='name'>Projects</span></h2> */}

            <p className='conclusion-description'>I hope you <em>enjoyed</em> my projects. <em>Don't forget</em> to check out my <a href='/'>home</a> & <a href='/about'>about</a> pages!</p>

            <ScrollToTopButton />

            <Footer />
       </>
    )
}

export default Projects;