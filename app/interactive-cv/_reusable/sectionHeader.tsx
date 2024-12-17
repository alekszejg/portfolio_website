import Image from "next/image";


type HeaderProps = {
    wrapperStyling?: string, 
    icon: {src: string, styling: string},
    header: string
}


export default function SectionHeader({ wrapperStyling, icon, header }: HeaderProps) {
    const defaultWrapperStyling = "flex justify-center items-center w-full pb-2 border-b-2 border-black"
    
    const styling = {
        wrapper: wrapperStyling ? `${defaultWrapperStyling} ${wrapperStyling}` : defaultWrapperStyling,
        icon: icon.styling,
        header: "pl-2 text-center font-medium text-xl text-nowrap",
    };

    return (
        <div className={styling.wrapper}>
            
            <Image 
            className={styling.icon} 
            width={50}
            height={50}
            src={icon.src} 
            alt="" />

            <h2 className={styling.header}>{header}</h2>
        </div> 
    );
}