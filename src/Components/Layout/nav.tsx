import {Outlet, Link} from "react-router-dom";
import 'Styling/Layout/nav.scss'
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [burgerMenuOpened, setBurgerMenu] = useState(false); 
    
    const burgerIconRef = useRef<HTMLImageElement>(null);
    const mobileMenuRef = useRef<HTMLInputElement>(null);

    const toggleBurgerMenu = () => {
        setBurgerMenu(!burgerMenuOpened);
    };

    useEffect(() => {
        
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)
            && burgerIconRef.current && !burgerIconRef.current.contains(event.target as Node)) {
                setBurgerMenu(false);
            }
        }
        
        if (burgerMenuOpened) {
            document.body.classList.add("bodyDisableScroll");
            document.addEventListener('mousedown', handleClickOutside);

        } else {
            document.body.classList.remove("bodyDisableScroll");
            document.removeEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [burgerMenuOpened]);

    return (
        <>
        <nav> 
            <div id="burgerMenuArea">
                <img ref={burgerIconRef} id="burgerMenuIcon" src="/Icons/burgerMenuIcon.svg" onClick={toggleBurgerMenu} />
            </div>
            
           <div ref={mobileMenuRef} id="burgerMenu">
                <NavList id="navContentList" />
            </div>
            
            <NavList id="navContentList" />
            
            <div id="navLogoArea">
                <Link id="logoLink" to="/">Alexey's Portfolio</Link>
            </div>
            
            <div id="navFillerArea" />
        
        </nav>
        <Outlet />
        </>
    );
}

function NavList({id}: {id: string} ) {
    const dropdownLinks = [
        {id: "mainProjectLink", title: "All Projects", href: "/projects"},
        {id: "projectLink1", title: "Discord Bot", href: "/projects/discord-bot"},
        {id: "projectLink2", title: "Portfolio Website", href: "/projects/portfolio-website"}
    ];

    return (
        <ul id={id}>
            <li id="linkContainer1"><Link id="link1" className="navlink" to="/">About me</Link></li>
            <li id="linkContainer2"><Link id="link2" className="navlink" to="/projects">My projects</Link>  
                <div id="projectDropdown">
                    {dropdownLinks.map((link) => (
                      <Link className="projectLink" id={link.id} to={link.href}>{link.title}</Link>  
                    ))} 
                </div>
            </li>
            <li id="linkContainer3"><Link id="link3" className="navlink" to="/contact">Contact me</Link></li>
        </ul>
    );
}