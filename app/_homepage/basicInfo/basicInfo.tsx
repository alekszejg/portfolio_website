import Link from 'next/link';
import Image from 'next/image';
import TriggerContactForm from '@/app/_homepage/basicInfo/triggerContactForm';
import { MessageCircleMore, MapPin, Link as LinkIcon} from 'lucide-react';


export default function BasicInfo() {
    const styling = {
        images: {
            bgWrapper: "w-full aspect-[3/1]",
            bg: "w-full h-full", 
            myPhotoWrapper: "w-[min(25%,300px)] aspect-square absolute translate-x-[30%] translate-y-[-65%]",
            myPhoto: "w-full h-full"
        },
        infoWrapper: "ml-[5%] mt-[10%]",
        header: {
            text: "flex items-center gap-x-1.5 text-xl",
            whatsappIcon: "w-6 hover:scale-110 hover:cursor-pointer"
        },
        location: {
            wrapper: "flex items-center mt-[0.2rem] relative right-1.5",
            icon: "h-[1rem]"
        },
        myAccounts: {
            header: "mt-1 mb-0.5 text-sm",
            linkWrapper: "flex items-center gap-x-1 relative right-1.5",
            linkIcon: "h-[0.7rem] relative bottom-0.5",
            link: "text-xs"
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
            alt="Author of this website" 
            priority />
        </div>
        
        <div className={styling.infoWrapper}>
            <h2 className={styling.header.text}>Alekszej Guljajev 
                <Link href="https://wa.me/491746541424">
                    <MessageCircleMore className={styling.header.whatsappIcon}/>
                </Link>
                <TriggerContactForm />
            </h2>

            <div className={styling.location.wrapper}>
                <MapPin className={styling.location.icon} />
                Munich, Germany
            </div>
              
            <p>A self-taught programmer with BSc Economics Diploma who has been programming for a year in
                both Python and JavaScript. My portfolio may be no so large yet, but I guarantee that I invest all my 
                soul, passion and energy into projects I make. Currently aiming to get a job in the industry, meanwhile
                working on new projects and improving existing ones.  
            </p>
            
            <h3 className={styling.myAccounts.header}>Check out my other accounts</h3>

            <div className={styling.myAccounts.linkWrapper}>
                <LinkIcon className={styling.myAccounts.linkIcon} />
                <a 
                className={styling.myAccounts.link} 
                href="https://github.com/alekszejg" 
                target="_blank" 
                rel="noopener noreferrer">
                Github
                </a>
            </div>

            <div className={styling.myAccounts.linkWrapper}>
                <LinkIcon className={styling.myAccounts.linkIcon} />
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