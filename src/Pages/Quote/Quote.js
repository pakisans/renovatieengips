import { useNavigate } from 'react-router-dom';
import strings from '../../localization';
import './quote.scss'
import emailjs from "emailjs-com";

const Quote = () => {
    
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
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='images/quote.png' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                    <div className="contact-content-form">
                        <h2>{strings.pages.quote.pageTitle}</h2>
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

export default Quote;