import ShowRecentPosts from "../admin/showRecentPosts";

export default function RecentPosts(props: {hasHeader: boolean}) {
    return (
        <section id="recentPostsSection">
            {props.hasHeader && <h2>Recent posts</h2>}
            <ShowRecentPosts />
        </section>
    );
}