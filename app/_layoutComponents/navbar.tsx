"use client"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import NavList from "@/app/_layoutComponents/navList";
import '@/Styling/Layout/navbar.scss'


export default function Navbar() {
    const [burgerMenuOpened, setBurgerMenu] = useState(false); 
    
    const burgerIconRef = useRef<HTMLImageElement>(null);
    const mobileMenuRef = useRef<HTMLInputElement>(null);

    const toggleBurgerMenu = () => setBurgerMenu(!burgerMenuOpened);


    useEffect(() => {
        
        const handleClickOutside = (event: MouseEvent) => {
            if (!mobileMenuRef.current?.contains(event.target as Node) && !burgerIconRef.current?.contains(event.target as Node)) {
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
            <div id="burgerMenuIconWrapper">
                <img ref={burgerIconRef} id="burgerMenuIcon" src="/Icons/burgerMenuIcon.svg" onClick={toggleBurgerMenu} />
            </div>
            
            <div ref={mobileMenuRef} className={burgerMenuOpened ? "burgerMenuOpened navListWrapper" : "burgerMenuClosed navListWrapper"}>
                <NavList />
            </div>
        
            <div id="logoWrapper">
                <Link id="logoLink" href="/">Alexey's Portfolio</Link>
            </div>
            
            <div id="spaceFiller" />
        
        </nav>
        </>
    );
}
