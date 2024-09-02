import { Link } from "react-router-dom";
import DropdownMenu from "./dropdownMenu";

export default function NavList() {
    
    const mainLinks = [
        {title: "My CV", href: "/cv"},
        {title: "My Projects", href: "/projects"},
        {title: "Contact", href: "/contact"}
    ];

    return (
        <ul id="navList">
            
            {mainLinks.map((link, index) => (
                <li id={`linkWrapper${index + 1}`} className="linkWrapper">
                    
                    {link.title === "My Projects" ? 
                    <>
                    <Link id={`link${index + 1}`} className="navlink" to={link.href}>{link.title}</Link> 
                    <DropdownMenu /> 
                    </>
                    :
                    <Link id={`link${index + 1}`} className="navlink" to={link.href}>{link.title}</Link>
                    }

                </li>
            ))}

        </ul>
    );
}

