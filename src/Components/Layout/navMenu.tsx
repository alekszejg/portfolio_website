import {Outlet, Link} from "react-router-dom";
import '../../Styling/pageLayoutStyles/navMenu.scss'
import burgerMenuIcon from '../../Icons/burgerMenuIcon.svg'
import React, { useState, useEffect, useRef } from 'react';

function NavMenu() {
    const [mobileOpened, setOpenClosed] = useState(false); 
    const burgerIconRef = useRef<HTMLImageElement>(null);
    const navMenuRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        setOpenClosed(!mobileOpened);
    };

    useEffect(() => {
        
        const handleClickOutside = (event: MouseEvent) => {
            if(navMenuRef.current && !navMenuRef.current.contains(event.target as Node)
            && burgerIconRef.current && !burgerIconRef.current.contains(event.target as Node)) {
                setOpenClosed(false);
            }
        }
        
        if (mobileOpened) {
            document.body.classList.add("bodyDisableScroll");
            document.addEventListener('mousedown', handleClickOutside);

        } else {
            document.body.classList.remove("bodyDisableScroll");
            document.removeEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [mobileOpened]);

   
    const [device, setDevice] = useState(() => {
        return window.innerWidth > 480 ? "desktop" : "mobile";
    })

    const mobileMediaQuery = window.matchMedia("(max-width: 480px)");
    const desktopMediaQuery = window.matchMedia("(min-width: 480px");
    
    useEffect(() => {
        const handleMobileMediaQuery = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setDevice(prevState => {
                    return "mobile";
                });
            }
        };
        
        mobileMediaQuery.onchange = handleMobileMediaQuery;

        const handleDesktopMediaQuery = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setDevice(prevState => {
                    return "desktop";
                });
            }   
        };

        desktopMediaQuery.onchange = handleDesktopMediaQuery;
        
        return () => {
            mobileMediaQuery.removeEventListener('change', handleMobileMediaQuery);
            desktopMediaQuery.removeEventListener('change', handleDesktopMediaQuery);
        };

    }, []);
    
    
    return (
        <>
        <nav> 
            <div id="burgerMenuArea">
                <img ref={burgerIconRef} id="burgerMenuIcon" src={burgerMenuIcon} onClick={handleClick} />
            </div>
            
            {device === "mobile" && mobileOpened === false && <div id="burgerMenuClosed" />}
            
            {device === "mobile" && mobileOpened === true && <div ref={navMenuRef} id="burgerMenuOpened"><NavList id="navContentList" /></div>}
            
            {device === "desktop" && <NavList id="navContentList" />}
            
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
    return (
        <ul id={id}>
            <li id="linkContainer1"><Link id="link1" className="navlink" to="/">About me</Link></li>
            <li id="linkContainer2"><Link id="link2" className="navlink" to="/projects">My projects</Link>
                <div id="projectDropdown">
                    <Link className="projectLink" id="mainProjectLink" to="/projects">All Projects</Link>
                    <Link className="projectLink" id="projectLink1" to="/projects/discord-bot">Discord Bot</Link>
                    <Link className="projectLink" id="projectLink2" to="/projects/this-website">This Website</Link>  
                </div>
            </li>
            <li id="linkContainer3"><Link id="link3" className="navlink" to="/contact">Contact me</Link></li>
        </ul>
    );
}

export default NavMenu;