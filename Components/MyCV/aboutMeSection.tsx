import SectionHeader from "./sectionHeader";

interface AboutMeSectionProps {
    headerIconID: string;
    headerIconSrc: string;
    headerClass: string;
    header: string;
    descriptionClass: string;
    description: string;
}

export default function AboutMeSection(props: AboutMeSectionProps) {
    const { descriptionClass, description } = props;
    const { headerIconID, headerIconSrc, headerClass, header } = props;
    
    return (
        <>
        <SectionHeader headerWrapperClass="headerContainer" iconID={headerIconID} icon={headerIconSrc} headerClass={headerClass} header={header} />
        <p className={descriptionClass}>{description}</p>
        </>
    );
}