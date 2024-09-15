import fetchAllPostID from "@/actions/blog/fetchAllPostID";
import fetchPostByID from "@/actions/blog/fetchPostByID";
import Blogpost from "../blogpost";

export async function generateStaticParams() {
    const ids = await fetchAllPostID();
    return ids;
}


export default async function BlogpostPage({params}: {params: {postID: string}}) {
    const postData = await fetchPostByID(params.postID);
    if (postData) return <Blogpost {...postData} />;
    else return null;
}