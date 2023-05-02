import { contactData } from './contact-data';
import Footer from './Footer';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
// require('dotenv').config()

const Contact = () => {

    return (
        <div className="contact-container">
            <h2>Get in touch!</h2>
            {/* <p>If you want to collaborate, have any questions, or just want to chat, I&apos;ll try to get back to you!</p> */}
            <div className="contact-grid">
                {contactData && contactData.map((contact) => (
                    <a className="contact-card-clickable" href={contact.link} key={contact.id}><div className="contact-card" key={contact.id}>
                    <h2>{contact.heading}</h2>
                    <i className={contact.icon}></i>
                </div></a>
                ))}
            </div>
            <br />
            <br />
            <p>Whether it&apos;s because you want to collaborate, you have some questions, just want to chat, or say hi, I&apos;ll always try to get back to you!</p>
            <Footer />
        </div>
    )
}

export default Contact;