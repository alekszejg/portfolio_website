import type { PostType } from "../api/blogposts/get-recent-posts/route";
import "@/Styling/blogpostStyle.scss";

export default function Blogpost(props: PostType) {
    const {id, title, content, category_ID, created_at } = props;
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
        <div className="blogpost">
            <div className="headerWrapper">
                <div className="profileWrapper">
                    <div className="profileImgWrapper">
                        <img src="/Images/myPhoto.png" alt="My Photo" />
                    </div>
                    <h3>Alekszej Guljajev</h3>
                </div>
                <p className="createdAtInfo">at {createdAtFormatted}</p>
                
            </div>
            <h4>{title}</h4>
        
            <p className="content">{content}</p>
        </div>
    );
}