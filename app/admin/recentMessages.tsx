import fetchRecentMessages from "@/app/_utils/fetchRecentMessages";
import UserMessage from "@/app/admin/userMessage";

export default async function RecentMessages({ wrapperStyling }: {wrapperStyling: string}) {
    const { messages, error } = await fetchRecentMessages();
    
    const styling = {
        section: wrapperStyling,
        header: "mb-4 font-medium text-xl",
        list: "flex flex-col gap-y-6",
        listItem: "py-2 px-4 border-2 border-messageBorder rounded-md"
    }
    
    return (
        <section className={styling.section}>
            <h2 className={styling.header}>RECENT MESSAGES</h2>
            
            {messages.length > 0 && 
            <ul className={styling.list}>
                {messages.map(message => (
                    <UserMessage key={message.id} wrapperStyling={styling.listItem} {...message}/>
                ))}
            </ul>
            }
            
            {messages.length === 0 && <p>{error}</p>}

        </section>
    );
}