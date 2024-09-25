"use client"
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


export default function ContactIcon() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [popupVisible , setPopupVisibility] = useState(false);
   
    const toggleDialogie = () => {
        if (popupVisible) {
            setPopupVisibility(false);
            dialogRef.current?.close();
        } else {
            setPopupVisibility(false);
            dialogRef.current?.showModal()
        }
    }
    console.log("Is popup visible: ", popupVisible)
    
    

    return (
        <>
        <FontAwesomeIcon id="mailIcon" icon={faEnvelope} onClick={toggleDialogie} />
        <dialog id="contactPopup" ref={dialogRef}>
            <button id="closeButton" onClick={toggleDialogie}><img src="/Icons/closeIcon.svg" alt="close popup" /></button>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="contactInfo" placeholder="Email or phone number" />
                <textarea name="message" placeholder="How can I help you?" />
                <button id="sendButton"><img src="/Icons/sendMessage.svg" alt="send message" /></button>
            </form>
        </dialog>
        </>
    );
}