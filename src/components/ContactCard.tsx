import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

import Avatar from '../assets/avatar.svg';
import Contact from '../assets/contact.svg';
import Phone from '../assets/phone.svg';

const ContactCard = () => {
    const prompt = useSelector((state: RootState) => state.app.prompt);

    const contactCardRef = useRef<HTMLDivElement>(null);

    if (contactCardRef.current) {
        if (prompt) {
            contactCardRef.current.classList.add('animate-fade-in');
            contactCardRef.current.classList.remove('animate-fade-out');
        } else {
            contactCardRef.current.classList.remove('animate-fade-in');
            contactCardRef.current.classList.add('animate-fade-out');
        }
    }

    return (
        <div ref={contactCardRef} className="contact-card">
            <div className="contact-card-LHS">
                <div className="avatar">
                    <img src={Avatar} alt={Avatar}/>
                </div>
            </div>
            <div className="contact-card-RHS">
                <div className="contact-header">
                    <h4>CONTACT CARD</h4>
                </div>
                <div className="contact-main">
                    <div className="content-main-content">
                        <h1>JERRY CHEN</h1>
                        <h2>DEVELOPER</h2>
                    </div>
                </div>
                <div className="contact-footer">
                    <div className="content-fill"/>
                    <div className="img-container">
                        <a href="mailto: jchen123.862@gmail.com">
                            <img src={Contact} alt={Contact}/>
                        </a>
                    </div>
                    <div className="img-container">
                        <a href="tel:+640210620879">
                            <img src={Phone} alt={Phone}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;