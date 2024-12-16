import fetchRecentPosts from "@/app/_utils/fetchRecentPosts";
import Blogpost from "@/app/blog/blogpost";


type ShowRecentPostsProps = {
    wrapperStyling: string, 
    includeHeader: boolean,
    blogpostWidth: string,
}


export default async function RecentPosts(props: ShowRecentPostsProps) {
    const { wrapperStyling, includeHeader, blogpostWidth } = props;

    const styling = {
        section: wrapperStyling,
        header: "mb-4 font-medium text-xl",
        list: "flex flex-col gap-y-6",
        listItem: `${blogpostWidth} py-2 px-4 border-2 border-blogpostBorder rounded-md`
    }

    const { posts, error } = await fetchRecentPosts();

    return (
        <section className={styling.section}>
            {includeHeader && <h2 className={styling.header}>RECENT POSTS</h2>}

            {posts.length > 0 && 
            <ul className={styling.list}>
                {posts.map(post => (
                    <Blogpost key={post.id} wrapperStyling={styling.listItem} {...post} />
                ))}
            </ul>
            }

            {posts.length === 0 && <p>{error}</p>}
        </section>
    );
}