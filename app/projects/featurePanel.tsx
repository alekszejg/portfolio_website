import Image from "next/image";
import styling from "@/app/projects/styling";

export type ImageType = "regular" | "svg";

interface ProjectFeatureProps {
    imgType: ImageType,
    imgSide: string,
    imgSrc: string,
    imgAlt: string,
    header: string,
    text: string,
    imgExtraStyling?: string
}

export default function ProjectFeaturePanel(props: ProjectFeatureProps) {

    const {imgType, imgSide, imgSrc, imgAlt, header, text, imgExtraStyling } = props;

    return (
        <div className={`${styling.panel.wrapper} ${imgSide === "left" ? "bg-blueProjectPanel" : "bg-yellowProjectPanel"}`}>
            <div className={imgSide === "right" ? `${imgType === "regular" ? `${styling.panel.imgWrapper} order-2` : `${styling.panel.svgImgWrapper} order-2`}` : `${imgType === "regular" ? styling.panel.imgWrapper : styling.panel.svgImgWrapper}`}>
                <Image 
                className={imgType === "regular" ? styling.panel.img : styling.panel.svgImg} 
                width={1000}
                height={1000}
                src={imgSrc} 
                alt={imgAlt} />
            </div>
            <div className={styling.panel.textWrapper}>
                <h2 className={styling.panel.header}>{header}</h2>
                <p className={styling.panel.text} dangerouslySetInnerHTML={{ __html: text}} />
            </div>
        </div>
    );
}

