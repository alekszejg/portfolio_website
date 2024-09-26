import Blogpost from "@/app/blog/blogpost";
import type { PostType } from "../api/blogposts/get-recent-posts/route";


export default async function ShowRecentPosts() {
    const response = await fetch('http://localhost:3000/api/blogposts/get-recent-posts?offset=0', {cache: 'no-store'});
    
    if (response.ok) {
        const data = await response.json();
        const posts: PostType[] = data.recent_posts;

        return (
            <div id="recentPostsWrapper">
                {posts.map(post => (<Blogpost key={post.id} {...post} />))}
            </div>
        );
    } 
    else return null;
}