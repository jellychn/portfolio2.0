import { forwardRef, useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

import Sun from '../assets/home/sun.svg';
import Moon from '../assets/home/moon.svg';
import Star from '../assets/home/star.svg';
import Cloud from '../assets/home/cloud.svg';

const Home = forwardRef<HTMLDivElement>((props, ref) => {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    const darkMode = useSelector((state: RootState) => state.app.darkMode);
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);

    const homeLogoRef = useRef<HTMLDivElement>(null);
    const homeNameRef = useRef<HTMLDivElement>(null);
    const homeDescriptionRef = useRef<HTMLDivElement>(null);

    let lastKnownScrollPosition;
    let inFocus = false;
    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
        if (homeLogoRef.current && homeNameRef.current && homeDescriptionRef.current) {
            if (lastKnownScrollPosition < 200) {
                inFocus = true;
                homeLogoRef.current.classList.add('animate-in-left-to-right');
                homeLogoRef.current.classList.remove('animate-out-right-to-left');

                homeNameRef.current.classList.add('animate-in-right-to-left');
                homeNameRef.current.classList.remove('animate-out-left-to-right');

                homeDescriptionRef.current.classList.add('animate-in-bottom-to-top');
                homeDescriptionRef.current.classList.remove('animate-out-top-to-bottom');
            } else {
                if (inFocus) {
                    homeLogoRef.current.classList.add('animate-out-right-to-left');
                    homeLogoRef.current.classList.remove('animate-in-left-to-right');
    
                    homeNameRef.current.classList.remove('animate-in-right-to-left');
                    homeNameRef.current.classList.add('animate-out-left-to-right');
    
                    homeDescriptionRef.current.classList.remove('animate-in-bottom-to-top');
                    homeDescriptionRef.current.classList.add('animate-out-top-to-bottom');

                    inFocus = false;
                }
            }
        }
    })

    const homeRef = useSelector((state: RootState) => state.app.homeRef);
    if (homeRef) {
        const centerPositionX = homeRef.current.scrollWidth / 2 || 0;
        const centerPositionY = homeRef.current.scrollHeight / 2 || 0;
    
        document.onmousemove = (event) => {
            let XPositionFromCenter = Math.abs(event.screenX - centerPositionX);
            let YPositionFromCenter = Math.abs(event.screenY - centerPositionY);
    
            if (event.screenX > centerPositionX) {
                // right
                setTranslateX(XPositionFromCenter / 100 * -1);
            } else {
                // left
                setTranslateX(XPositionFromCenter / 100);
            }
    
            if (event.screenY > centerPositionY) {
                // bottom
                setTranslateY(YPositionFromCenter / 100 * -1);
            } else {
                // top
                setTranslateY(YPositionFromCenter / 100);
            }
        }
    
    }

    let logo;
    if (darkMode) {
        logo = <div className="moon">
            <img src={Moon}/>
            <img src={Star} className="star App-logo"/>
        </div>
    } else {
        logo = <div className="sun">
            <img src={Sun} className="App-logo"/>
            <img src={Cloud} className="cloud"/>
        </div>
    }

    return (
        <div ref={ref}>
            <div className="home-content">
                <div className="content">
                    <div style={{transform: `translate(${translateX}px, ${translateY}px)`}}>
                        <div ref={homeLogoRef} className="logo-container">
                            {logo}
                        </div>
                    </div>
                    
                    <div ref={homeNameRef} className="name-container">
                        <p className="hello">HELLO, I'M</p>
                        <h1 className="name">JERRY,</h1>
                        <h1 className="description">AND I'M A DEVELOPER。</h1>
                    </div>

                    <p ref={homeDescriptionRef} className="sub-description">
                        <span className="sub-description-1" style={{color: colorConfig.highlight, textShadow: '2px 2px ' + colorConfig.secondary}}>FULLSTACK DEVELOPER。</span><br/>
                        <span className="sub-description-2" style={{color: colorConfig.highlight, textShadow: '2px 2px ' + colorConfig.secondary}}>PASSION FOR DESIGN。</span>
                    </p>
                </div>
            </div>
        </div>
    )
})

export default Home;