"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


type Project = {githubUrl: string, localPath: string, imgSrc: string, imgAlt: string, title: string};


export default function ProjectPreview({ githubUrl, localPath, imgSrc, imgAlt, title }: Project) {
    
    const [buttonsVisible, setButtonsVisibility] = useState(false);
    const toggleButtonMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault(); 
        setButtonsVisibility(prev => !prev);
    };

    const handleRedirect = (event: React.MouseEvent<HTMLButtonElement>, redirectType: "local" | "github") => {
        event.preventDefault();
        switch (redirectType) {
            case "local":
                window.open(localPath, '_blank', 'noopener,noreferrer');
                break;
            case "github":
                window.open(githubUrl, '_blank', 'noopener,noreferrer');
                break;    
        }
    };

    const styling = {
        link: "flex flex-col items-center w-full text-black",
        projectImgWrapper: "w-full aspect-[4/5] border-1 border-[black] relative group",
        projectImgRegular: "w-full h-full tablet:group-hover:opacity-40",
        projectImgTransparent: "w-full h-full opacity-20",
        projectName: "mt-2 text-center font-medium tablet:hover:scale-105 tablet:hover:opacity-60",
        buttons: {
            menu: "flex flex-col justify-center items-center gap-x-[0.8rem] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] tablet:group-hover:flex tablet:group-hover:flex-col tablet:group-hover:justify-center tablet:group-hover:items-center tablet:group-hover:gap-y-[0.8rem] tablet:group-hover:absolute tablet:group-hover:top-1/2 tablet:group-hover:left-1/2 tablet:group-hover:translate-x-[-50%] tablet:group-hover:translate-y-[-50%]",
            menuClosed: "hidden tablet:group-hover:flex tablet:group-hover:flex-col tablet:group-hover:justify-center tablet:group-hover:items-center tablet:group-hover:gap-y-[0.8rem] tablet:group-hover:absolute tablet:group-hover:top-1/2 tablet:group-hover:left-1/2 tablet:group-hover:translate-x-[-50%] tablet:group-hover:translate-y-[-50%]",
            button: "w-full py-2 px-4 text-nowrap transition duration-100 ease-in-out tablet:group-hover:w-full tablet:group-hover:text-nowrap tablet:group-hover:py-2 tablet:group-hover:px-4 tablet:group-hover:border-1 tablet:group-hover:border-[black] tablet:group-hover:transition tablet:group-hover:duration-100 tablet:group-hover:ease-in-out tablet:group-hover:hover:scale-105 tablet:group-hover:active:scale-105",
            toggleMenuButton: "w-6 absolute top-2 right-2 tablet:hidden",
            toggleMenuImg: "w-full h-full",
        }
    }
    
    return (
        <Link href={localPath} className={styling.link}>
            
            <div className={styling.projectImgWrapper}>
                <Image 
                className={buttonsVisible ? styling.projectImgTransparent : styling.projectImgRegular} 
                width={1000}
                height={1000}
                src={imgSrc} 
                alt={imgAlt}  />

                <div className={buttonsVisible ? styling.buttons.menu : styling.buttons.menuClosed}>
                    <button className={styling.buttons.button} onClick={(e) => handleRedirect(e, "github")}>Github</button>
                    <button className={styling.buttons.button} onClick={(e) => handleRedirect(e, "local")}>More info</button>
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