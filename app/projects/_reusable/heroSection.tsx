import Image from "next/image";
import globalStyling from "@/app/projects/styling";


type HeroSectionProps = {
    header: string, 
    text: string, 
    imgWrapperStyling?: string, 
    imgSrc: string, 
    imgAlt: string,
    githubUrl: string,
    localUrl: string
};


export default function HeroSection({ imgWrapperStyling, header, text, imgSrc, imgAlt, githubUrl, localUrl }: HeroSectionProps) {
    const styling = {
        section: globalStyling.heroSection,
        infoWrapper: "flex flex-col w-2/3",
        header: "text-3xl font-bold tracking-wider",
        text: "",
        imgWrapper: imgWrapperStyling ? imgWrapperStyling : "h-1/2 rounded-2xl",
        img: "w-full h-full rounded-[10%]"
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