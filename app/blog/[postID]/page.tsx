import Blogpost from "../blogpost";

export async function generateStaticParams() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts/get-all-post-ids`);
    
    if (response.ok) {
        const data = await response.json();
        return data.post_ids;
    } else {
        console.error("Failed to fetch total posts", response.statusText);
    }
}


export default async function BlogpostPage(props: {params: Promise<{postID: string}>}) {
    const params = await props.params;
    console.log("parameter is ", params.postID)
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts/post-data?postID=${params.postID}`);

    if (response.ok) {
        const data = await response.json();
        return <Blogpost {...data.postData} />
    } else return null;
}