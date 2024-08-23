import Bio from 'Components/bio'; 
import NavMenu from 'Components/Layout/navMenu';
import Footer from 'Components/Layout/footerContent';


function AboutPage() {
    
    return (
        <div id="homepageLayout">
            <NavMenu />
            <Bio />
            <Footer  />
        </div>
    );
} 

export default AboutPage;