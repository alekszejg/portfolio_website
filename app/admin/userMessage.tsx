export interface UserMessage<T = string> {id: T; name: T; email: T; message: T; created_at: T;};
export interface UserMessageProps extends UserMessage {wrapperStyling: string;}


export default function UserMessage(props: UserMessageProps) {
    const { wrapperStyling, id, name, email, message, created_at } = props;
    
    const styling = {
        wrapper: wrapperStyling,
        senderInfo: "text-xs opacity-60 mb-1",
        text: "text-sm"
    }
    
    const createdAtLocal = new Date(created_at.toLocaleString());
    const dateFormat = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // no AM or PM
    });

    const createdAtFormatted = dateFormat.format(createdAtLocal); 

    return (
        <li className={styling.wrapper}>

           <p className={styling.senderInfo}>
                From {name} {email && <span>| {email} |</span>} {createdAtFormatted}
            </p>

           <p className={styling.text}>{message}</p>
        </li>
    );

}