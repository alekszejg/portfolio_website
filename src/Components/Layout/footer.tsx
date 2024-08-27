import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'Styling/Layout/footer.scss';


type FooterUrl = {title: string, href: string, iconID: string, icon: IconProp | string }

export default function Footer() {
    const urlList: FooterUrl[] = [
        {title: "GitHub", href: "https://github.com/alekszejg", iconID: "gitHubLogo", icon: faGithub},
        {title: "LinkedIn", href: "https://www.linkedin.com/in/alekszej-guljajev/", iconID: "linkedInLogo", icon: faLinkedin},
        {title: "TryHackMe", href: "https://tryhackme.com/p/alekszejg", iconID: "tryHackMeLogo", icon: "/Icons/tryHackMeIcon.png"}
    ]

    return (
        <footer>
            <p id="findMeText"><b>You can find me at</b></p>
            <div id="urlSection">
                {urlList.map((url) => (
                    <a className="contactLink" title={url.title} target="_blank" rel="noopener noreferrer" href={url.href}>
                        {typeof url.icon === "string" ? <img id={url.iconID} src={url.icon} /> : <FontAwesomeIcon id={url.iconID} icon={url.icon as IconProp} />}
                    </a>
                ))}
            </div>
        </footer>
    );
};

