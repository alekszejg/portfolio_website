import { ReactNode } from "react";
import Navbar from "./Navbar/navbar";
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