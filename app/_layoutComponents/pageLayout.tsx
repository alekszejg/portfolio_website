import { ReactNode } from "react";
import Navbar from "@/app/_layoutComponents/navbar";


export default function PageLayout(props: {children: ReactNode, className: string}) {
    const { children, className } = props;

    return (
        <>
        <Navbar />
        <main className={className}>
            {children}
        </main>
        </>
    )
}