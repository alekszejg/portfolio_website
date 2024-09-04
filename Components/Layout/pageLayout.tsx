import { ReactNode } from "react";
import Navbar from "@/Components/Layout/Navbar/navbar";

export default function PageLayout(props: {children: ReactNode, layoutID: string}) {
    const { children, layoutID } = props;

    return (
        <>
        <Navbar />
        <main id={layoutID}>
            {children}
        </main>
        </>
    )
}