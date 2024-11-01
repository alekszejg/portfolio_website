"use client"
import Image from 'next/image';
import { useState, useRef, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import handleMessageSubmit from '@/actions/handleMessageSubmit';

export default function ContactPopup() {
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

    const styling = {
        icon: "w-6 ml-[0.8rem] relative top-[0.1rem] hover:scale-110 hover:cursor-pointer",
        dialogue: "w-[min(400px,50%)] pt-10 px-10 pb-16 border-1 border-black box-border rounded-2xl fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
        form: {
            wrapper: "flex flex-col gap-y-6",
            input: "py-[0.6rem] px-2 rounded",
            textarea: "h-[7rem] py-[0.6rem] px-2 rounded resize-none",
            sendButton: "w-10 bg-transparent absolute bottom-2 right-1/2 hover:scale-105 hover:cursor-pointer",
            sendImg: "w-full h-full select-none"
        },
        closeButton: "w-[1.2rem] bg-transparent absolute top-2 right-2 hover:scale-105 hover:cursor-pointer",
        closeImg: "w-full h-full select-none"
    }
  
    return (
        <>
        <FontAwesomeIcon className={styling.icon} icon={faEnvelope} onClick={toggleDialogie} />
        <dialog className={styling.dialogue} ref={dialogRef}>
            <button className={styling.closeButton} onClick={toggleDialogie}>
                <Image 
                className={styling.closeImg}
                width={100}
                height={100}
                src="/Icons/closeIcon.svg" 
                alt="close popup" />
            </button>

            <form className={styling.form.wrapper} onSubmit={handleSubmit}>
                {nameError && <p>{nameError}</p>}
                <input className={styling.form.input} type="text" name="name" placeholder="Name" />
                
                {emailError && <p>{emailError}</p>}
                <input className={styling.form.input} type="text" name="contactEmail" placeholder="Email (optional)" />
                
                {messageError && <p>{messageError}</p>}
                <textarea className={styling.form.textarea} name="message" placeholder="How can I help you?" required />
                
                <button className={styling.form.sendButton} type="submit">
                    <Image 
                    className={styling.form.sendImg}
                    width={100}
                    height={100}
                    src="/Icons/sendMessage.svg" 
                    alt="send message" />
                </button>
                {submitted && <p id="submittedText">Message has been submitted</p>}
            </form>

        </dialog>
        </>
    );
}