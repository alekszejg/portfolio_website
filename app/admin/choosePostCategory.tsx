import type { CategoryData } from "@/app/api/blogposts/all-categories/route";


export default async function ChoosePostCategory() {
    const response = await fetch('http://localhost:3000/api/blogposts/all-categories');
    if (response.ok) {
        const data = await response.json();
        return (
            <select name="category"><option value={undefined} />
            {data.allCategories.map((category: CategoryData) => (
                <option key={category.id} value={category.id}>{category.category}</option>
            ))}
            </select>
        );
    } else return null;
}

