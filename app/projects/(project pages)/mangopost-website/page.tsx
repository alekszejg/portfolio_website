import PageLayout from '@/app/_layoutComponents/pageLayout';
import HeroSection from '@/app/projects/(project pages)/_sections/hero/heroSection';
import { allProjects } from '@/app/projects/projects.data';
import OverviewClientWrapper from '@/app/projects/(project pages)/_sections/overview/clientWrapper';
import OverviewSection from '@/app/projects/(project pages)/_sections/overview/overviewSection';
import FeaturesSection, { FeatureProps } from '@/app/projects/(project pages)/_sections/features/featuresSection';
import styling from '@/app/projects/(project pages)/styling.wrappers';


export default function MangopostWebsiteProjectPage() {
    const heroProps = {
        header: "Mangopost Website",
        text: `A bilingual static website showcasing the services offered by Mangopost in 
        both English and German, with contact options via widgets and provided information. The development 
        focused on an intuitive user interface and responsive design.`,
        imgSrc: "/Images/Project Previews/mangopostWebsite.png",
        imgAlt: "Mangopost website's homepage", 
        githubUrl: "https://github.com/alekszejg/mangopost_nextjs",
        localPath: "https://github.com/alekszejg/mangopost_nextjs"
    };

    const imageList = [
        {
            src: "/Images/Projects/Mangopost/localization.png", 
            alt: "flexible localization logic", 
            description: "Flexible localization logic which allows more translations to be added later"
        },
        {
            src: "/Images/Projects/Mangopost/visualization.png",
            alt: "visualizing complex ideas #1",
            description: "Improving and simplifying the presentation of text-heavy information through visuals"
        },
        {
            src: "/Images/Projects/Mangopost/visualization2.png",
            alt: "visualizing complex ideas #2",
            description: "Improving and simplifying the presentation of text-heavy information through visuals"
        }
    ];

    const stages = [
        {header: "Planning", text: `Before I started implementing my ideas into the Discord Bot, I had to 
            familiarize myself with couple of tutorials that explained basics of Discord.py module as well as 
            positibilities and limitations of Discord Api from reading official documentations on both Discord's 
            and Discord.py websites. The most challenging part was understanding how OOP works, which objects are
            related and can be used to obtain information on other objects.`
        },
        {header: "Development", text: `Development started with testing message content detection and making
            bot do basic interactions with user. Later I was testing bot's limitations by developing ability
            to advertise through it to current specific text channel, either current or all servers it's in. As 
            I got more confident, I implemented some mini-games along with fetching jokes/facts from Ninja API, then
            developed interactive reaction roles and Youtube music player with FFMPEG.`
        },
        {header: "Production", text: ``

        }
    ];

    return (
        <PageLayout className={styling.layout}>
            
            <HeroSection {...heroProps} />

            <OverviewClientWrapper wrapperStyling={styling.overviewSection}>
                <OverviewSection images={imageList} stages={stages} />
            </OverviewClientWrapper>

        </PageLayout>
    );
}