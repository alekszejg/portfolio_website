import { ReactNode } from "react";

export default function StackLogoGroup(props: {children: ReactNode, id: string}) {
    return (
        <div id={props.id}>
            {props.children}
        </div>
    );
}
