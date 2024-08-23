import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import tryHackMeLogo from '../../Icons/tryHackMeIcon.png';
import '../../Styling/pageLayoutStyles/footer.scss';

interface UrlMakerProps {
    urlTitle: string,
    urlHref: string,
    iconID: string,
    icon: IconProp | string 
}


function UrlMaker(props: UrlMakerProps) {
    if (typeof props.icon === "string") {
        return (
            <a className="contactLink" title={props.urlTitle} target="_blank" rel="noopener noreferrer" href={props.urlHref}>
                <img id={props.iconID} src={props.icon} />
            </a>
        );
    } else {
        return (
            <a className="contactLink" title={props.urlTitle} target="_blank" rel="noopener noreferrer" href={props.urlHref}>
                <FontAwesomeIcon id={props.iconID} icon={props.icon} />
            </a>
        )
    } 
}

function FollowMe() {
    
    const gitHubLink = {
        urlTitle: "GitHub",
        urlHref: "https://github.com/alekszejg",
        iconID: "gitHubLogo",
        icon: faGithub
    };

    const linkedInLink = {
        urlTitle: "LinkedIn",
        urlHref: "https://www.linkedin.com/in/alekszej-guljajev/",
        iconID: "linkedInLogo",
        icon: faLinkedin
    };

    const tryHackMeLink = {
        urlTitle: "TryHackMe",
        urlHref: "https://tryhackme.com/p/alekszejg",
        iconID: "tryHackMeLogo",
        icon: tryHackMeLogo
    }

    return (
        <footer>
            <p id="findMeText"><b>You can find me at</b></p>
            <div className="followInfo">
                <UrlMaker {...gitHubLink} />
                <UrlMaker {...linkedInLink} />
                <UrlMaker {...tryHackMeLink} />
            </div>
        </footer>
    );
}

export default FollowMe;
