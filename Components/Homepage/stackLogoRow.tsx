import { ReactNode } from "react";

export default function StackLogoRow(props: {children: ReactNode, id: string}) {
    return (
        <div id={props.id} className="techStackRow">
            {props.children}
        </div>
    );
}
