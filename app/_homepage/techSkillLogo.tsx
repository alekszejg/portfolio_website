import Link from "next/link";
import Image from "next/image";

export default function TechSkillLogo(props: {searchParamName: string, selectedSkill: string | null, imgSrc: string, imgAlt: string}) {
    const { searchParamName, selectedSkill, imgSrc, imgAlt } = props;
    const styling = {
        skill: "w-[1.5rem] hover:scale-110",
        selectedSkill: "w-[1.5rem] hover:scale-110 border-2 border-[hsl(0,100%,75%)]",
        image: "w-full h-full"
    }

    return (
        <Link href={`?skill=${searchParamName}`} scroll={false} className={searchParamName === selectedSkill || (searchParamName === "html" && selectedSkill === null) ? styling.selectedSkill : styling.skill}>
            <Image className={styling.image} width={100} height={100} src={imgSrc} alt={imgAlt} />
        </Link>
    );
}

