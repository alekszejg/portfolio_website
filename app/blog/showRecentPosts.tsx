import Blogpost from "@/app/blog/blogpost";
import type { BlogpostType } from "@/app/blog/blogpost";


export default async function ShowRecentPosts({ wrapperStyling, blogpostWidth }: {wrapperStyling: string, blogpostWidth: string}) {
    const styling = {
        wrapper: wrapperStyling
    }

    const response = await fetch('http://localhost:3000/api/blogposts/get-recent-posts?offset=0', {cache: 'no-store'});
    if (response.ok) {
        const data = await response.json();
        const posts: BlogpostType[] = data.recent_posts;

        return (
            <div className={styling.wrapper}>
                {posts.map(post => (<Blogpost key={post.id} width={blogpostWidth} {...post} />))}
            </div>
        );
    } 
    else return null;
}