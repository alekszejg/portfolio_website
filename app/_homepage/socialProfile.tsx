import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons';


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
            <h2>Alekszej Guljajev <Link id="contactLink" href="/contact"><button>Contact</button></Link></h2>
            <p>A self-taught programmer with BSc Economics Diploma who has been programming for a year in
                both Python and JavaScript. My portfolio may be no so large yet, but I guarantee that I invest all my 
                soul, passion and energy into projects I make. Currently aiming to get a job in the industry, meanwhile
                working on new projects and improving existing ones.  
            </p>
            
            <p id="location">
                <FontAwesomeIcon id="locationIcon" icon={faLocationDot} />
                Munich, Germany
            </p>
            
            <div className="visitLinkWrapper">
                <FontAwesomeIcon className="linkIcon" icon={faLink} />
                <a href="https://github.com/alekszejg" target="_blank" rel="noopener noreferrer">Github</a>
            </div>

            <div className="visitLinkWrapper">
                <FontAwesomeIcon className="linkIcon" icon={faLink} />
                <a href="https://tryhackme.com/p/alekszejg" target="_blank" rel="noopener noreferrer">TryHackMe</a>
            </div>
        </div>
        </>  
    );
}