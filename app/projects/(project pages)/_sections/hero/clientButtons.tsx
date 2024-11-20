"use client"
import Link from "next/link";

type ClientButtonsProps = {
    wrapperStyling: string,
    githubUrl: string,
};


export default function ClientButtons({ wrapperStyling, githubUrl }: ClientButtonsProps) {
    const styling = {
        wrapper: wrapperStyling,
        githubButton: "h-12 px-5 rounded-2xl bg-[rgb(230,230,230)] font-medium shadow-[0_0_0.1rem_grey] hover:scale-[1.02] hover:opacity-70",
        overview: {
            link: "h-12 px-5 rounded-2xl bg-[hsl(179,100%,85%)] font-medium shadow-[0_0_0.1rem_grey] hover:scale-[1.02] hover:opacity-70",
            button: "w-full h-full"
        }
    };

    
    const handleGithubRedirect = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open(githubUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={styling.wrapper}>
            
            <button className={styling.githubButton} onClick={handleGithubRedirect}>View on Github</button>
            
            <Link href="?scrollTo=overview" scroll={false} className={styling.overview.link}>
                <button className={styling.overview.button}>To project overview</button>
            </Link>

        </div>
    );
}