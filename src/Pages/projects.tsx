import NavMenu from 'Components/Layout/nav';
import 'Styling/mainPagesStyles/projectsPage.scss';
import { useState, useRef, useEffect} from 'react';
import { Link } from "react-router-dom";


interface ProjectTemplateProps {
    linkTo: string,
    imgType: string,
    imgID: string,
    imgSrc: string,
    imgAlt: string,
    projectTitle: string
    finalLink?: boolean;
}

function ProjectTemplate(props: ProjectTemplateProps) {
    return (
        <Link className="projectLink" id={props.finalLink ? "finalLink" : undefined} to={props.linkTo}>
            <div className="projectImgContainer">
                <img className={`projectImg ${props.imgType === "vector" ? "vectorImg" : "rasterImg"}`} id={props.imgID} src={props.imgSrc} alt={props.imgAlt}/>
            </div>
            <div className="projectReference">
                <h3 className="projectHeader">{props.projectTitle}</h3>
                <img className="visitPageIcon" src="/Icons/visitPageIcon.svg" alt="visit this webpage icon"/>
            </div>
        </Link>
    );
}

function MyProjects() {
    const totalChildren = useRef<HTMLDivElement>(null);
    const [totalProjects, setTotalProjects] = useState(0);

    useEffect(() => {
        const elementCount = totalChildren.current?.children.length || 0;
        setTotalProjects(elementCount - 1);
    }, [])
    
    const botProjectProps = {
        linkTo: "/projects/discord-bot",
        imgType: "vector",
        imgID: "botProfileImage",
        imgSrc: "/Images/discordLogo.svg",
        imgAlt: "a discord bot image",
        projectTitle: "Discord Bot"
    }

    const thisWebsiteProjectProps = {
        linkTo: "/projects/this-website",
        imgType: "raster",
        imgID: "thisWebsiteProfileImage",
        imgSrc: "/Images/thisWebsite.png",
        imgAlt: "folder structure image of this website",
        projectTitle: "This Website"
    }

    const moreToComeProps = {
        linkTo: "/projects",
        imgType: "vector",
        imgID: "hourglassIcon",
        imgSrc: "/Icons/hourglass.svg",
        imgAlt: "an hourglass image",
        projectTitle: "A lot more to come...",
        finalLink: true
    }
    
    return (
        <>
        <NavMenu />
        <div id="mainHeaderContainer">
            <img id="lampIcon" src="/Icons/lampIcon.svg" alt="a lamp icon" />
            <h1 id="mainProjectHeader">My Projects ({totalProjects})</h1>
        </div>
    
        <div id="projectContainer" ref={totalChildren}>
            <ProjectTemplate {...botProjectProps} />
            <ProjectTemplate {...thisWebsiteProjectProps} />
            <ProjectTemplate {...moreToComeProps} />
        </div>
        </>
    );
}

export default MyProjects;
