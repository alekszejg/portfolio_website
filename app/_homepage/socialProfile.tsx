import Link from 'next/link';
import ContactIcon from './contactIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function SocialProfile() {
    
    return (
        <>
        <div id="bgPhotoWrapper">
            <img src="/Images/myLogo.svg" alt="My logo in background" />
        </div>
        <div id="myPhotoWrapper">
            <img src="/Images/myPhoto.png" alt="My Photo" />
        </div>
        
        <div id="textWrapper">
            <h2>Alekszej Guljajev 
                <Link href="https://wa.me/491746541424"><FontAwesomeIcon id="whatsappIcon" icon={faWhatsapp} /></Link>
                <ContactIcon />
            </h2>

            <span id="myLocation"><FontAwesomeIcon id="locationIcon" icon={faLocationDot} />Munich, Germany</span>
              
            <p>A self-taught programmer with BSc Economics Diploma who has been programming for a year in
                both Python and JavaScript. My portfolio may be no so large yet, but I guarantee that I invest all my 
                soul, passion and energy into projects I make. Currently aiming to get a job in the industry, meanwhile
                working on new projects and improving existing ones.  
            </p>
            
            <h3>Check out my other accounts</h3>

            <div className="linkWrapper">
                <FontAwesomeIcon className="linkIcon" icon={faLink} />
                <a href="https://github.com/alekszejg" target="_blank" rel="noopener noreferrer">Github</a>
            </div>

            <div className="linkWrapper">
                <FontAwesomeIcon className="linkIcon" icon={faLink} />
                <a href="https://tryhackme.com/p/alekszejg" target="_blank" rel="noopener noreferrer">TryHackMe</a>   
            </div>
        
        </div>
        </>  
    );
}