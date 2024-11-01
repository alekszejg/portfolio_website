"use client"
import { useState, useRef, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import handleMessageSubmit from '@/actions/handleMessageSubmit';

export default function ContactIcon() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [popupVisible , setPopupVisibility] = useState(false);
   
    const toggleDialogie = () => {
        if (popupVisible) {
            setPopupVisibility(false);
            dialogRef.current?.close();
        } else {
            setPopupVisibility(true);
            dialogRef.current?.showModal()
        }
    }

    const [ status, setStatus ] = useState({nameError: "", emailError: "", messageError: "", submitted: false}); 
    const { nameError, emailError, messageError, submitted } = status;

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const { nameError, emailError, messageError, submitted } = await handleMessageSubmit(new FormData(event.currentTarget as HTMLFormElement));
        setStatus({nameError: nameError, emailError: emailError, messageError: messageError, submitted: submitted})
        if (submitted) {
            setPopupVisibility(false);
            setTimeout(() => {dialogRef.current?.close();}, 2000);
        }
    }
  
    return (
        <>
        <FontAwesomeIcon id="mailIcon" icon={faEnvelope} onClick={toggleDialogie} />
        <dialog id="contactPopup" ref={dialogRef}>
            <button id="closeButton" onClick={toggleDialogie}><img src="/Icons/closeIcon.svg" alt="close popup" /></button>
            <form onSubmit={handleSubmit}>
                {nameError && <p>{nameError}</p>}
                <input type="text" name="name" placeholder="Name" />
                
                {emailError && <p>{emailError}</p>}
                <input type="text" name="contactEmail" placeholder="Email (optional)" />
                
                {messageError && <p>{messageError}</p>}
                <textarea name="message" placeholder="How can I help you?" required />
                
                <button id="sendButton" type="submit"><img src="/Icons/sendMessage.svg" alt="send message" /></button>
                {submitted && <p id="submittedText">Message has been submitted</p>}
            </form>
        </dialog>
        </>
    );
}