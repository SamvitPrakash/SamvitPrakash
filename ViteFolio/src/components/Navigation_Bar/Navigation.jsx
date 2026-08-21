import { useState, useEffect, use } from 'react';
import './Navigation.css';
import ThemeButton from '../Theme_Button/Theme_Button.jsx';

const Navigation = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));
	};

	useEffect(() => {

		if (isDarkMode) {
			document.documentElement.style.setProperty('--current-text', 'var(--dark-text)');
			document.documentElement.style.setProperty('--current-text-rgb', 'var(--dark-text-rgb)');
			document.documentElement.style.setProperty('--current-background', 'var(--dark-background)');
			document.documentElement.style.setProperty('--current-background-rgb', 'var(--dark-background-rgb)');
			document.documentElement.style.setProperty('--current-primary', 'var(--dark-primary)');
			document.documentElement.style.setProperty('--current-primary-rgb', 'var(--dark-primary-rgb)');
			document.documentElement.style.setProperty('--current-secondary', 'var(--dark-secondary)');
			document.documentElement.style.setProperty('--current-secondary-rgb', 'var(--dark-secondary-rgb)');
			document.documentElement.style.setProperty('--current-accent', 'var(--dark-accent)');
			document.documentElement.style.setProperty('--current-accent-rgb', 'var(--dark-accent-rgb)');
			document.documentElement.style.setProperty('--opposite-text', 'var(--light-text)');
		} else {
			document.documentElement.style.setProperty('--current-text', 'var(--light-text)');
			document.documentElement.style.setProperty('--current-text-rgb', 'var(--light-text-rgb)');
			document.documentElement.style.setProperty('--current-background', 'var(--light-background)');
			document.documentElement.style.setProperty('--current-background-rgb', 'var(--light-background-rgb)');
			document.documentElement.style.setProperty('--current-primary', 'var(--light-primary)');
			document.documentElement.style.setProperty('--current-primary-rgb', 'var(--light-primary-rgb)');
			document.documentElement.style.setProperty('--current-secondary', 'var(--light-secondary)');
			document.documentElement.style.setProperty('--current-secondary-rgb', 'var(--light-secondary-rgb)');
			document.documentElement.style.setProperty('--current-accent', 'var(--light-accent)');
			document.documentElement.style.setProperty('--current-accent-rgb', 'var(--light-accent-rgb)');
			document.documentElement.style.setProperty('--opposite-text', 'var(--dark-text)');
		}

	}, [isDarkMode]);

	useEffect(() => {
		const savedMode = JSON.parse(localStorage.getItem('darkMode'));
		if (savedMode !== null) setIsDarkMode(savedMode);
		else {
			setIsDarkMode(true);
			localStorage.setItem('darkMode', JSON.stringify(true));
		}

	}, []);

	return (

		<nav className="navigation">
			<h4 className="logo">My Portfolio</h4>
			<div className='nav-links'>
				<a href="/">Home</a>
				<a href="/projects">Projects</a>
				{/* <a href="#about">What's New</a>
				<a href="#contact">Contact Me</a> */}
				<ThemeButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
			</div>
		</nav>

	)
};

export default Navigation;