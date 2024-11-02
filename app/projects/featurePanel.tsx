import Image from "next/image";
import styling from "@/app/projects/styling";

export type ImageWrapper = "imgWrapper" | "svgImgWrapper";

interface ProjectFeatureProps {
    imgWrapperClass: ImageWrapper,
    imgSide: string,
    imgSrc: string,
    imgAlt: string,
    header: string,
    text: string,
    imgWrapperID?: string,
    imgID?: string,
}

export default function ProjectFeaturePanel(props: ProjectFeatureProps) {

    const {imgWrapperClass, imgSide, imgSrc, imgAlt, header, text, imgWrapperID, imgID } = props;

    return (
        <div className={`${styling.panel.wrapper} ${imgSide === "left" ? "bg-blueProjectPanel" : "bg-yellowProjectPanel"}`}>
            <div className={imgSide === "right" ? `${imgWrapperClass} imgWrapperRight` : imgWrapperClass} id={imgWrapperID}>
                <img className="panelImage" id={imgID} src={imgSrc} alt={imgAlt} />
            </div>
            <div className={styling.panel.textWrapper}>
                <h2 className={styling.panel.header}>{header}</h2>
                <p className={styling.panel.text} dangerouslySetInnerHTML={{ __html: text}} />
            </div>
        </div>
    );
}

