"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

    const router = useRouter();
    const handleReadMore = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push(localUrl);
    };
    
    return (
        <Link href={localUrl} className="projectWrapperLink">
            
            <div className="projectImgWrapper">
                <img src={imgSrc} alt={imgAlt} className={buttonMenuVisible ? "semiTransparentImg" : undefined} />

                <div className={buttonMenuVisible ? "buttonMenu" : "buttonMenuClosed"}>
                    <button className="toGithubButton" onClick={() => window.open(`${githubUrl}`, '_blank')}>Github</button>
                    <button className="moreInfoButton" onClick={handleReadMore}>More info</button>
                </div>

                <div className="showButtonMenuIconWrapper" onClick={toggleButtonMenu}>
                    <img src="/Icons/infoIcon.svg" alt="show information" />
                </div>
            </div>

            <h3>{title}</h3>
        </Link>
    );
}