import { ReactElement } from "react";
import SectionHeader from "./header";

interface InfoSectionProps {
    wrapperStyling: string,
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
    const { wrapperStyling, infoLoop, infoListClass } = props;
    const { headerWrapperClass, iconClass, headerIconSrc, headerClass, header } = props;
    
    const styling = {
        wrapper: wrapperStyling,
        headerWrapper: "flex justify-center items-center w-full pb-2 border-b-2 border-black",
    }


    return (
        <div className={styling.wrapper}>
            <SectionHeader 
            wrapperStyling={headerWrapperClass ? `${styling.headerWrapper} ${headerWrapperClass}` : styling.headerWrapper} 
            icon={{styling: iconClass, svg: headerIconSrc}} 
            header={{styling: headerClass, text: header}} />
            
            {props.infoLoop && 
                <ul className={infoListClass}>
                    {infoLoop}
                </ul>
            }

            {props.description && 
                <p className={props.descriptionClass}>{props.description}</p>
            }
        </div>
    );
}