import { ReactElement } from "react";
import SectionHeader from "./sectionHeader";

interface InfoSectionProps {
    headerWrapperClass?: string;
    headerIconID: string;
    headerIconSrc: string;
    headerClass: string;
    header: string;
    infoListID: string;
    infoLoop: ReactElement[]
}

export default function InfoSection(props: InfoSectionProps) {
    const { infoListID, infoLoop } = props;
    const { headerWrapperClass, headerIconID, headerIconSrc, headerClass, header } = props;
    
    return (
        <>
        <SectionHeader headerWrapperClass={headerWrapperClass !== undefined ? `headerContainer ${headerWrapperClass}` : "headerContainer"} iconID={headerIconID} icon={headerIconSrc} headerClass={headerClass} header={header} />
        <ul id={infoListID}>{infoLoop}</ul>
        </>
    );
}