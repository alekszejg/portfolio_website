import { ReactNode } from "react";
import Navbar from "./nav";
import Footer from "./footer";

export default function PageLayout(props: {children: ReactNode, layoutID: string}) {
    const { children, layoutID } = props;

    return (
        <>
        <Navbar />
        <main id={layoutID}>
            {children}
        </main>
        <Footer />
        </>
    )
}