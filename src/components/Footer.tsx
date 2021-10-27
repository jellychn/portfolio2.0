import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { setPrompt, setPromptType, setFooterText, setDarkMode } from '../redux/ducks/app';

// import Linkedin from '../assets/linkedin.svg';
import GitHub from '../assets/github.svg';
import Contact from '../assets/contact.svg';
import CV from '../assets/cv.svg';
import Moon from '../assets/home/moon-light.svg';
import Sun from '../assets/home/sun-light.svg';

const Footer = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: RootState) => state.app.darkMode);
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);
    const footerText = useSelector((state: RootState) => state.app.footerText);

    const hoverTextRef = useRef<HTMLDivElement>(null);

    const onMouseOver = () => {
        if (hoverTextRef.current) {
            hoverTextRef.current.classList.add("animate-in-bottom-to-top-footer");
            hoverTextRef.current.classList.remove("animate-out-top-to-bottom-footer");
        }
    }

    const onMouseLeave = () => {
        if (hoverTextRef.current) {
            hoverTextRef.current.classList.remove("animate-in-bottom-to-top-footer");
            hoverTextRef.current.classList.add("animate-out-top-to-bottom-footer");
        }
    }
    
    return (
        <div>
            <p ref={hoverTextRef} className="hover-text" style={{color: colorConfig.highlight, textShadow: '2px 2px ' + colorConfig.secondary}}>{footerText}</p>
            <div className="App-footer-shadow">
                <div className="shadow-content" style={{boxShadow: '0px -20px 50px 80px ' + colorConfig.shadow}}>
                </div>
            </div>

            <div className="App-footer">
                <div className="content" style={{backgroundColor: colorConfig.primary,borderTop: '2px solid ' + colorConfig.secondary, borderBottom: '2px solid ' + colorConfig.secondary}}>
                    <div className="content-items">
                        {/* <div className="content-item" onMouseEnter={() => {dispatch(setFooterText('LINKED IN'));onMouseOver()}} onMouseOut={() => {dispatch(setFooterText(''));onMouseLeave()}}>
                            <a href="https://www.linkedin.com/in/jerry-chen-3235171b4" target="_blank" rel="noreferrer">
                                <img className="icon" src={Linkedin} alt={Linkedin}/>
                            </a>
                        </div> */}
                        <div className="content-item" onMouseEnter={() => {dispatch(setFooterText('GITHUB'));onMouseOver()}} onMouseOut={() => {dispatch(setFooterText(''));onMouseLeave()}}>
                            <a href="https://github.com/jellychn" target="_blank" rel="noreferrer">
                                <img className="icon" src={GitHub} alt={GitHub}/>
                            </a>
                        </div>
                        <div className="content-item" onClick={() => {dispatch(setPrompt(true)); dispatch(setPromptType('contact'))}} onMouseEnter={() => {dispatch(setFooterText('CONTACT'));onMouseOver()}} onMouseOut={() => {dispatch(setFooterText(''));onMouseLeave()}}>
                            <img className="icon" src={Contact} alt={Contact}/>
                        </div>
                        <div className="content-item" onClick={() => {dispatch(setPrompt(true)); dispatch(setPromptType('cv'))}} onMouseEnter={() => {dispatch(setFooterText('CV'));onMouseOver()}} onMouseOut={() => {dispatch(setFooterText(''));onMouseLeave()}}>
                            <img className="icon" src={CV} alt={CV}/>
                        </div>
                        <div className="content-item" onClick={() => dispatch(setDarkMode(!darkMode))} onMouseEnter={() => {dispatch(setFooterText('CLICK ME!'));onMouseOver()}} onMouseOut={() => {dispatch(setFooterText(''));onMouseLeave()}}>
                            <img className="icon" src={darkMode ? Sun:Moon} alt={darkMode ? Sun:Moon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;