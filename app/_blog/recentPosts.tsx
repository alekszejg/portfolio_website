import fetchRecentPosts from "@/app/_lib/utils/fetchRecentPosts";
import Blogpost from "@/app/_blog/blogpost";


type RecentPostsProps = {
    wrapperStyling: string, 
    includeHeader: boolean,
    blogpostWidth: string,
    showTotalCount: boolean
}


export default async function RecentPosts(props: RecentPostsProps) {
    const { wrapperStyling, includeHeader, blogpostWidth, showTotalCount } = props;

    const styling = {
        section: wrapperStyling,
        header: "hidden font-medium text-2xl tracking-wide tablet:block tablet:mb-5",
        list: "flex flex-col gap-y-6",
        listItem: `${blogpostWidth} py-2 px-4 border-2 border-blogpostBorder rounded-md`
    }

    const { total, posts, error } = await fetchRecentPosts();

    return (
        <section className={styling.section}>
            {includeHeader && <h2 className={styling.header}>RECENT POSTS {showTotalCount && <span>(total: {total})</span>}</h2>}

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