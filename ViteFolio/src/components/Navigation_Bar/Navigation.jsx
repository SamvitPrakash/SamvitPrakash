import { useState } from 'react';
import './Navigation.css';
import ThemeButton from '../Theme_Button/Theme_Button.jsx';

const Navigation = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		if (!isDarkMode) {
			document.documentElement.style.setProperty('--current-text', 'var(--dark-text)');
			document.documentElement.style.setProperty('--current-background', 'var(--dark-background)');
			document.documentElement.style.setProperty('--current-primary', 'var(--dark-primary)');
			document.documentElement.style.setProperty('--current-secondary', 'var(--dark-secondary)');
			document.documentElement.style.setProperty('--current-accent', 'var(--dark-accent)');
		} else {
			document.documentElement.style.setProperty('--current-text', 'var(--light-text)');
			document.documentElement.style.setProperty('--current-background', 'var(--light-background)');
			document.documentElement.style.setProperty('--current-primary', 'var(--light-primary)');
			document.documentElement.style.setProperty('--current-secondary', 'var(--light-secondary)');
			document.documentElement.style.setProperty('--current-accent', 'var(--light-accent)');
		}
	}

	return (

		<nav className="navigation">
			<h4 className="logo">My Portfolio</h4>
			<div className='nav-links'>
				<a href="/">Home</a>
				<a href="#projects">Projects</a>
				<a href="#about">What's New</a>
				<a href="#contact">Contact Me</a>
				<ThemeButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
			</div>
		</nav>

	)
};

export default Navigation;