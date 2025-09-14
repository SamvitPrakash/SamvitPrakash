import { useState } from "react";
import Navigation from "../../components/Navigation_Bar/Navigation.jsx";
import TypedName from "../../components/Typed_Name/Typed_Name.jsx";
import EducationCard from "../../components/Education_Card/Education_Card.jsx";
import HoneycombBackground from "../../components/Honeycomb_Background/Honeycomb_Background.jsx";
import upLogo from '../../assets/University_of_Pretoria/UP_logo.jpeg';
import ehs from '../../assets/Edenvale_High_School/EHS.jpg';
import './Home.css'

function Home() {
	const [count, setCount] = useState(0);

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

		</>
	);
}

export default Home;