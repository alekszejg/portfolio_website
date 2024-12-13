/*"use client"

import { useState } from "react";
import Blogpost from "@/app/blog/blogpost";
import type { BlogpostType } from "@/app/blog/blogpost";


export default function LoadMorePosts({ initialPosts }: { initialPosts: BlogpostType[] }) {
    const [posts, setPosts] = useState<BlogpostType[]>(initialPosts);
    const [offset, setOffset] = useState(10);

    const viewMorePosts = async () => {
        const newOffset = offset + 10;
        setOffset(newOffset);
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts/get-recent-posts?offset=${newOffset}`);
        if (response.ok) {
            const data = await response.json();
            const newPosts: BlogpostType[] = data.recent_posts;
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
    */