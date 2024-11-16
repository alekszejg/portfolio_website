import Link from 'next/link';
import Image from 'next/image';
import TriggerContactForm from '@/app/_homepage/basicInfo/triggerContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function BasicInfo() {
    const styling = {
        images: {
            bgWrapper: "w-full aspect-[3/1]",
            bg: "w-full h-full", 
            myPhotoWrapper: "w-[min(25%,300px)] aspect-square absolute translate-x-[30%] translate-y-[-65%]",
            myPhoto: "w-full h-full"
        },
        infoWrapper: "ml-[5%] mt-[10%]",
        whatsAppLink: "ml-[0.8rem] relative top-[0.1rem]",
        whatsAppIcon: "w-6 hover:scale-110 hover:cursor-pointer",
        location: {
            wrapper: "inline-block mt-[0.2rem]",
            icon: "h-[1rem] mr-[0.4rem]"
        },
        myAccounts: {
            header: "mt-1 mb-0.5 text-sm",
            linkIcon: "h-[0.7rem] relative bottom-0.5",
            link: "ml-[0.3rem] text-xs"
        }
    };
    
    return (
        <>
        <div className={styling.images.bgWrapper}>
            <Image 
            className={styling.images.bg} 
            width={100}
            height={100}
            src="/Images/myLogo.svg" 
            alt="My logo in background" />
        </div>

        <div className={styling.images.myPhotoWrapper}>
            <Image 
            className={styling.images.myPhoto}
            height={100}
            width={100}
            src="/Images/myPhoto.png" 
            alt="My Photo" />
        </div>
        
        <div className={styling.infoWrapper}>
            <h2>Alekszej Guljajev 
                <Link className={styling.whatsAppLink} href="https://wa.me/491746541424">
                    <FontAwesomeIcon className={styling.whatsAppIcon} icon={faWhatsapp} />
                </Link>
                <TriggerContactForm />
            </h2>

            <span className={styling.location.wrapper}>
                <FontAwesomeIcon className={styling.location.icon} icon={faLocationDot} />
                Munich, Germany
            </span>
              
            <p>A self-taught programmer with BSc Economics Diploma who has been programming for a year in
                both Python and JavaScript. My portfolio may be no so large yet, but I guarantee that I invest all my 
                soul, passion and energy into projects I make. Currently aiming to get a job in the industry, meanwhile
                working on new projects and improving existing ones.  
            </p>
            
            <h3 className={styling.myAccounts.header}>Check out my other accounts</h3>

            <div>
                <FontAwesomeIcon className={styling.myAccounts.linkIcon} icon={faLink} />
                <a 
                className={styling.myAccounts.link} 
                href="https://github.com/alekszejg" 
                target="_blank" 
                rel="noopener noreferrer">
                Github
                </a>
            </div>

            <div>
                <FontAwesomeIcon className={styling.myAccounts.linkIcon} icon={faLink} />
                <a 
                className={styling.myAccounts.link} 
                href="https://tryhackme.com/p/alekszejg" 
                target="_blank" 
                rel="noopener noreferrer">
                TryHackMe
                </a>   
            </div>
        
        </div>
        </>  
    );
}