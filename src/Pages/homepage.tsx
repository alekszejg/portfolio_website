import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons';

import PageLayout from 'Components/Layout/pageLayout';
import "Styling/Pages/homepage.scss";

export default function Homepage() {
    
    const techStack = [
        {name: "HTML CSS", description: "", image: ""},
        {name: "HTML CSS", description: "", image: ""},
        {name: "Sass/SCSS", description: "", image: ""},
        {name: "Tailwind CSS", description: "", image: ""},

        {name: "JavaScript", description: "", image: ""},
        {name: "TypeScript", description: "", image: ""},
        {name: "Python", description: "", image: ""},
        
        {name: "React", description: "", image: ""},
        {name: "Next.js", description: "", image: ""},
    ]
    
    return (
        <PageLayout layoutID="homepageLayout">
            
            <div id="profileWrapper">
                <div id="backgroundPhotoWrapper">
                    <img src="/Images/myLogo.svg" alt="My logo in background" />
                </div>
                <div id="myPhotoWrapper">
                    <img src="/Images/myPhoto.png" alt="My Photo" />
                </div>
                
                <div id="textWrapper">
                    <h2>Alekszej Guljajev</h2>
                    <p>A self-taught programmer with BSc Economics Diploma who has been programming for a year in
                        both Python and JavaScript. My portfolio may be no so large yet, but I guarantee that I invest all my 
                        soul, passion and energy into projects I make. Currently aiming to get a job in the industry, meanwhile
                        working on new projects and improving existing ones.  
                    </p>
                    
                    <p id="location"><FontAwesomeIcon icon={faLocationDot} />Munich, Germany</p>
                    
                    <div className="visitLinkWrapper">
                        <FontAwesomeIcon icon={faLink} />
                        <a href="https://github.com/alekszejg" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>

                    <div className="visitLinkWrapper">
                        <FontAwesomeIcon icon={faLink} />
                        <a href="https://tryhackme.com/p/alekszejg" target="_blank" rel="noopener noreferrer">TryHackMe</a>
                    </div>
                </div>

                <div id="buttonWrapper">
                    <Link to="/contact"><button>Contact</button></Link>
                    <Link to="/projects"><button>View Projects</button></Link>
                </div>

                <div id="viewMenuWrapper">
                    <Link to="/contact"><button>My Stack</button></Link>
                    <Link to="/projects"><button>Posts</button></Link>
                </div>
                
            </div>


        </PageLayout>
    )
}