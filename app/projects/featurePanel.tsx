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
        <div className={`panelWrapper ${imgSide === "left" ? "bluePanel" : "yellowPanel"}`}>
            <div className={imgSide === "right" ? `${imgWrapperClass} imgWrapperRight` : imgWrapperClass} id={imgWrapperID}>
                <img className="panelImage" id={imgID} src={imgSrc} alt={imgAlt} />
            </div>
            <div className="panelTextContainer">
                <h2 className="featureHeader">{header}</h2>
                <p className="featureText" dangerouslySetInnerHTML={{ __html: text}} />
            </div>
        </div>
    );
}

