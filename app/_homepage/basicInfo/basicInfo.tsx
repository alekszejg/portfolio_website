import Link from 'next/link';
import Image from 'next/image';
import TriggerContactForm from '@/app/_homepage/basicInfo/triggerContactForm';
import { MessageCircleMore, MapPin, Link as LinkIcon} from 'lucide-react';
import urlPaths from '@/app/url.paths';

export default function BasicInfo() {
    const styling = {
        images: {
            bgWrapper: "w-full aspect-[3/1]",
            bg: "w-full h-full", 
            myPhotoWrapper: "w-[min(25%,300px)] aspect-square absolute translate-x-[30%] translate-y-[-65%]",
            myPhoto: "w-full h-full"
        },
        infoWrapper: "ml-[5%] mt-[10%]",
        name: {
            text: "flex items-center gap-x-1.5 font-medium text-xl",
            whatsappIcon: "w-6 text-[hsl(142,70%,49%)] opacity-70 hover:scale-105 hover:cursor-pointer",
            messageIcon: "w-6 opacity-70 hover:scale-105 hover:cursor-pointer"
        },
        description: "text-sm",
        location: {
            wrapper: "flex items-center relative right-1.5 text-xs",
            icon: "h-[0.8rem]"
        },
        myAccounts: {
            header: "mt-1 font-medium text-sm",
            linkWrapper: "flex items-center mt-1 relative right-1.5",
            linkIcon: "h-[0.7rem] relative bottom-[1px]",
            link: "font-medium text-xs text-[hsl(210,100%,60%)] tracking-wider hover:underline active:underline"
        }
    };
    
    return (
        <>
        <div className={styling.images.bgWrapper}>
            <Image 
            className={styling.images.bg} 
            width={1000}
            height={1000}
            src="/Images/bgLogo.svg" 
            alt="Background illustration" />
        </div>

        <div className={styling.images.myPhotoWrapper}>
            <Image 
            className={styling.images.myPhoto}
            height={1000}
            width={1000}
            src="/Images/myPhoto.png" 
            alt="Author of this website" />
        </div>
        
        <div className={styling.infoWrapper}>
            <h2 className={styling.name.text}>Alekszej Guljajev 
                <Link href={urlPaths.misc.myAccounts.whatsapp}>
                    <MessageCircleMore className={styling.name.whatsappIcon}/>
                </Link>
                <TriggerContactForm iconStyling={styling.name.messageIcon} />
            </h2>

            <div className={styling.location.wrapper}>
                <MapPin className={styling.location.icon} />
                Munich, Germany
            </div>
              
            <p className={styling.description}>A self-taught programmer with BSc Economics Diploma who has been programming for a year in
                both Python and JavaScript. My portfolio may be no so large yet, but I guarantee that I invest all my 
                soul, passion and energy into projects I make. Currently aiming to get a job in the industry, meanwhile
                working on new projects and improving existing ones.  
            </p>
            
            <h3 className={styling.myAccounts.header}>Check out my other accounts</h3>

            <div className={styling.myAccounts.linkWrapper}>
                <LinkIcon className={styling.myAccounts.linkIcon} />
                <a 
                className={styling.myAccounts.link} 
                href={urlPaths.misc.myAccounts.github}
                target="_blank" 
                rel="noopener noreferrer">
                Github
                </a>
            </div>

            <div className={styling.myAccounts.linkWrapper}>
                <LinkIcon className={styling.myAccounts.linkIcon} />
                <a 
                className={styling.myAccounts.link} 
                href={urlPaths.misc.myAccounts.tryhackme}
                target="_blank" 
                rel="noopener noreferrer">
                TryHackMe
                </a>   
            </div>
        
        </div>
        </>  
    );
}