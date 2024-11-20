"use client"
import Link from "next/link";

type ClientButtonsProps = {
    wrapperStyling: string,
    githubUrl: string,
};


export default function ClientButtons({ wrapperStyling, githubUrl }: ClientButtonsProps) {
    const styling = {
        wrapper: wrapperStyling,
    };

    
    const handleGithubRedirect = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open(githubUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={styling.wrapper}>
            
            <button onClick={handleGithubRedirect}>View on Github</button>
            
            <Link href="?scrollTo=overview" scroll={false}>
                <button>To project overview</button>
            </Link>

        </div>
    );
}