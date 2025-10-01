// React and CSS Imports
import './Home.css'

//Component Imports
import Navigation from "../../components/Navigation_Bar/Navigation.jsx";
import TypedName from "../../components/Typed_Name/Typed_Name.jsx";
import EducationCard from "../../components/Education_Card/Education_Card.jsx";
import HoneycombBackground from "../../components/Honeycomb_Background/Honeycomb_Background.jsx";
import SkillComplex from "../../components/Skill_Tree/Skill_Complex/Skill_Complex.jsx";
import MinimalCard from '../../components/Minimal_Card/Minimal_Card.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';

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



function Home() {

	const visibilityMatrix = [
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

	const visibilityMatrix2 = [
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

	const visibilityMatrix3 = [];

	const nodes = [
		{ id: 1, icon: angular, name: "Angular", x: 975, y: 0 },
		{ id: 2, icon: react, name: "React", x: 750, y: 200 },
		{ id: 3, icon: django, name: "Django", x: 1250, y: 250 },
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
				<TypedName/>
				<p className="bio">I am a final-year <em>BSc Computer Science</em> student at the <em>University of Pretoria</em>. As a passionate <em>back-end developer</em>, I have a strong interest in <em>software engineering</em> and a deep love for <em>problem-solving</em>. I truly enjoy the challenge of <em>designing</em> and <em>building</em> elegant and efficient solutions. My enthusiasm for technology extends beyond the code, as I also enjoy <em>discovering</em> and <em>experimenting</em> with new <em>Linux</em> distributions. I am currently using <em>Arch Linux</em> and has finnished exploring <em>Ubuntu</em> and various <em>Garuda</em> distributions. I am also deeply interested in learning about <em>cyber security</em> and enjoy the intricacies of <em>low-level programming</em>, including <em>Assembly</em>. Above all, I see myself as a <em>designer</em>, <em>creator</em> and a <em>lifelong learner</em>, driven by the desire to <em>build new things</em> and continually expand my knowledge in the ever-evolving tech landscape.</p>
			</div>

			<HoneycombBackground width={11} height={10} visibilityMatrix={visibilityMatrix}>
				<h2 className="education-title"><span className="name">Educational</span> Background.</h2>
				<div className="education-cards">
					<EducationCard icon={ehs} institution="Edenvale High School" degree="Bachelor Certificate" startYear="2018" endYear="2022" description="Completed my high school education with a focus on physics, mathematics and Information Technology and achieved a distinction in Information Technology." degreeLink="https://www.facebook.com/edenvalehighschool/" />
					<EducationCard icon={upLogo} institution="University of Pretoria" degree="BSc Computer Science" startYear="2023" endYear="2025" description="I am currently in my final year of study. I am passionate about developing innovative solutions to complex problems and look forward to applying my skills in a professional environment." degreeLink="https://www.up.ac.za/" />
				</div>
				<h2 className="technical-skills-title"><span className="name">Technical</span> Skills.</h2>
			</HoneycombBackground>

			<HoneycombBackground width={11} height={15} visibilityMatrix={visibilityMatrix2} animate={false}>
				<SkillComplex nodes={nodes} edges={edges} />
			</HoneycombBackground>

			<p className='skill-tree-description'>The <em>languages</em>, <em>frameworks</em>, and <em>tools</em> you see here are just a <em>snapshot</em> of my <em>technical skills</em>. My <em>true strength</em> lies in my <em>adaptability</em> and my <em>passion</em> for learning. I pride myself on my ability to <em>quickly</em> and <em>efficiently</em> understand <em>new concepts</em> and <em>languages</em> for <em>integration</em> into my work. This allows me to not only <em>excel</em> with the <em>technologies</em> I'm currently using but also to <em>swiftly pivot</em> and <em>master</em> new ones to meet <em>any challenges</em> that may lie ahead.</p>
			
			<Gallery interval={1500} gap={0}>
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

			<h2 className='work-experience-title'>Work <span className='name'>Experience</span>.</h2>

			

		</>
	);
}

export default Home;