import Avatar from '../assets/avatar.svg';
import Contact from '../assets/contact.svg';
import Phone from '../assets/phone.svg';

const ContactCard = () => {
    return (
        <div className="contact-card">
            <div className="contact-card-LHS">
                <div className="avatar">
                    <img src={Avatar}/>
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
                        <img src={Contact}/>
                    </div>
                    <div className="img-container">
                        <img src={Phone}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;