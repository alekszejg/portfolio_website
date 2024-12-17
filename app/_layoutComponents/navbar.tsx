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
        
        const mediaQuery = window.matchMedia("(min-width: 480px)");
        const handleResize = () => {
            if (mediaQuery.matches && burgerMenuOpened) {
                bodyClasses.remove("disableBodyScroll")
                setBurgerMenu(false);
            }
        };

        handleResize();

        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);

    }, [burgerMenuOpened]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!mobileMenuRef.current?.contains(event.target as Node) && !burgerIconRef.current?.contains(event.target as Node)) {
                setBurgerMenu(prevState => {
                    if (prevState) return false; 
                    else return prevState;
                });
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [])

    const styling = {
        nav: "flex justify-between items-center max-w-[1400px] h-[3rem] relative bg-[white] ultrawide:mx-auto",
        burgerMenu: {
            button: "w-9 p-0 ml-[3%] bg-transparent border-0 tablet:hidden",
            img: "w-full h-full"
        },
        navMenu: {
            list: `${burgerMenuOpened ? "flex flex-col" : "hidden"} w-3/5 h-screen p-0 m-0 absolute top-full bg-[rgba(190,190,190,0.95)] z-50 tablet:flex tablet:flex-row tablet:gap-x-8 tablet:w-fit tablet:h-full tablet:ml-[5%] tablet:static tablet:bg-inherit`,
            listItem: "flex justify-center items-center w-full h-12 hover:bg-[rgba(150,150,150,0.7)] tablet-h-full tablet:hover:bg-inherit",
            link: "flex justify-center items-center w-full h-full text-white font-bold tracking-wider tablet:inline tablet:h-auto tablet:text-center tablet:text-nowrap tablet:text-black tablet:text-lg tablet:opacity-[0.45] tablet:hover:opacity-60"
        },
        logo: {
            link: "w-2/5 h-full tablet:w-[min(150px,20%)]",
            img: "w-full h-full"
        }
    }

    return (
        <nav className={styling.nav}> 
            <button className={styling.burgerMenu.button}>
                <Image 
                ref={burgerIconRef}
                className={styling.burgerMenu.img}
                width={0}
                height={0} 
                src="/Icons/burgerMenuIcon.svg" 
                alt="toggle mobile menu" 
                onClick={toggleBurgerMenu} />
            </button>
            
            <ul ref={mobileMenuRef} className={styling.navMenu.list}>
                <li className={styling.navMenu.listItem}>
                    <Link href={urlPaths.cv} className={styling.navMenu.link}>Interactive CV</Link>
                </li>
                <li className={styling.navMenu.listItem}>
                    <Link href={urlPaths.projects.base} className={styling.navMenu.link}>Projects</Link>
                </li>
            </ul>
        
            <Link className={styling.logo.link} href={urlPaths.homepage}>
                <Image 
                    className={styling.logo.img} 
                    width={300} 
                    height={300} 
                    src="/Images/logo.svg"
                    alt="clickable logo" />
            </Link>
        </nav>
    );
}
