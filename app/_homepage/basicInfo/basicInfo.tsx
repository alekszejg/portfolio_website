import Link from 'next/link';
import Image from 'next/image';
import TriggerContactForm from '@/app/_homepage/basicInfo/triggerContactForm';
import { MessageCircleMore, MapPin, Link as LinkIcon} from 'lucide-react';
import urlPaths from '@/app/url.paths';


export default function BasicInfo() {
    const styling = {
        infoWrapper: "px-[5%] pt-[10%]",
        bgImage: {
            wrapper: "w-full aspect-[3/1]",
            img: "w-full aspect-[3/1]"
        },
        photo: {
            wrapper: "w-[min(25%,300px)] aspect-square absolute translate-x-[30%] translate-y-[-65%]",
            img: "w-full h-full rounded-full object-cover"
        },
        name: "flex items-center gap-x-1.5 font-medium text-xl",
        whatsappIcon: "w-6 text-[hsl(142,70%,49%)] opacity-70 hover:scale-105 hover:cursor-pointer",
        messageIcon: "w-6 opacity-70 hover:scale-105 hover:cursor-pointer",
        location: {
            wrapper: "flex items-center relative right-1.5 text-xs",
            icon: "h-[0.8rem]"
        },
        description: "text-sm",
        myAccounts: {
            header: "mt-1 font-medium text-sm",
            link: {
                wrapper: "flex items-center mt-1 relative right-1.5",
                icon: "h-[0.7rem] relative bottom-[1px]",
                url: "font-medium text-xs text-[hsl(210,100%,60%)] tracking-wider hover:underline active:underline"
            }
        }
    };
    
    return (
        <>
        <div className={styling.bgImage.wrapper}>
            <Image 
            className={styling.bgImage.img} 
            width={1000}
            height={1000}
            src="/Images/bgLogo.svg" 
            alt="Background illustration" />
        </div>

        <div className={styling.photo.wrapper}>
            <Image 
            className={styling.photo.img}
            height={1000}
            width={1000}
            src="/Images/myPhoto.jpg" 
            alt="Author of this website" />
        </div>
        
        <div className={styling.infoWrapper}>
            <h2 className={styling.name}>Alekszej Guljajev 
                <Link href={urlPaths.misc.myAccounts.whatsapp}>
                    <MessageCircleMore className={styling.whatsappIcon}/>
                </Link>
                <TriggerContactForm iconStyling={styling.messageIcon} />
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

            <div className={styling.myAccounts.link.wrapper}>
                <LinkIcon className={styling.myAccounts.link.icon} />
                <a 
                className={styling.myAccounts.link.url} 
                href={urlPaths.misc.myAccounts.github}
                target="_blank" 
                rel="noopener noreferrer">
                Github
                </a>
            </div>

            <div className={styling.myAccounts.link.wrapper}>
                <LinkIcon className={styling.myAccounts.link.icon} />
                <a 
                className={styling.myAccounts.link.url} 
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