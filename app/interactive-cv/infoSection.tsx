import { ReactElement } from "react";
import SectionHeader from "./sectionHeader";

interface InfoSectionProps {
    headerWrapperClass?: string;
    headerIconID: string;
    headerIconSrc: string;
    headerClass: string;
    header: string;
    infoLoop: ReactElement[];
    infoListID?: string;
    infoListClass?: string;
}

export default function InfoSection(props: InfoSectionProps) {
    const { infoLoop, infoListID, infoListClass } = props;
    const { headerWrapperClass, headerIconID, headerIconSrc, headerClass, header } = props;
    
    return (
        <>
        <SectionHeader headerWrapperClass={headerWrapperClass ? `headerContainer ${headerWrapperClass}` : "headerContainer"} iconID={headerIconID} icon={headerIconSrc} headerClass={headerClass} header={header} />
        <ul className={infoListClass} id={infoListID}>{infoLoop}</ul>
        </>
    );
}