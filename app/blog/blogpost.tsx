import Image from "next/image";
import utcToLocalTime from "@/app/_lib/utils/utcToLocalTime";


export type CategoryData = {id: string, category: string};

export interface BlogpostType<T = string> {id: T; title: T; content: T; category_ID: T; created_at: Date;}
export interface BlogpostProps extends BlogpostType {wrapperStyling: string}


export default function Blogpost(props: BlogpostProps) {
    const {id, wrapperStyling, title, content, category_ID, created_at } = props;
    
    const styling = {
        wrapper: wrapperStyling,
        header: {
            wrapper: "flex items-center gap-x-[0.8rem] mb-2",
            profile: {
                wrapper: "flex items-center gap-x-2",
                imgWrapper: "w-[25px] h-[25px]",
                img: "w-full h-full object-cover",
                name: "text-sm"
            }
        },
        title: "mb-2 text-[13px] font-medium",
        text: "text-[12px]"
    }
    
    const localDateAndTime: string = utcToLocalTime(created_at); 

    return (
        <li className={styling.wrapper}>
            <div className={styling.header.wrapper}>
                
                <div className={styling.header.profile.wrapper}>
                    <div className={styling.header.profile.imgWrapper}>
                        <Image 
                        className={styling.header.profile.img}
                        width={100}
                        height={100}
                        src="/Images/myPhoto.png" 
                        alt="My Photo" />
                    </div>
                    <h3 className={styling.header.profile.name}>Alekszej Guljajev</h3>
                </div>
                <p className="createdAtInfo">at {localDateAndTime}</p>
                
            </div>
            <h4 className={styling.title}>{title}</h4>
        
            <p className={styling.text}>{content}</p>
        </li>
    );
}