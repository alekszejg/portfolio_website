import { useState } from "react";

export default function AccordionItem(props: {key: string; title: string; description: string}) {
    const { key, title, description } = props;    
    
    const [arrowIconStatus, setArrowIconStatus] = useState("blackArrowDownDefault");
    const [descrStatus, setDescrStatus] = useState("descrContainerHidden");
    
    const handleClick = () => {
        if (arrowIconStatus === "blackArrowDownDefault" || arrowIconStatus === "blackArrowDownBackwards") {
            setArrowIconStatus("blackArrowDownForwards");
            setDescrStatus("descrContainerVisible");
        } else {
            setArrowIconStatus("blackArrowDownBackwards");
            setDescrStatus("descrContainerHidden");
        }
    } 
    
    return (
        <li className="approachItem" onClick={handleClick} key={key}>
            {title}
            <img className={arrowIconStatus} onClick={handleClick} src="/Icons/blackArrowDown.svg" />
            <div className={descrStatus}>
                <p className="dropdownDescr">{description}</p>
            </div>
        </li>
    );
}