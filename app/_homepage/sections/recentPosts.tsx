import ShowRecentPosts from "@/app/admin/showRecentPosts";

export default function RecentPosts(props: {hasHeader: boolean}) {
    const styling = {
        section: "py-12 box-border",
        header: "mb-4"
    }

    
    return (
        <section className={styling.section}>
            {props.hasHeader && <h2 className={styling.header}>Recent posts</h2>}
            <ShowRecentPosts />
        </section>
    );
}