import { useState } from "react";
import Navigation from "../../components/Navigation_Bar/Navigation.jsx";
import TypedName from "../../components/Typed_Name/Typed_Name.jsx";
import './Home.css'

function Home() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navigation />
			<div>
				<TypedName/>
				<p className="bio">I am a final-year <em>BSc Computer Science</em> student at the <em>University of Pretoria</em>. As a passionate <em>back-end developer</em>, I have a strong interest in <em>software engineering</em> and a deep love for <em>problem-solving</em>. I truly enjoy the challenge of <em>designing</em> and <em>building</em> elegant and efficient solutions. My enthusiasm for technology extends beyond the code, as I also enjoy <em>discovering</em> and <em>experimenting</em> with new <em>Linux</em> distributions. I am currently using <em>Arch Linux</em> and has finnished exploring <em>Ubuntu</em> and various <em>Garuda</em> distributions. I am also deeply interested in learning about <em>cyber security</em> and enjoy the intricacies of <em>low-level programming</em>, including <em>Assembly</em>. Above all, I see myself as a <em>designer</em>, <em>creator</em> and a <em>lifelong learner</em>, driven by the desire to <em>build new things</em> and continually expand my knowledge in the ever-evolving tech landscape.</p>
			</div>

		</>
	);
}

export default Home;