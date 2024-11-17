import Image from "next/image";
import globalStyling from "@/app/projects/(project pages)/styling.wrappers";


export type ImageType = "regular" | "svg";


export type ProjectFeatureProps = {
    imgType: ImageType,
    imgSide: string,
    imgSrc: string,
    imgAlt: string,
    header: string,
    text: string,
    imgExtraStyling?: string
}


export default function ProjectFeature(props: ProjectFeatureProps) {
    const {imgType, imgSide, imgSrc, imgAlt, header, text, imgExtraStyling } = props;

    const styling = {
        wrapper: `${globalStyling.featureWrapper} ${imgSide === "left" ? "bg-blueProjectPage" : "bg-yellowProjectPage"}`,
        imgWrapper: `w-full aspect-[5/4] tablet:w-[clamp(375px,40%,437.50px)] ${imgSide === "right" ? "order-2" : ""}`,
        svgImgWrapper: `w-[min(170px,55%)] aspect-square tablet:w-[clamp(200px,40%,300px)] ${imgSide === "right" ? "order-2" : ""}`,
        img: "w-full h-full rounded-2xl shadow-[0_0_0.55rem_black] aspect-[5/4] object-cover",
        svgImg: "w-full h-full shadow-[0_0_0.55rem_black] tablet:rounded-2xl",
        textWrapper: "flex flex-col tablet:justify-center tablet:w-2/5 tablet:shrink-0",
        header: "mt-6 mb-2 text-[clamp(1.1rem,3vw,1.5rem)] tablet:mb-4",
        text: "text-[clamp(0.9rem,2vw,1.2rem)]"
    }

    return (
        <div className={styling.wrapper}>
            
            <div className={`${imgType === "regular" ? styling.imgWrapper : styling.svgImgWrapper} ${imgExtraStyling || ""}`}>
                <Image 
                className={imgType === "regular" ? styling.img : styling.svgImg} 
                width={1000}
                height={1000}
                src={imgSrc} 
                alt={imgAlt} />
            </div>

            <div className={styling.textWrapper}>
                <h2 className={styling.header}>{header}</h2>
                <p className={styling.text} dangerouslySetInnerHTML={{ __html: text}} />
            </div>

        </div>
    );
}

