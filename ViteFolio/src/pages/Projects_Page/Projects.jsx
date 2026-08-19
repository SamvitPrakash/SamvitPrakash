import './Projects.css'
import Navigation from '../../components/Navigation_Bar/Navigation';
import TypedName from '../../components/Typed_Name/Typed_Name';
import Footer from '../../components/Footer/Footer';

export function Projects() {
    return(
        <>
            <Navigation />
            
            <div>
				<TypedName fullText='Welcome to my ' fullName='Projects Showcase' punctuation='!'/>
				
			</div>

            <Footer />
       </>
    )
}

export default Projects;