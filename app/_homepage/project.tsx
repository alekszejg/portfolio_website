"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


type Project = {githubUrl: string, localUrl: string, imgSrc: string, imgAlt: string, title: string};


export default function Project(props: Project) {
    const { githubUrl, localUrl, imgSrc, imgAlt, title } = props;

    const [buttonsVisible, setButtonsVisibility] = useState(false);
    const toggleButtonMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault(); 
        setButtonsVisibility(prev => !prev);
    };

    const router = useRouter();
    const handleReadMore = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push(localUrl);
    };

    const styling = {
        link: "flex flex-col items-center w-full text-black",
        projectImgWrapper: "w-full aspect-[4/5] border-1 border-[black] relative",
        projectImgRegular: "w-full h-full",
        projectImgTransparent: "w-full h-full opacity-20",
        projectName: "mt-2 text-center font-medium",
        buttons: {
            menu: "flex flex-col justify-center items-center gap-x-[0.8rem] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]",
            button: "w-full py-2 px-4 text-nowrap transition duration-100 ease-in-out",
            toggleMenuButton: "w-6 absolute top-2 right-2",
            toggleMenuImg: "w-full h-full",
        }
    }
    
    return (
        <Link href={localUrl} className="projectWrapperLink">
            
            <div className={styling.projectImgWrapper}>
                <Image 
                className={buttonsVisible ? styling.projectImgTransparent : styling.projectImgRegular} 
                width={1000}
                height={1000}
                src={imgSrc} 
                alt={imgAlt}  />

                <div className={buttonsVisible ? styling.buttons.menu : "hidden"}>
                    <button className={styling.buttons.button} onClick={() => window.open(`${githubUrl}`, '_blank')}>Github</button>
                    <button className={styling.buttons.button} onClick={handleReadMore}>More info</button>
                </div>

                <button className={styling.buttons.toggleMenuButton} onClick={toggleButtonMenu}>
                    <Image 
                    className={styling.buttons.toggleMenuImg} 
                    width={100}
                    height={100}
                    src="/Icons/infoIcon.svg" 
                    alt="show information" />
                </button>
            </div>

            <h3 className={styling.projectName}>{title}</h3>
        </Link>
    );
}