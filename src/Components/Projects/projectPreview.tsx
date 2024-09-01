import { useState } from "react";
import { Link } from "react-router-dom";


export type ProjectImage = "standard" | "svg";

interface ProjectPreviewProps {
    urlPath: string,
    imgType: ProjectImage,
    imgSrc: string,
    imgAlt: string,
    title: string,
    description?: string,
    imgID?: string,
    finalPreview?: boolean;
}

export default function ProjectPreview(props: ProjectPreviewProps) {
    const { urlPath, imgType, imgID, imgSrc, imgAlt, title, description, finalPreview } = props;
    
    const [descriptionVisible, showDescription] = useState(false);
    const toggleDescription = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault(); // stops <Link> parent from being clicked
        showDescription(prev => !prev);
    };

    return (
        <Link className="projectLink" to={!finalPreview ? urlPath : ""}>
            
            <div className={descriptionVisible ? "projectImgContainer semiTransparent" : "projectImgContainer"}>
                <img className={`projectImg ${imgType === "svg" ? "svgImg" : "standardImg"}`} id={imgID} src={imgSrc} alt={imgAlt} />
            </div>

            <div className={descriptionVisible ? "projectReference semiTransparent" : "projectReference"}>
                <h3 className="projectHeader">{title}</h3>
                {!finalPreview && <img className="visitPageIcon" src="/Icons/visitPageIcon.svg" alt="visit project's page"/>}
            </div>

            {!finalPreview && 
                <div className="showDescriptionIconWrapper" onClick={toggleDescription}>
                    <img src="/Icons/infoIcon.svg" alt="show information" />
                </div>
            }

            {!finalPreview && 
                <div className={descriptionVisible ? "descrWrapperOpened" : "descrWrapperHidden"}>
                    <p className="description">{description}</p>
                </div>
            }

        </Link>
    );
}