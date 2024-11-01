import Blogpost from "@/app/blog/blogpost";
import type { BlogpostType } from "@/app/blog/blogpost";


export default async function ShowRecentPosts({ width }: { width: string}) {
    const response = await fetch('http://localhost:3000/api/blogposts/get-recent-posts?offset=0', {cache: 'no-store'});
    
    if (response.ok) {
        const data = await response.json();
        const posts: BlogpostType[] = data.recent_posts;

        return (
            <div id="recentPostsWrapper">
                {posts.map(post => (<Blogpost key={post.id} width={width} {...post} />))}
            </div>
        );
    } 
    else return null;
}