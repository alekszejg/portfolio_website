import PageLayout from '@/app/_layoutComponents/pageLayout';
import HeroSection from '@/app/projects/_reusable/heroSection';
import PreviewSection from '@/app/projects/_reusable/previewSection';
import ProjectFeaturePanel, { ImageType } from '@/app/projects/featurePanel';
import styling from '@/app/projects/styling';


export default function MangopostWebsiteProjectPage() {
    const heroProps = {
        wrapperStyling: "",
        header: "Mangopost Website",
        text: `A bilingual static website showcasing the services offered by Mangopost in 
        both English and German, with contact options via widgets and provided information. The development 
        focused on an intuitive user interface and responsive design.`,
        imgSrc: "/Images/Project Previews/mangopostWebsite.png",
        imgAlt: "Mangopost website's homepage"
    };

    return (
        <PageLayout className={styling.layout}>
            <HeroSection {...heroProps} />
        </PageLayout>
    );
}