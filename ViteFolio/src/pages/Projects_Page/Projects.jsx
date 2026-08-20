import './Projects.css'
import { motion } from 'motion/react';
import Navigation from '../../components/Navigation_Bar/Navigation';
import TypedName from '../../components/Typed_Name/Typed_Name';
import ScrollExpand from '../../components/Scroll_Expand/ScrollExpand';
import HoneycombBackground from '../../components/Honeycomb_Background/Honeycomb_Background';
import ScrollToTopButton from '../../components/Scroll_To_Top/Scroll_To_Top.jsx';
import Footer from '../../components/Footer/Footer';

import direwolfCover from '../../assets/Projects/Direwolf/Cover.png'
import direwolfLogo from '../../assets/Projects/Direwolf/Logo.svg'
import auroraCover from '../../assets/Projects/Aurora/Cover.mp4'
import greencartCover from '../../assets/Projects/Greencart/Cover.mp4'

export function Projects() {
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
            
            <HoneycombBackground width={11} height={60} visibilityMatrix={visibilityMatrixProjects} animate={false} parrallax={true}>
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
                        <img src={direwolfLogo} alt='Direwolf project logo' className='project-logo' />
                        <p className='bio project-bio'><em>Direwolf</em> is a modern <em>Linux Desktop Shell</em> built on top of <em>Wayland</em> and <em>Hyprland</em>, focused on delivering a <em>clean</em>, <em>aesthetic</em>, and highly <em>integrated</em> desktop experience.</p>
                        <p className='bio project-bio'><em>Direwolf</em> is built with <em>Aylur's GTK Shell</em> and powered by <em>reactive</em> TypeScript widgets, designed for <em>speed</em>, <em>modularity</em>, and <em>aesthetic minimalism</em>. This project focuses on creating a <em>polished Hyprland</em> experience with <em>dynamic widgets</em>, smooth animations, <em>system integrations</em>, and a clean <em>architecture</em> that <em>scales</em> as the desktop evolves. From <em>media controls</em> and <em>network indicators</em> to <em>workspace management</em>, the goal is to turn the <em>Linux</em> desktop into a <em>responsive control deck</em> instead of a pile of disconnected scripts.</p>
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
                        <div className='aurora-project-content'>
                            <p className='project-bio-aurora project-bio'><em>Aurora</em> is a modern, cross-platform <em>mobile weather</em> application built with <em>React Native</em> and <em>Expo</em>. Designed with a focus on <em>minimalit</em> UI/UX practices, <em>Aurora</em> provides users with <em>comprehensive</em> weather information, including current <em>conditions</em>, <em>hourly forecasts</em>, and detailed <em>metrics</em> such as <em>UV index</em>, <em>moon phases</em>, and more.</p>
                        </div>
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
                    </ScrollExpand>


                </motion.div>
            </HoneycombBackground>

            <TypedName fullText='Projects ' fullName='Along the Way' punctuation='.'/>

            <ScrollToTopButton />

            <Footer />
       </>
    )
}

export default Projects;