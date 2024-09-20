import Link from "next/link";


export default function TechSkillLogo(props: {searchParamName: string, selectedSkill: string | null, imgSrc: string, imgAlt: string}) {
    const { searchParamName, selectedSkill, imgSrc, imgAlt } = props;
   
    return (
        <Link href={`?skill=${searchParamName}`} scroll={false} className={searchParamName === selectedSkill || (searchParamName === "html" && selectedSkill === null) ? "techSkillLogoWrapper selectedSkillLogoWrapper" : "techSkillLogoWrapper"}>
            <img src={imgSrc} alt={imgAlt} />
        </Link>
    );
}

