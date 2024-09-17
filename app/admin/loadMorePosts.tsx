"use client"

import { useState } from "react";
import Blogpost from "../blog/blogpost";
import type { PostType } from "../api/blogposts/get-recent-posts/route";


export default function LoadMorePosts({ initialPosts }: { initialPosts: PostType[] }) {
    const [posts, setPosts] = useState<PostType[]>(initialPosts);
    const [offset, setOffset] = useState(10);

    const viewMorePosts = async () => {
        const newOffset = offset + 10;
        setOffset(newOffset);
        const response = await fetch(`http://localhost:3000/api/blogposts/get-recent-posts?offset=${newOffset}`);
        if (response.ok) {
            const data = await response.json();
            const newPosts: PostType[] = data.recent_posts;
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        }
    }

    return (
        <>
        {posts.map(post => (<Blogpost key={post.id} {...post} />))}
        <button onClick={viewMorePosts}>View more posts</button>
        </>
    );
}