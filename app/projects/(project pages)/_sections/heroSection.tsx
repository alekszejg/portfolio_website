import Image from "next/image";
import globalStyling from "@/app/projects/(project pages)/styling.wrappers";


type HeroSectionProps = {
    header: string, 
    text: string, 
    imgWrapperStyling?: string, 
    imgStylingExtra?: string,
    imgSrc: string, 
    imgAlt: string,
    githubUrl: string,
    localPath: string
};


export default function HeroSection({ imgWrapperStyling, imgStylingExtra, header, text, imgSrc, imgAlt, githubUrl, localPath }: HeroSectionProps) {
    const styling = {
        section: globalStyling.heroSection,
        infoWrapper: "flex flex-col w-[55%]",
        header: "text-3xl font-bold tracking-wider",
        text: "",
        imgWrapper: imgWrapperStyling ? imgWrapperStyling : "h-1/2",
        img: imgStylingExtra ? `${imgStylingExtra} w-full h-full rounded-xl` : "w-full h-full rounded-xl"
    }

    return (
        <section className={styling.section}>

            <div className={styling.infoWrapper}>
                <h2 className={styling.header}>{header}</h2>
                <p className={styling.text}>{text}</p>
            </div>
    
            <div className={styling.imgWrapper}>
                <Image 
                className={styling.img}
                width={1000} 
                height={1000}
                unoptimized={true}
                src={imgSrc} 
                alt={imgAlt} />
            </div>

        </section>
    );
}