"use client"
import Image from 'next/image';
import { useState, useRef, FormEvent } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { MailPlus, UserRound, AtSign } from 'lucide-react';
import handleMessageSubmit from '@/app/_lib/actions/handleMessageSubmit';


export default function TriggerContactForm({ iconStyling }: {iconStyling: string}) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    
    const [isVisible, setVisibility] = useState(false);
   
    const toggleDialogie = () => {
        if (isVisible) {
            setVisibility(false);
            dialogRef.current?.close();
        } else {
            setVisibility(true);
            dialogRef.current?.showModal()
        }
    }

    const [ status, setStatus ] = useState({
        nameError: "", 
        emailError: "", 
        messageError: "", 
        captchaError: "", 
        submitted: false}
    ); 
    const { nameError, emailError, messageError, captchaError, submitted } = status;
    const { executeRecaptcha } = useGoogleReCaptcha();
    
    const handleCancel = () => {
        nameRef.current && (nameRef.current.value = '');
        emailRef.current && (emailRef.current.value = '');
        messageRef.current && (messageRef.current.value = '');
        toggleDialogie()
    };


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        
        if (!executeRecaptcha) {
            console.log("Captcha can't be executed");
            return;
        }

        const recaptchaToken = await executeRecaptcha('userMessage');
        const { 
            nameError, 
            emailError, 
            messageError, 
            captchaError, 
            submitted 
        } = await handleMessageSubmit(formData, recaptchaToken);
        
        setStatus({nameError: nameError, emailError: emailError, messageError: messageError, captchaError: captchaError, submitted: submitted})
        
        if (submitted) {
            setVisibility(false);
            setTimeout(() => {dialogRef.current?.close();}, 500);
        }
    }

    const styling = {
        icon: iconStyling,
        dialogue: "px-10 py-10 box-content rounded-2xl shadow-[0_0_0.15rem_1px_grey] tablet:shadow-[0_0_0.15rem_grey]",
        closeButton: "w-[1.2rem] bg-transparent absolute top-2 right-2 hover:scale-105 hover:cursor-pointer",
        closeImg: "w-full h-full select-none",
        form: {
            wrapper: "flex flex-col gap-y-6 text-base",
            inputWrappers: "flex items-center gap-x-1.5 pl-1.5 rounded group focus-within:outline focus-within:outline-2 focus-within:outline-formInputFocused",
            icons: "w-5 text-gray-900 opacity-40 group-focus-within:opacity-60",
            input: "py-2 pr-2 rounded focus:outline-0",
            textarea: "h-[7rem] py-2 px-2 rounded resize-none focus:outline focus:outline-2 focus:outline-[grey]",
            buttons: {
                wrapper: "flex justify-end items-center gap-x-8",
                cancel: "w-fit hover:scale-105 hover:cursor-pointer",
                submit: "w-fit hover:scale-105 hover:cursor-pointer",
            },
            captchaUrl: "w-full text-urls hover:underline hover:underline-offset-2"
        },
    }
  
    return (
        <>
        <MailPlus className={styling.icon} onClick={toggleDialogie} />
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
                <div className={styling.form.inputWrappers}>
                    <UserRound className={styling.form.icons} />
                    <input ref={nameRef} className={styling.form.input} type="text" name="name" placeholder="Name" />
                </div>

                {emailError && <p>{emailError}</p>}
                <div className={styling.form.inputWrappers}>
                    <AtSign className={styling.form.icons} />
                    <input ref={emailRef} className={styling.form.input} type="text" name="contactEmail" placeholder="Email (optional)" />
                </div>
                
                {messageError && <p>{messageError}</p>}
                <textarea ref={messageRef} className={styling.form.textarea} name="message" placeholder="How can I help you?" required />
                
                {captchaError && <p>{captchaError}</p>}

                <div className={styling.form.buttons.wrapper}>
                    <button className={styling.form.buttons.cancel} onClick={handleCancel}>CANCEL</button>
                    <button className={styling.form.buttons.submit} type="submit">SUBMIT</button>
                </div>

                <small>This site is protected by reCAPTCHA and the Google  
                    <a href="https://policies.google.com/privacy" className={styling.form.captchaUrl}> Privacy Policy</a> and
                    <a href="https://policies.google.com/terms" className={styling.form.captchaUrl}> Terms of Service</a> apply.
                </small>
            
                {submitted && <p>Message has been submitted</p>}
            </form>

        </dialog>
        </>
    );
}