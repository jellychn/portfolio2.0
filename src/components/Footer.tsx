import Linkedin from '../assets/linkedin.svg';
import GitHub from '../assets/github.svg';
import Contact from '../assets/contact.svg';
import CV from '../assets/cv.svg';

const Footer = () => {
    return (
        <div>
            <p className="hover-text">GITHUB</p>
            <div className="App-footer-shadow">
                <div className="filler"/>
                <div className="shadow-content">

                </div>
                <div className="filler"/>
            </div>

            <div className="App-footer">
                <div className="filler"/>
                <div className="content">
                    <div className="content-items">
                        <div className="content-item">
                            <img className="icon" src={Linkedin}/>
                        </div>
                        <div className="content-item">
                            <img className="icon" src={GitHub}/>
                        </div>
                        <div className="content-item">
                            <img className="icon" src={Contact}/>
                        </div>
                        <div className="content-item">
                            <img className="icon" src={CV}/>
                        </div>
                    </div>
                </div>
                <div className="filler"/>
            </div>
        </div>
    )
}

export default Footer;