import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



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

    const styling = {
        link: "flex flex-col justify-centert min-w-[250px] w-full mb-16 rounded-2xl shadow-[0_0_0.1rem_black] relative overflow-hidden bg-[rgb(245,245,245)] active:outline active:outline-1 active:outline-grey tablet:m-0",
        imgWrapper: descriptionVisible ? "w-full opacity-10" : "w-full",
        img: "w-full h-full aspect-[5/4]",
        nonSvgImg: "object-cover", 
        svgImg: "py-8 box-border",
        reference: {
            wrapper: descriptionVisible ? "flex justify-between items-center h-16 py-4 box-border bg-[rgba(240,240,240)] opacity-10" : "flex justify-between items-center h-16 py-4 box-border bg-[rgba(240,240,240)]",
            header: "pl-6 text-[clamp(1.2rem,2vw,1.5rem)]",
            icon: "h-[1.25rem] pr-6 tablet:h-6"
        },
        description: {
            wrapper: descriptionVisible ? "block self-center absolute p-6 text-center text-black" : "hidden",
            text: "",
            toggleDescriptionButton: "w-8 absolute top-4 right-4",
            toggleDescriptionIcon: "w-full h-full"

        }
    };

    return (
        <Link className={styling.link} href={!finalPreview ? urlPath : ""}>
            
            <div className={styling.imgWrapper}>
                <Image 
                className={imgType === "svg" ? `${styling.img} ${styling.svgImg}` : `${styling.img} ${styling.nonSvgImg}`} 
                width={1000}
                height={1000}
                src={imgSrc} 
                alt={imgAlt} />
            </div>

            <div className={styling.reference.wrapper}>
                <h3 className={styling.reference.header}>{title}</h3>
                {!finalPreview && 
                <Image 
                className={styling.reference.icon} 
                width={100} 
                height={100} 
                src="/Icons/visitPageIcon.svg" 
                alt="visit project's page"/>}
            </div>

            {!finalPreview && 
                <button className={styling.description.toggleDescriptionButton} onClick={toggleDescription}>
                    <Image 
                    className={styling.description.toggleDescriptionIcon}
                    width={100}
                    height={100}
                    src="/Icons/infoIcon.svg" 
                    alt="show information" />
                </button>
            }

            {!finalPreview && 
                <div className={styling.description.wrapper}>
                    <p className={styling.description.text}>{description}</p>
                </div>
            }

        </Link>
    );
}