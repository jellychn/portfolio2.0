import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { setPrompt, setPromptType, setFooterText } from '../redux/ducks/app';

import Linkedin from '../assets/linkedin.svg';
import GitHub from '../assets/github.svg';
import Contact from '../assets/contact.svg';
import CV from '../assets/cv.svg';

const Footer = () => {
    const dispatch = useDispatch();
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
            <div className="App-footer-shadow" style={{boxShadow: '0px -80px 100px 150px ' + colorConfig.primary}}>
                <div className="filler" style={{backgroundColor: colorConfig.primary}}/>
                <div className="shadow-content" style={{boxShadow: '0px -50px 100px 80px ' + colorConfig.shadow}}>

                </div>
                <div className="filler" style={{backgroundColor: colorConfig.primary}}/>
            </div>

            <div className="App-footer">
                <div className="filler" style={{backgroundColor: colorConfig.primary}}/>
                <div className="content" style={{backgroundColor: colorConfig.primary,borderTop: '2px solid ' + colorConfig.secondary, borderBottom: '2px solid ' + colorConfig.secondary}}>
                    <div className="content-items">
                        <div className="content-item" onMouseEnter={() => {dispatch(setFooterText('LINKED IN'));onMouseOver()}} onMouseOut={() => {dispatch(setFooterText(''));onMouseLeave()}}>
                            <a href="https://www.linkedin.com/in/jerry-chen-3235171b4" target="_blank">
                                <img className="icon" src={Linkedin}/>
                            </a>
                        </div>
                        <div className="content-item" onMouseEnter={() => {dispatch(setFooterText('GITHUB'));onMouseOver()}} onMouseOut={() => {dispatch(setFooterText(''));onMouseLeave()}}>
                            <a href="https://github.com/jellychn" target="_blank">
                                <img className="icon" src={GitHub}/>
                            </a>
                        </div>
                        <div className="content-item" onClick={() => {dispatch(setPrompt(true)); dispatch(setPromptType('contact'))}} onMouseEnter={() => {dispatch(setFooterText('CONTACT'));onMouseOver()}} onMouseOut={() => {dispatch(setFooterText(''));onMouseLeave()}}>
                            <img className="icon" src={Contact}/>
                        </div>
                        <div className="content-item" onClick={() => {dispatch(setPrompt(true)); dispatch(setPromptType('cv'))}} onMouseEnter={() => {dispatch(setFooterText('CV'));onMouseOver()}} onMouseOut={() => {dispatch(setFooterText(''));onMouseLeave()}}>
                            <img className="icon" src={CV}/>
                        </div>
                    </div>
                </div>
                <div className="filler" style={{backgroundColor: colorConfig.primary}}/>
            </div>
        </div>
    )
}

export default Footer;