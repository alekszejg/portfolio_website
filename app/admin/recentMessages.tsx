import "server-only";
import fetchRecentMessages from "@/app/_utils/fetchRecentMessages";


export default async function RecentMessages() {
    const { messages, error } = await fetchRecentMessages();

    return (
        <section>
            <h2>Recent Messages</h2>
            {messages.length > 0 && 
            <ul>
                {messages.map(message => (
                    <li key={message.id}>{message.message}</li>
                ))}
            </ul>
            }
            
            {messages.length === 0 && <p>{error}</p>}
        </section>
    );
}