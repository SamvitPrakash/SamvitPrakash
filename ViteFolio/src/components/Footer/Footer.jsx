import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-divider"/>
            <h4 className="footer-logo">My Portfolio</h4>

            <div className="footer-columns">
                <div className="footer-column">
                    <h5 className="footer-column-title">Home</h5>
                    <a href="#bio">Bio</a>
                    <a href="#education">Educational Background</a>
                    <a href="#skills">Technical Skills</a>
                    <a href="#work">Work Experience</a>
                </div>

                <div className="footer-column">
                    <h5 className="footer-column-title">Projects</h5>
                    <a href="#projects">Project 1</a>
                    <a href="#projects">Project 2</a>
                    <a href="#projects">Project 3</a>
                    <a href="#projects">Project 4</a>
                </div>

                <div className="footer-column">
                    <h5 className="footer-column-title">About</h5>
                    <a href="#about">What's New</a>
                    <a href="#about">My Goals</a>
                    <a href="#about">My Interests</a>
                </div>

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