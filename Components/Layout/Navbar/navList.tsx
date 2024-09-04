import Link from "next/link";

export default function NavList() {
    const mainLinks = [
        {title: "My CV", href: "/cv"},
        {title: "My Projects", href: "/projects"},
        {title: "Contact", href: "/contact"}
    ];

    return (
        <ul id="navList">
            
            {mainLinks.map((link, index) => (
                <li key={`linkWrapper${index + 1}`} id={`linkWrapper${index + 1}`} className="linkWrapper">
                    <Link id={`link${index + 1}`} className="navlink" href={link.href}>{link.title}</Link>
                </li>
            ))}

        </ul>
    );
}

