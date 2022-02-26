import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import strings from "../../localization";
import './contact.scss'
import emailjs from "emailjs-com";

const Contact = () => {

    const navigate = useNavigate();
    const navigate2 = useNavigate();

    const handleNavigate = () => {
        navigate('/quote')
    }

    const handleContact = () => {
        navigate2('/contact')
    }
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_m1ue9ng', 'my_temp', e.target, 'user_uCqQelVAUMLLVhGpel8Ap')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <main id='main'>
            <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.contact.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='images/image4.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                    <div className="contact-info-cards">
                        
                        <div className="info-card-details">
                            <div className="info-card-content">
                                <h2>{strings.pages.contact.contact}</h2>
                                <p>
                                    <a>{strings.pages.contact.contactCard.phone}</a>
                                    <br/>
                                    <a href='mailto:gipsplaatrenovatie@gmail.com'>{strings.pages.contact.contactCard.email}</a> 
                                </p>

                                <p>
                                    <strong>
                                        <a>
                                            {strings.pages.contact.contactCard.address}
                                        </a>
                                    </strong>
                                </p>
                            </div>
                            <a onClick={handleContact} className="btn-grey">
                                {strings.pages.contact.pageTitle}
                            </a>
                        </div>
                        
                        <div className="info-card-cta">
                            <div className="info-card-content">
                                <h3>{strings.pages.contact.contactCard.requestQuote}</h3>
                                <div className="info-card-content2">
                                    <p>{strings.pages.contact.contactCard.quoteDesc}</p>
                                </div>
                            </div>
                            <a onClick={handleNavigate} className="btn-grey">
                                {strings.pages.contact.contactCard.requestQuote}
                            </a>
                        </div>

                    </div>
                    <div className="contact-content-form">
                        <h2>{strings.pages.contact.contactForm}</h2>
                        <div className="contact-form-wraper">
                                <form onSubmit={sendEmail} className="contact-form">
                                    <p>
                                        <span className="form-name">
                                            <input placeholder={strings.pages.contact.form.name} name="name" required />
                                        </span>
                                        <br/>
                                        <span className="form-email">
                                            <input placeholder={strings.pages.contact.form.email} name="email" required />
                                        </span>
                                        <br/>
                                        <span className="form-phone">
                                            <input placeholder={strings.pages.contact.form.phone} name="phone" required />
                                        </span>
                                        <br/>
                                        <span className="form-address">
                                            <input placeholder={strings.pages.contact.form.address} name="address" required />
                                        </span>
                                        <br/>
                                        <span className="form-description">
                                            <textarea placeholder={strings.pages.contact.form.description} name="description" aria-required="true" cols="40" rows="10">
                                            </textarea>
                                        </span>
                                        <br/>
                                        <input type="submit" className="submit-button" value={strings.pages.contact.form.submit}>
                                        </input>
                                    </p>
                                </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact;