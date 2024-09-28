"use client"
import { useState } from "react";
import Link from "next/link";

type Project = {
    githubUrl: string, 
    localUrl: string
    imgSrc: string,
    imgAlt: string, 
    title: string
};

export default function Project(props: Project) {
    const { githubUrl, localUrl, imgSrc, imgAlt, title } = props;

    const [buttonMenuVisible, setButtonMenuVisibility] = useState(false);
    const toggleButtonMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault(); // stops <Link> parent from being clicked
        setButtonMenuVisibility(prev => !prev);
    };
    
    return (
        <Link href={localUrl} className="projectWrapperLink">
            
            <div className="projectImgWrapper">
                <img src={imgSrc} alt={imgAlt} className={buttonMenuVisible ? "semiTransparentImg" : undefined} />

                <div className={buttonMenuVisible ? "buttonMenu" : "buttonMenuClosed"}>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer"><button className="toGithubButton">Github</button></a>
                    <Link href={localUrl}><button className="moreInfoButton">More info</button></Link>
                </div>

                <div className="showButtonMenuIconWrapper" onClick={toggleButtonMenu}>
                    <img src="/Icons/infoIcon.svg" alt="show information" />
                </div>
            </div>

            <h3>{title}</h3>
        </Link>
    );
}