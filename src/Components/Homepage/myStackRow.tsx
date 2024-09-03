import { ReactNode } from "react";

export default function TechStackRow(props: {children: ReactNode}) {
    return (
        <div className="techStackRow">
            {props.children}
        </div>
    );
}
