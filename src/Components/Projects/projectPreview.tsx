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
    finalLink?: boolean;
}

export default function ProjectPreview(props: ProjectPreviewProps) {
    const { urlPath, imgType, imgID, imgSrc, imgAlt, title, description, finalLink } = props;
    return (
        <Link className="projectLink" id={finalLink ? "finalLink" : undefined} to={urlPath}>
            
            <div className="projectImgContainer">
                <img className={`projectImg ${imgType === "svg" ? "svgImg" : "standardImg"}`} id={imgID} src={imgSrc} alt={imgAlt} />
            </div>

            <div className="projectReference">
                <h3 className="projectHeader">{title}</h3>
                <img className="visitPageIcon" src="/Icons/visitPageIcon.svg" alt="visit project's page"/>
            </div>

            {description && 
                <div className="descriptionWrapper">
                    <p className="description">{description}</p>
                </div>
            }

        </Link>
    );
}