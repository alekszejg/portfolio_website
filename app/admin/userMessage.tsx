export type UserMessage = {
    id: string,
    name: string,
    email: string,
    message: string,
    created_at: string
}

export type UserMessageProps = {
    wrapperStyling: string,
    id: string,
    name: string,
    email: string,
    message: string,
    created_at: string
}

export default function UserMessage(props: UserMessageProps) {
    const { wrapperStyling, id, name, email, message, created_at } = props;
    
    const styling = {
        wrapper: wrapperStyling,
        senderInfo: "text-xs opacity-60 mb-1.5",
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
           <p className={styling.senderInfo}>Sent by {name}, at {createdAtFormatted}</p>
           <p className={styling.text}>{message}</p>
        </li>
    );

}