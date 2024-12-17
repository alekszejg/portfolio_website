"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/app/projects/projects.data";



export default function ProjectPreview({ githubUrl, localPath, imgSrc, imgAlt, title, isFinal }: Project) {
    
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
        link: "flex flex-col items-center w-full text-black group",
        projectImgWrapper: "w-full aspect-[4/5] rounded-xl relative shadow-[0_0_0.15rem_grey]",
        projectImg: `${buttonsVisible ? "opacity-20" : "opacity-100"} w-full h-full aspect-[4/5] tablet:opacity-100 tablet:group-hover:opacity-40 rounded-xl`,
        buttons: {
            menu: `${buttonsVisible ? "flex flex-col justify-center items-center gap-y-[0.8rem] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]" : "hidden"} tablet:hidden tablet:group-hover:flex tablet:group-hover:flex-col tablet:group-hover:justify-center tablet:group-hover:items-center tablet:group-hover:gap-y-[0.8rem] tablet:group-hover:absolute tablet:group-hover:top-1/2 tablet:group-hover:left-1/2 tablet:group-hover:translate-x-[-50%] tablet:group-hover:translate-y-[-50%]`,
            button: "w-full py-1 px-4 bg-[rgb(235,235,235)] rounded-md text-nowrap shadow-[0_0_0.15rem_grey] transition duration-100 ease-in-out tablet:group-hover:w-full tablet:group-hover:text-nowrap tablet:group-hover:py-1 tablet:group-hover:px-4 tablet:group-hover:border-1 tablet:group-hover:border-[black] tablet:group-hover:transition tablet:group-hover:duration-100 tablet:group-hover:ease-in-out tablet:group-hover:hover:scale-105 tablet:group-hover:active:scale-105",
            toggleMenuButton: "w-6 absolute top-2 right-2 tablet:hidden",
            toggleMenuImg: "w-full h-full",
        },
        projectName: "mt-2 text-center font-medium text-lg tablet:group-hover:scale-105 tablet:group-hover:opacity-60",
    }
    
    return (
        <Link href={localPath} className={styling.link}>
            
            <div className={styling.projectImgWrapper}>
                <Image 
                className={styling.projectImg} 
                width={1000}
                height={1000}
                src={imgSrc} 
                alt={imgAlt}  />

                {!isFinal && 
                <>
                <div className={styling.buttons.menu}>
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
                </>
                }

            </div>

            <h3 className={styling.projectName}>{title}</h3>
        </Link>
    );
}