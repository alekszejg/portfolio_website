import SectionHeader from "./sectionHeader";

interface AboutMeSectionProps {
    headerWrapperClass: string;
    headerIconID: string;
    headerIconSrc: string;
    headerClass: string;
    header: string;
    descriptionClass: string;
    description: string;
}

export default function AboutMeSection(props: AboutMeSectionProps) {
    const { descriptionClass, description } = props;
    const { headerWrapperClass, headerIconID, headerIconSrc, headerClass, header } = props;
    
    return (
        <>
        <SectionHeader headerWrapperClass={headerWrapperClass} iconID={headerIconID} icon={headerIconSrc} headerClass={headerClass} header={header} />
        <p className={descriptionClass}>{description}</p>
        </>
    );
}