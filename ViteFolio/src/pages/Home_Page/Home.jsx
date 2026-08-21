// React and CSS Imports
import './Home.css'
import { useState, useEffect } from 'react';
import { motion } from 'motion/react'

//Component Imports
import Navigation from "../../components/Navigation_Bar/Navigation.jsx";
import TypedName from "../../components/Typed_Name/Typed_Name.jsx";
import EducationCard from "../../components/Education_Card/Education_Card.jsx";
import HoneycombBackground from "../../components/Honeycomb_Background/Honeycomb_Background.jsx";
import SkillComplex from "../../components/Skill_Tree/Skill_Complex/Skill_Complex.jsx";
import MinimalCard from '../../components/Minimal_Card/Minimal_Card.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import FeedPath from '../../components/Feed_Path/Feed_Path.jsx';
import ScrollToTopButton from '../../components/Scroll_To_Top/Scroll_To_Top.jsx';
import Footer from '../../components/Footer/Footer.jsx';

// Asset Imports
import upLogo from '../../assets/University_of_Pretoria/UP_logo.jpeg';
import ehs from '../../assets/Edenvale_High_School/EHS.jpg';
import angular from '../../assets/Skill_Icons/angular.svg';
import arch from '../../assets/Skill_Icons/arch.svg';
import bash from '../../assets/Skill_Icons/bash.svg';
import c from '../../assets/Skill_Icons/C.svg';
import csharp from '../../assets/Skill_Icons/Csharp.svg';
import cpp from '../../assets/Skill_Icons/CPP.svg';
import css from '../../assets/Skill_Icons/css.svg';
import delphi from '../../assets/Skill_Icons/delphi.svg';
import django from '../../assets/Skill_Icons/django.svg';
import docker from '../../assets/Skill_Icons/docker.svg';
import garuda from '../../assets/Skill_Icons/garuda.svg';
import html from '../../assets/Skill_Icons/html.svg';
import java from '../../assets/Skill_Icons/java.svg';
import javascript from '../../assets/Skill_Icons/javascript.svg';
import nodejs from '../../assets/Skill_Icons/nodeJS.svg';
import php from '../../assets/Skill_Icons/php.svg';
import python from '../../assets/Skill_Icons/python.svg';
import react from '../../assets/Skill_Icons/react.svg';
import typescript from '../../assets/Skill_Icons/typescript.svg';
import ubuntu from '../../assets/Skill_Icons/ubuntu.svg';
import vite from '../../assets/Skill_Icons/vite.svg';
import vue from '../../assets/Skill_Icons/vue.svg';
import windows from '../../assets/Skill_Icons/windows.svg';
import aws from '../../assets/Skill_Icons/AWS.svg';
import github from '../../assets/Skill_Icons/github.svg';
import mariaDB from '../../assets/Skill_Icons/mariaDB.svg';
import msAccess from '../../assets/Skill_Icons/msAccess.svg';
import mySQL from '../../assets/Skill_Icons/mySQL.svg';
import postgreSQL from '../../assets/Skill_Icons/postgreSQL.svg';
import phpMyAdmin from '../../assets/Skill_Icons/phpMyAdmin.svg';
import sfy from '../../assets/Company_Icons/SFY.jpg';

function Home() {

	const visibilityMatrixEducation = [
			[1,1,0,0,0,0,0,0,0,1,1],
			[1,0,1,0,1,0,1,1,0,1,1],
			[0,1,0,1,1,1,0,1,1,1,0],
			[0,1,1,1,1,1,1,1,1,1,0],
			[1,1,1,1,1,1,0,1,1,1,1],
			[1,1,0,1,1,1,1,1,1,1,0],
			[0,1,1,1,1,1,1,1,0,1,1],
			[1,1,1,0,1,0,1,1,1,1,0],
			[1,0,0,0,0,0,0,1,0,1,1]
		];
	const visibilityMatrixSkills = [
			[1,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,1,0,0,0,0,0,0,0],
			[0,0,0,1,0,0,0,1,0,0,0],
			[1,0,0,1,0,0,0,1,1,0,0],
			[1,0,0,0,0,0,0,0,0,0,0],
			[1,1,0,0,0,0,0,0,1,0,0],
			[1,0,0,0,0,0,1,1,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,0,0,1,1],
			[1,1,0,0,1,1,0,0,0,0,1],
			[1,0,0,0,0,1,0,0,0,0,1],
			[1,1,1,1,0,0,0,0,1,1,1],
			[1,1,0,1,1,0,0,0,0,1,1],
			[1,0,0,0,1,0,0,0,0,0,1]
		];
	const visibilityMatrixExperience = [
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
	const experienceFeed = [
		{
			'position': 'Lecturer\'s Assistant - Compiler Construction',
			'company': 'University of Pretoria',
			'date': '2026',
			'description': 'As a Tutor and Lecturer\'s Assistant for Compiler Construction, I helped students understand the theory and implementation of modern compilers, including lexical analysis, parsing, semantic analysis, type checking, optimisation, and code generation. I guided students through formal language theory, finite automata, context-free grammars, and compiler implementation challenges while assisting with debugging and project development. This role deepened my understanding of programming language internals, software architecture, and systems-level software development.',
			'icon': upLogo,
			'link': 'https://www.up.ac.za/'

		},
		{
			'position': 'Lecturer\'s Assistant - Database Systems',
			'company': 'University of Pretoria',
			'date': '2026',
			'description': 'As a Tutor and Lecturer\'s Assistant for Database Systems, I assisted students in understanding advanced database technologies, including relational and NoSQL databases, distributed data processing, and large-scale data management. I supported practical database implementation, query optimisation, and data modelling while helping students solve real-world data engineering challenges. This experience strengthened my understanding of scalable data systems, database design, and building software capable of managing large volumes of information efficiently.',
			'icon': upLogo,
			'link': 'https://www.up.ac.za/'
		},
		{
			'position': 'Lecturer\'s Assistant - Data Structures and Algorithms',
			'company': 'University of Pretoria',
			'date': '2026',
			'description': 'As a Tutor and Lecturer\'s Assistant for Data Structures and Algorithms, I supported students in implementing and analysing classical data structures including trees, graphs, heaps, and hash tables while exploring efficient algorithm design. I assisted with recursion, algorithm optimisation, complexity analysis, and debugging implementation challenges. This experience significantly strengthened my understanding of algorithmic thinking, performance optimisation, and designing efficient software solutions to complex computational problems.',
			'icon': upLogo,
			'link': 'https://www.up.ac.za/'
		},
		{
			'position': 'Lecturer\'s Assistant - Programming Languages',
			'company': 'University of Pretoria',
			'date': '2026',
			'description': 'As a Tutor and Lecturer\'s Assistant for Programming Languages, I guided students through advanced programming concepts including object-oriented programming, functional programming, polymorphism, concurrency, and language design principles. I assisted students in understanding how different programming paradigms solve problems and helped them develop the ability to evaluate and learn new languages efficiently. This role strengthened my understanding of language design, software architecture principles, and writing maintainable, adaptable software across multiple programming paradigms.',
			'icon': upLogo,
			'link': 'https://www.up.ac.za/'
		},
		{
			'position': 'Lecturer\'s Assistant - Imperative Programming',
			'company': 'University of Pretoria',
			'date': '2024',
			'description': 'As a Tutor and Lecturer\'s Assistant for Imperative Programming, I supported undergraduate students in developing strong programming fundamentals using procedural programming concepts. I assisted with debugging code, explaining algorithms, troubleshooting development environments, and guiding students through programming assignments and practical sessions. I also provided technical support across Linux environments, including Ubuntu, Arch, and Garuda Linux. This experience strengthened my software development foundations while developing my mentoring, communication, and technical problem-solving abilities.',
			'icon': upLogo,
			'link': 'https://www.up.ac.za/'
		},
		{
			'position': 'Matric IT Tutor',
			'company': 'Self-Employed',
			'date': '2023',
			'description': 'As a self-employed Information Technology tutor, I prepared more than 20 Matric students for their final examinations by teaching programming fundamentals, problem-solving techniques, and computational thinking. I designed tailored learning plans, assessed student progress through tests and practical exercises, and adapted my teaching approach to suit individual learning styles. Through clear technical communication and structured mentoring, I helped students build confidence in programming, including improving one student\'s final mark by 13%. This role strengthened my communication, leadership, analytical thinking, and ability to explain complex technical concepts effectively.',
			'icon': ehs,
			'link': 'https://www.facebook.com/edenvalehighschool/'
		},
		{
			'position': 'Job Shadow',
			'company': 'Software for You (SFY)',
			'date': '2023',
			'description': 'During my job shadow at Software for You (SFY), I gained practical exposure to professional software development and quality assurance workflows. I participated in software and system testing, identified and documented defects through ticketing systems, and assisted in verifying resolutions alongside experienced developers. Complementing this practical experience, I completed introductory SQL and Java training, strengthening my understanding of databases and object-oriented programming. This experience provided valuable insight into software development lifecycles, collaborative development practices, and the importance of delivering reliable, high-quality software.',
			'icon': sfy,
			'link': 'https://www.sfy.co.za/'
		}

	];
	const nodes = [
		{ id: 1, icon: angular, name: "Angular", x: 975, y: 0 },
		{ id: 2, icon: react, name: "React", x: 750, y: 200 },
		{ id: 3, icon: django, name: "Django", x: 1150, y: 250 },
		{ id: 4, icon: javascript, name: "JavaScript", x: 400, y: 290 },
		{ id: 5, icon: typescript, name: "TypeScript", x: 850, y: 400 },
		{ id: 6, icon: nodejs, name: "Node.js", x: 1200, y: 570 },
		{ id: 7, icon: html, name: "HTML", x: 400, y: 50 },
		{ id: 8, icon: css, name: "CSS", x: 100, y: 350 },
		{ id: 9, icon: python, name: "Python", x: 600, y: 550 },
		{ id: 10, icon: java, name: "Java", x: 350, y: 750 },
		{ id: 11, icon: cpp, name: "C++", x: 990, y: 970 },
		{ id: 12, icon: c, name: "C", x: 570, y: 900 },
		{ id: 13, icon: csharp, name: "C#", x: 220, y: 540 },
		{ id: 14, icon: delphi, name: "Delphi", x: 580, y: 700 },
		{ id: 15, icon: php, name: "PHP", x: 800, y: 750 },
		{ id: 16, icon: bash, name: "Bash", x: 355, y: 1000 },
		{ id: 17, icon: docker, name: "Docker", x: 200, y: 900 },
		{ id: 18, icon: vite, name: "Vite", x: 650, y: 350 },
		{ id: 19, icon: vue, name: "Vue.js", x: 1100, y: 800 },
		{ id: 20, icon: arch, name: "Arch Linux", x: 1000, y: 1200 },
		{ id: 21, icon: garuda, name: "Garuda Linux", x: 700, y: 1345 },
		{ id: 22, icon: ubuntu, name: "Ubuntu", x: 250, y: 1200 },
		{ id: 23, icon: windows, name: "Windows", x: 850, y: 1100 },
	];
	const edges = [
		{ from: 1, to: 2 },
		{ from: 2, to: 3 },
		{ from : 2, to: 4 },
		{ from: 2, to: 5 },
		{ from: 2, to: 7 },
		{ from: 2, to: 18},
		{ from: 3, to: 5 },
		{ from: 3, to: 6 },
		{ from: 4, to: 7 },
		{ from: 4, to: 8 },
		{ from: 4, to: 9 },
		{ from: 5, to: 6 },
		{ from: 5, to: 9 },
		{ from: 6, to: 19 },
		{ from: 6, to: 15 },
		{ from: 7, to: 8 },
		{ from: 9, to: 10 },
		{ from: 9, to: 15 },
		{ from: 9, to: 18 },
		{ from: 9, to: 14 },
		{ from: 10, to: 13},
		{ from: 10, to: 12 },
		{ from: 10, to: 14 },
		{ from: 10, to: 17 },
		{ from: 11, to: 12 },
		{ from: 11, to: 23 },
		{ from: 11, to: 19 },
		{ from: 12, to: 16 },
		{ from: 12, to: 14 },
		{ from: 12, to: 23 },
		{ from: 14, to: 15 },
		{ from: 16, to: 23 },
		{ from: 16, to: 22 },
		{ from: 20, to: 21 },
		{ from: 21, to: 22 },
		{ from: 21, to: 23 },
	];

	return (
		<>
			<Navigation />

			<div>
				<TypedName id='bio'/>
				
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
					<p className="bio">I am a <em>Computer Science</em> graduate from the <em>University of Pretoria</em>, having graduated with <em>distinction</em> in <em>Software Engineering</em>. I am <em>currently</em> pursuing a <em>BSc Honours in Computer Science</em>, specialising in <em>cybersecurity</em>. I have a <em>strong</em> interest in <em>software engineering</em>, <em>cybersecurity</em>, <em>systems</em>, and the <em>design</em> and <em>development</em> of robust <em>software</em> solutions. I enjoy <em>solving</em> complex <em>problems</em> and turning ideas into <em>working systems</em>, with particular interest in <em>understanding</em> how software and technology <em>work</em> beneath the surface. My interests extend into <em>low-level programming</em>, <em>computer systems</em>, and <em>exploring</em> different technologies through <em>hands-on experimentation</em>. Above all, I see myself as a <em>designer</em>, <em>creator</em>, <em>problem-solver</em>, and <em>lifelong learner</em>. I enjoy <em>building</em> new things, <em>experimenting</em> with unfamiliar technologies, and continuously <em>expanding</em> my understanding of the <em>systems that shape the world</em> around us.</p>
				</motion.div>
			
			</div>

			<HoneycombBackground width={11} height={10} visibilityMatrix={visibilityMatrixEducation} parrallax={true} overflow>
				<h2 className="education-title" id='education'><span className="name">Educational</span> Background.</h2>
				
				<motion.div 
					className="education-cards"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ 
						duration: 0.8, 
						type: 'spring',
						stiffness: 80,
						damping: 20,
					}}
				>
					<EducationCard 
						icon={ehs} 
						institution="Edenvale High School" 
						degree="Bachelor Certificate" 
						startYear="2018" 
						endYear="2022" 
						description="Completed my high school education with a focus on physics, mathematics and Information Technology and achieved a distinction in Information Technology." 
						degreeLink="https://www.facebook.com/edenvalehighschool/" 
					/>

					<EducationCard 
						icon={upLogo} 
						institution="University of Pretoria" 
						degree="BSc Computer Science" 
						startYear="2023" 
						endYear="2025" 
						description="Graduated with distinction in Software Engineering, gaining a strong foundation in software design, development, testing, and engineering principles." 
						degreeLink="https://www.up.ac.za/" 
					/>

					<EducationCard 
						icon={upLogo} 
						institution="University of Pretoria" 
						degree="BSc Hons Computer Science" 
						startYear="2026" 
						endYear="2026" 
						description="Currently pursuing a BSc Honours in Computer Science, with a specialisation in cybersecurity. My research focuses on telecommunications security and integrity in modern communication networks." 
						degreeLink="https://www.up.ac.za/" 
					/>
					
				</motion.div>
				<h2 className="technical-skills-title" id='skills'><span className="name">Technical</span> Skills.</h2>
			</HoneycombBackground>

			<HoneycombBackground width={11} height={15} visibilityMatrix={visibilityMatrixSkills} animate={false}>
				<SkillComplex nodes={nodes} edges={edges} />
			</HoneycombBackground>

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
				<p className='skill-tree-description'>The <em>languages</em>, <em>frameworks</em>, and <em>tools</em> you see here are just a <em>snapshot</em> of my <em>technical skills</em>. My <em>true strength</em> lies in my <em>adaptability</em> and my <em>passion</em> for learning. I pride myself on my ability to <em>quickly</em> and <em>efficiently</em> understand <em>new concepts</em> and <em>languages</em> for <em>integration</em> into my work. This allows me to not only <em>excel</em> with the <em>technologies</em> I'm currently using but also to <em>swiftly pivot</em> and <em>master</em> new ones to meet <em>any challenges</em> that may lie ahead.</p>
			</motion.div>
			
			<Gallery interval={1500} gap={0} >
				<MinimalCard icon={github} name="GitHub" subtitle={"Version Control & Collaboration"} />	
				<MinimalCard icon={aws} name="AWS" subtitle={"Cloud Services"} />
				<MinimalCard icon={postgreSQL} name="PostgreSQL" subtitle={"Database Management System"} />
				<MinimalCard icon={msAccess} name="MS Access" subtitle={"Database Management System"} />
				<MinimalCard icon={mariaDB} name="MariaDB" subtitle={"Database Management System"} />
				<MinimalCard icon={mySQL} name="MySQL" subtitle={"Database Management System"} />
				<MinimalCard icon={phpMyAdmin} name="phpMyAdmin" subtitle={"Database Management System"} />	

					{/* Stop Gap Until I Fix The Gallery Circulation Issue  */}
	
				<MinimalCard icon={github} name="GitHub" subtitle={"Version Control & Collaboration"} />	
				<MinimalCard icon={aws} name="AWS" subtitle={"Cloud Services"} />
				<MinimalCard icon={postgreSQL} name="PostgreSQL" subtitle={"Database Management System"} />
				<MinimalCard icon={msAccess} name="MS Access" subtitle={"Database Management System"} />
				<MinimalCard icon={mariaDB} name="MariaDB" subtitle={"Database Management System"} />
				<MinimalCard icon={mySQL} name="MySQL" subtitle={"Database Management System"} />
				<MinimalCard icon={phpMyAdmin} name="phpMyAdmin" subtitle={"Database Management System"} />	
				<MinimalCard icon={github} name="GitHub" subtitle={"Version Control & Collaboration"} />	
				<MinimalCard icon={aws} name="AWS" subtitle={"Cloud Services"} />
				<MinimalCard icon={postgreSQL} name="PostgreSQL" subtitle={"Database Management System"} />
				<MinimalCard icon={msAccess} name="MS Access" subtitle={"Database Management System"} />
				<MinimalCard icon={mariaDB} name="MariaDB" subtitle={"Database Management System"} />
				<MinimalCard icon={mySQL} name="MySQL" subtitle={"Database Management System"} />
				<MinimalCard icon={phpMyAdmin} name="phpMyAdmin" subtitle={"Database Management System"} />		
				<MinimalCard icon={github} name="GitHub" subtitle={"Version Control & Collaboration"} />	
				<MinimalCard icon={aws} name="AWS" subtitle={"Cloud Services"} />
				<MinimalCard icon={postgreSQL} name="PostgreSQL" subtitle={"Database Management System"} />
				<MinimalCard icon={msAccess} name="MS Access" subtitle={"Database Management System"} />
				<MinimalCard icon={mariaDB} name="MariaDB" subtitle={"Database Management System"} />
				<MinimalCard icon={mySQL} name="MySQL" subtitle={"Database Management System"} />
				<MinimalCard icon={phpMyAdmin} name="phpMyAdmin" subtitle={"Database Management System"} />	
			</Gallery>

			<h2 className='work-experience-title' id='work'>Work <span className='name'>Experience</span>/<span className='name'>Journey</span></h2>

			<HoneycombBackground width={11} height={60} visibilityMatrix={visibilityMatrixExperience} animate={false} parrallax={true}>
				<FeedPath experience={experienceFeed} />
			</HoneycombBackground>

			<p className='conclusion-description'>I hope you <em>enjoyed</em> my portfolio. <em>Don't forget</em> to check out my <a href='/projects'>projects</a> & <a href='/about'>about</a> pages!</p>

			<ScrollToTopButton />

			<Footer />

		</>
	);
}

export default Home;