import React from 'react';
import Form from "./form";

function Contact() {
    return (
        <header className="section-header contact-header" >
            <h2 className="section-h2">Contact Me</h2>
            <div className="contact-question">Have a question? Fill out the form and I will make sure to get back to you!</div>
            <Form></Form>
        </header>
    );
}

export default Contact; 