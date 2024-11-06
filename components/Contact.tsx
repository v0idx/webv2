import { contactData } from './contact-data';
import Footer from './Footer';
import React from 'react';

const Contact = () => {

    return (
        <div className="contact-container">
            <h2>Get in touch!</h2>
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
            <p>Whether it&apos;s because you want to collaborate, you have some questions, or just say hi, I&apos;ll always try to get back to you!</p>
        </div>
    )
}

export default Contact;