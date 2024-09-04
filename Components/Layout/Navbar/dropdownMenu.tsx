import Link from "next/link";

export default function DropdownMenu() {
    
    const links = [
        {id: "mainProjectLink", title: "All Projects", href: "/projects"},
        {id: "projectLink1", title: "Discord Bot", href: "/projects/discord-bot"},
        {id: "projectLink2", title: "Portfolio Website", href: "/projects/portfolio-website"}
    ];

    return (
        <div id="projectDropdown">
            
            {links.map(link => (
                <Link className="projectLink" id={link.id} href={link.href}>{link.title}</Link>
            ))}

        </div>
    );
}