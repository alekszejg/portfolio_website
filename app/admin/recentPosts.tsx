import Blogpost from "@/app/blog/blogpost";
import type { PostType } from "../api/blogposts/get-recent-posts/route";


export default async function RecentPosts() {
    const response = await fetch('http://localhost:3000/api/blogposts/get-recent-posts?offset=0');
    
    if (response.ok) {
        const data = await response.json();
        const posts: PostType[] = data.recent_posts;

        return <>{posts.map(post => (<Blogpost key={post.id} {...post} />))}</>;
    } 
    else return null;
}