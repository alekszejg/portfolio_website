import Image from "next/image";
import globalStyling from "@/app/projects/(project pages)/styling.wrappers";
import ClientButtons from "@/app/projects/(project pages)/_sections/hero/clientButtons";

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
        section: `${globalStyling.heroSection}`,
        info: {
            wrapper: "flex flex-col w-full tablet:w-[min(55%,480px)]",
            header: "text-2xl font-bold text-nowrap tracking-wider tablet:text-3xl",
            text: "",
            buttonsWrapper: "flex flex-col gap-y-8 mt-6 tablet:flex-row tablet:gap-x-12 tablet:gap-y-0 tablet:mt-5"
        },
        imgWrapper: imgWrapperStyling ? `hidden tablet:block ${imgWrapperStyling}` : "hidden tablet:block tablet:h-1/2",
        img: imgStylingExtra ? `${imgStylingExtra} w-full h-full rounded-xl` : "w-full h-full rounded-xl"
    }

    return (
        <section className={styling.section}>

            <div className={styling.info.wrapper}>
                <h2 className={styling.info.header}>{header}</h2>
                <p className={styling.info.text}>{text}</p>

                <ClientButtons wrapperStyling={styling.info.buttonsWrapper} githubUrl={githubUrl} />
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