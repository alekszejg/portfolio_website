"use client"
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import urlPaths from '@/app/url.paths';

export default function Navbar() {
    const [burgerMenuOpened, setBurgerMenu] = useState(false); 
    const toggleBurgerMenu = () => setBurgerMenu(!burgerMenuOpened);
   
    const burgerIconRef = useRef<HTMLImageElement>(null);
    const mobileMenuRef = useRef<HTMLUListElement>(null);
    
    useEffect(() => {
        const bodyClasses = document.body.classList;
        burgerMenuOpened ? bodyClasses.add("disableBodyScroll") : bodyClasses.remove("disableBodyScroll")
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

    const styling = {
        nav: "flex justify-between items-center max-w-[1400px] h-[3rem] relative bg-[white] ultrawide:mx-auto",
        burgerMenuButton: "h-[1.6rem] p-0 mx-[0.6rem] bg-transparent border-0 tablet:hidden",
        burgerMenuImg: "w-full h-full",
        navListMobile: burgerMenuOpened ? "flex flex-col w-3/5 h-screen p-0 m-0 absolute top-full bg-[rgba(190,190,190,0.95)]" : "hidden",
        navListPC: "tablet:flex tablet:flex-row tablet:w-[30%] tablet:h-full tablet:ml-[1rem] tablet:static tablet:bg-inherit",
        navListItem: "flex justify-center items-center w-full h-[3rem] hover:bg-[rgba(150,150,150,0.7)] tablet-h-full",
        navLink: "flex justify-center items-center w-full h-full text-white font-medium tracking-wider tablet:inline tablet:h-auto tablet:text-center tablet:text-nowrap tablet:text-black tablet:text-[1.1rem] tablet:opacity-50",
        logoLink: "w-2/5 h-full tablet:w-[min(150px,20%)]",
        logoImg: "w-full h-full"
    }

    return (
        <nav className={styling.nav}> 
            <button className={styling.burgerMenuButton}>
                <Image 
                ref={burgerIconRef}
                className={styling.burgerMenuImg}
                width={0}
                height={0} 
                src="/Icons/burgerMenuIcon.svg" 
                alt="toggle mobile menu" 
                onClick={toggleBurgerMenu} />
            </button>
            
            <ul className={`${styling.navListMobile} ${styling.navListPC}`}>
                <li className={styling.navListItem}>
                    <Link href={urlPaths.cv} className={styling.navLink}>Interactive CV</Link>
                </li>
                <li className={styling.navListItem}>
                    <Link href={urlPaths.projects.base} className={styling.navLink}>Projects</Link>
                </li>
            </ul>
        
            <Link className={styling.logoLink} href="/">
                <Image 
                    className={styling.logoImg} 
                    width={0} 
                    height={0} 
                    src="" 
                    alt="logo" />
            </Link>
        </nav>
    );
}
