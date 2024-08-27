import NavMenu from 'Components/Layout/nav';
import Footer from 'Components/Layout/footer';
import 'Styling/mainPagesStyles/contactForm.scss';
import { useState, useEffect, ChangeEvent } from 'react';



function ContactForm() {
    const [formNow, setForm] = useState({
        fname: "",
        lname: "",
        message: "",
        contactMail: "",
        contactPhone: ""
    })
    
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...formNow, [name]: value
        }));
    }

    const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...formNow, [name]: value
        }));
    }

    const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
    }

    
    return (
        <div id="formContainer">
            <NavMenu />
            <div id="spacer1" />
            <p id="contactDescr">Are there any questions you would like to ask, or perhaps discuss anything? 
                Please send me a message in the form below and I will respond as soon as I can. 
            </p> 
            <div id="spacer2" />
            
            <form> 
                <div className="contactDetails">
                    <label className="contactLabel" id="fnameLabel">First name:<br />
                        <input type="text" id="fnameInput" className="inputField" name="fname" value={formNow.fname} onChange={handleInput} />
                    </label>

                    <label className="contactLabel" id="lnameLabel">Last name:<br />
                        <input type="text" id="lnameInput" className="inputField" name="lname" value={formNow.lname} onChange={handleInput} /> 
                    </label>
                </div>
                
                <div id="messageContainer">
                    <label id="messageLabel">Send me a message:<br />
                        <textarea id="messageInput" name="message" value={formNow.message} required onChange={handleTextArea} />
                    </label>
                </div>
                
                <div className="contactDetails">
                    <label className="contactLabel" id="contactMailLabel">(Optional) Your email:<br />
                        <input type="text" id="mailInput" className="inputField" name="contactMail" value={formNow.contactMail} onChange={handleInput} /> 
                    </label>
                    <label className="contactLabel" id="contactPhoneLabel">(Optional) Your phone:<br />
                        <input type="text" id="phoneInput" className="inputField" name="contactPhone" value={formNow.contactPhone} onChange={handleInput} />
                    </label>
                </div>
                
                <input type="submit" id="submitButton" value="Submit" />
            </form>
            <div id="spacer3" />
            <Footer />
        </div>
    );
}

export default ContactForm;