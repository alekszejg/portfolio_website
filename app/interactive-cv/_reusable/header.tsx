import Image from "next/image";


type HeaderProps = {
    wrapperStyling: string, 
    icon: {styling: string, svg: string},
    header: {styling: string, text: string}
}


export default function Header({ wrapperStyling, icon, header }: HeaderProps) {
    const styling = {
        wrapper: wrapperStyling,
        icon: icon.styling,
        header: header.styling
    };

    return (
        <div className={styling.wrapper}>
            
            <Image 
            className={styling.icon} 
            width={50}
            height={50}
            src={icon.svg} 
            alt="" />

            <h2 className={styling.header}>{header.text}</h2>
        </div> 
    );
}