import utcToLocalTime from "@/app/_utils/utcToLocalTime";


export interface UserMessage<T = string> {id: T; name: T; email: T; message: T; created_at: Date;};
export interface UserMessageProps extends UserMessage {wrapperStyling: string;}


export default function UserMessage(props: UserMessageProps) {
    const { wrapperStyling, id, name, email, message, created_at } = props;
    
    const styling = {
        wrapper: wrapperStyling,
        senderInfo: "text-xs opacity-60 mb-1",
        text: "text-sm"
    }
    
    const localDateAndTime: string = utcToLocalTime(created_at); 

    return (
        <li className={styling.wrapper}>

           <p className={styling.senderInfo}>
                From {name} {email && <span>| {email} |</span>} {localDateAndTime}
            </p>

           <p className={styling.text}>{message}</p>
        </li>
    );

}