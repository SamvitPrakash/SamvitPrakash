import './Footer.css';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-divider"/>
            <h4 className="footer-logo">My Portfolio</h4>

            <div className="footer-columns">
                <div className="footer-column">
                    <h5 className="footer-column-title">Home</h5>
                    <Link to="/#bio">Bio</Link>
                    <Link to="/#education">Educational Background</Link>
                    <Link to="/#skills">Technical Skills</Link>
                    <Link to="/#work">Work Experience</Link>
                </div>

                <div className="footer-column">
                    <h5 className="footer-column-title">Projects</h5>
                    <Link to="/projects#projects">Direwolf</Link>
                    <Link to="/projects#projects">Aurora</Link>
                    <Link to="/projects#projects">GreenCart</Link>
                </div>

                {/* <div className="footer-column">
                    <h5 className="footer-column-title">About</h5>
                    <a href="#about">What's New</a>
                    <a href="#about">My Goals</a>
                    <a href="#about">My Interests</a>
                </div> */}

                {/* <div className="footer-column">
                    <h5 className="footer-column-title">Contact Me</h5>
                    <a href="#contact">Email Me</a>
                    <a href="#contact">LinkedIn</a>
                    <a href="#contact">GitHub</a>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer;