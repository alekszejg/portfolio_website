"use client"
import { useState } from "react";
import Blogpost from "@/app/blog/blogpost";
import getRecentPosts, { PostType } from "@/actions/blog/getRecentPosts";

export default function RecentPosts(props: {totalPosts: bigint, recentPosts: PostType[]}) {
    
    let totalPosts: bigint | number = props.totalPosts
    props.totalPosts <= BigInt(Number.MAX_SAFE_INTEGER) && (totalPosts = Number(props.totalPosts));

    const [posts, setPosts] = useState<PostType[]>(props.recentPosts);
    const [totalPostsNumber, setTotalPostsNumber] = useState(totalPosts);
    const [offset, setOffset] = useState(10);

    const handleViewMore = async () => {
        const response = await getRecentPosts({offset: offset});
        response && setPosts(prevPosts => [...prevPosts, ...response]);
        setOffset(prevOffset => prevOffset + 10); 
    };

    return (
        <section id="recentPostsSection">
            <h2>Recent posts</h2>
            <div id="recentPostsWrapper">

            {posts.map(value => (<Blogpost key={value.id} {...value} />))}

            {posts.length < totalPostsNumber && <button onClick={handleViewMore}>View more posts (total: {totalPostsNumber})</button>}
            </div>
        </section>
    );
}