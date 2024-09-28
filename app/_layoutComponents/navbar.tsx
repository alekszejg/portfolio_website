"use client"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import '@/app/_layoutComponents/Styling/navbar.scss'


export default function Navbar() {
    const [burgerMenuOpened, setBurgerMenu] = useState(false); 
    
    const toggleBurgerMenu = () => setBurgerMenu(!burgerMenuOpened);
   
    const burgerIconRef = useRef<HTMLImageElement>(null);
    const mobileMenuRef = useRef<HTMLUListElement>(null);
    
    useEffect(() => {
        if (burgerMenuOpened) {
            document.body.classList.add("disableScroll");
        } else {
            document.body.classList.remove("disableScroll");
        }
    }, [burgerMenuOpened]);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!mobileMenuRef.current?.contains(event.target as Node) && !burgerIconRef.current?.contains(event.target as Node)) {
                setBurgerMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [])

    const links = [
        {title: "Interactive CV", href: "/interactive-cv"},
        {title: "Projects", href: "/projects"},
    ];

    return (
        <nav> 
            <button id="burgerMenuButton">
                <img ref={burgerIconRef} src="/Icons/burgerMenuIcon.svg" alt="toggle mobile menu" onClick={toggleBurgerMenu} />
            </button>
            
            <ul className={burgerMenuOpened ? "navList burgerMenuOpened" : "navList burgerMenuClosed"} ref={mobileMenuRef}>
                {links.map((link, index) => (
                    <li key={`linkWrapper${index + 1}`}>
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        
            <Link id="logoLink" href="/"><img src="" alt="logo" /></Link>
        </nav>
    );
}
