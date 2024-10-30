import { ReactElement } from "react";
import SectionHeader from "./sectionHeader";

interface InfoSectionProps {
    headerWrapperClass?: string;
    iconClass: string;
    headerIconSrc: string;
    headerClass: string;
    header: string;
    infoLoop?: ReactElement[];
    infoListClass?: string;
    descriptionClass?: string;
    description?: string;
}

export default function InfoSection(props: InfoSectionProps) {
    const { infoLoop, infoListClass } = props;
    const { headerWrapperClass, iconClass, headerIconSrc, headerClass, header } = props;
    const styling = {
        headerWrapper: "flex justify-center items-center w-full pb-2 border-b-2 border-black",
    }


    return (
        <>
        <SectionHeader headerWrapperClass={headerWrapperClass ? `${styling.headerWrapper} ${headerWrapperClass}` : styling.headerWrapper} iconClass={iconClass} icon={headerIconSrc} headerClass={headerClass} header={header} />
        {props.infoLoop && 
            <ul className={infoListClass}>
                {infoLoop}
            </ul>
        }
        {props.description && 
            <p className={props.descriptionClass}>{props.description}</p>
        }
        </>
    );
}