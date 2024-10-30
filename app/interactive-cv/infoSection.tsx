import { ReactElement } from "react";
import SectionHeader from "./sectionHeader";

interface InfoSectionProps {
    headerWrapperClass?: string;
    iconClass: string;
    headerIconSrc: string;
    headerClass: string;
    header: string;
    infoLoop?: ReactElement[];
    infoListID?: string;
    infoListClass?: string;
    descriptionClass?: string;
    description?: string;
}

export default function InfoSection(props: InfoSectionProps) {
    const { infoLoop, infoListID, infoListClass } = props;
    const { headerWrapperClass, iconClass, headerIconSrc, headerClass, header } = props;
    
    return (
        <>
        <SectionHeader headerWrapperClass={headerWrapperClass ? `headerContainer ${headerWrapperClass}` : "headerContainer"} iconClass={iconClass} icon={headerIconSrc} headerClass={headerClass} header={header} />
        {props.infoLoop && 
            <ul className={infoListClass} id={infoListID}>
                {infoLoop}
            </ul>
        }
        {props.description && 
            <p className={props.descriptionClass}>{props.description}</p>
        }
        </>
    );
}