import Link from "next/link";

export default function NavList() {
    const links = [
        {title: "Interactive CV", href: "/interactive-cv"},
        {title: "Projects", href: "/projects"},
    ];

    return (
        <ul id="navList">
            {links.map((link, index) => (
                <li key={`linkWrapper${index + 1}`} id={`linkWrapper${index + 1}`} className="linkWrapper">
                    <Link id={`link${index + 1}`} className="navlink" href={link.href}>{link.title}</Link>
                </li>
            ))}
        </ul>
    );
}

