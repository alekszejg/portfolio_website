import Link from 'next/link';
import { pool } from '@/postgres';
import type { PoolClient } from 'pg';
import getRecentPosts, { PostType } from '@/actions/blog/getRecentPosts';

import PageLayout from '@/Components/Layout/pageLayout';
import MyStack from '@/app/_homepage/myStack';
import RecentPosts from './admin/recentPosts';
import "@/Styling/Pages/homepage.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons';


export default async function Homepage() {
    
    let client: PoolClient | null = null;
    let recentPosts: PostType[] = []; 

    try {
        client = await pool.connect();
        recentPosts = await getRecentPosts({client: client, offset: 0});
    } catch (error: any) {
        console.error("error: ", error);
    } finally {
        client && client.release();
    }

    return (
        <PageLayout layoutID="homepageLayout">
            
            <div id="homepageProfileWrapper">
                <div id="backgroundPhotoWrapper">
                    <img src="/Images/myLogo.svg" alt="My logo in background" />
                </div>
                <div id="myPhotoWrapper">
                    <img src="/Images/myPhoto.png" alt="My Photo" />
                </div>
                
                <div id="textWrapper">
                    <h2>Alekszej Guljajev</h2>
                    <p>A self-taught programmer with BSc Economics Diploma who has been programming for a year in
                        both Python and JavaScript. My portfolio may be no so large yet, but I guarantee that I invest all my 
                        soul, passion and energy into projects I make. Currently aiming to get a job in the industry, meanwhile
                        working on new projects and improving existing ones.  
                    </p>
                    
                    <p id="location">
                        <FontAwesomeIcon id="locationIcon" icon={faLocationDot} />
                        Munich, Germany
                    </p>
                    
                    <div className="visitLinkWrapper">
                        <FontAwesomeIcon className="linkIcon" icon={faLink} />
                        <a href="https://github.com/alekszejg" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>

                    <div className="visitLinkWrapper">
                        <FontAwesomeIcon className="linkIcon" icon={faLink} />
                        <a href="https://tryhackme.com/p/alekszejg" target="_blank" rel="noopener noreferrer">TryHackMe</a>
                    </div>
                </div>

                <div id="buttonWrapper">
                    <Link href="/contact"><button>Contact</button></Link>
                    <Link href="/projects"><button>View Projects</button></Link>
                </div>

                <MyStack />

                <RecentPosts poolClient={client} recentPosts={recentPosts}/>
                
            </div>


        </PageLayout>
    )
}