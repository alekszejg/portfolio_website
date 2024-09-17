export default async function DisplayTotalPosts() {
    let totalPosts = 0;

    const response = await fetch('http://localhost:3000/api/blogposts/total');
    if (response.ok) {
        const data = await response.json();
        totalPosts = parseInt(data.totalPosts, 10);
        console.log(`total posts is currently ${totalPosts}`)
    } else {
        console.error("Failed to fetch total posts", response.statusText);
    }
    
    return <span>(total: {totalPosts})</span>;
}