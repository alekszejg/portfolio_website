import Blogpost from "@/app/blog/blogpost";
import type { BlogpostType } from "@/app/blog/blogpost";


type ShowRecentPostsProps = {
    wrapperStyling: string, 
    includeHeader: boolean,
    blogpostWidth: string
}


export default async function ShowRecentPosts({ wrapperStyling, includeHeader, blogpostWidth }: ShowRecentPostsProps) {
    const styling = {
        section: wrapperStyling,
        header: "mb-4",
        list: "flex flex-col gap-y-6",
        listItem: `${blogpostWidth} py-2 px-4 border-2 border-[hsl(0,0%,75%)] rounded-md box-border`
    }

    const response = await fetch('http://localhost:3000/api/blogposts/get-recent-posts?offset=0', {cache: 'no-store'});
    if (response.ok) {
        const data = await response.json();
        const posts: BlogpostType[] = data.recent_posts;

        return (
            <section className={styling.section}>
                {includeHeader && <h2 className={styling.header}>Recent posts</h2>}
                
                <ul className={styling.list}>
                    {posts.map(post => (
                        <Blogpost key={post.id} wrapperStyling={styling.listItem} {...post} />
                    ))}
                </ul>
                

            </section>
        );
    } 
    else return null;
}