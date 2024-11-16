import Link from "next/link";
import Image from "next/image";


type SkillLogoProps = {
    searchParamName: string, 
    imgSrc: string, 
    imgAlt: string,
    isSelected?: boolean,
}


export default function SkillLogo({ searchParamName, imgSrc, imgAlt, isSelected }: SkillLogoProps) {
    const styling = {
        link: "w-6 aspect-square hover:scale-110 tablet:w-12",
        selectedLink: "w-6 aspect-square hover:scale-110 border-2 border-[hsl(0,100%,75%)] tablet:w-12",
        image: "w-full h-full"
    }

    return (
        <Link href={`?stack=${searchParamName}`} scroll={false} className={isSelected ? styling.selectedLink : styling.link}>
            <Image className={styling.image} width={100} height={100} src={imgSrc} alt={imgAlt} />
        </Link>
    );
}

