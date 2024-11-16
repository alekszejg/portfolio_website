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
        infoWrapper: "flex flex-col",
        header: "",
        text: "",
        image: "w-full h-full"
    }

    return (
        <section className={styling.section}>

            <div className={styling.infoWrapper}>
                <h2 className={styling.header}>{header}</h2>
                <p className={styling.text}>{text}</p>
            </div>
    
            <div className={imgWrapperStyling}>
                <Image 
                className={styling.image}
                width={1000} 
                height={1000} 
                src={imgSrc} 
                alt={imgAlt} />
            </div>

        </section>
    );
}