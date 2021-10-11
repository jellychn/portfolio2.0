import {useRef, forwardRef} from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';


// backend
import aws from '../assets/skills/skill-set/aws.svg';
import graphql from '../assets/skills/skill-set/graphql.svg';
import node from '../assets/skills/skill-set/node.svg';

// design
import figma from '../assets/skills/skill-set/figma.svg';
import photoshop from '../assets/skills/skill-set/photoshop.svg';

// languages
import dart from '../assets/skills/skill-set/dart.svg';
import java from '../assets/skills/skill-set/java.svg';
import javascript from '../assets/skills/skill-set/javascript.svg';
import python from '../assets/skills/skill-set/python.svg';

// frontend
import flutter from '../assets/skills/skill-set/flutter.svg';
// import nextJS from '../assets/skills/skill-set/next-js.svg';
import react from '../assets/skills/skill-set/react.svg';
import redux from '../assets/skills/skill-set/redux.svg';
import sass from '../assets/skills/skill-set/sass.svg';
import typescript from '../assets/skills/skill-set/typescript.svg';
import vue from '../assets/skills/skill-set/vue.svg';
import vuetify from '../assets/skills/skill-set/vuetify.svg';

interface SkillsProps {
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);
    const prevSection = useSelector((state: RootState) => state.app.homeRef);
    const sectionStart = useSelector((state: RootState) => state.app.skillsStartPosition);
    const sectionEnd = useSelector((state: RootState) => state.app.skillsEndPosition);

    const techFrontend = [
        {
            logo: react,
            name: 'ReactJS'
        },
        {
            logo: redux,
            name: 'Redux'
        },
        {
            logo: vue,
            name: 'VueJS'
        },
        {
            logo: vuetify,
            name: 'Vuetify'
        },
        {
            logo: flutter,
            name: 'Flutter'
        },
        {
            logo: sass,
            name: 'SASS'
        },
        {
            logo: figma,
            name: 'Figma'
        },
        {
            logo: photoshop,
            name: 'PhotoShop'
        },
    ];

    const techBackend = [
        {
            logo: aws,
            name: 'AWS'
        },
        {
            logo: graphql,
            name: 'GraphQL'
        },
        {
            logo: node,
            name: 'NodeJS'
        },
    ];

    const techLang = [
        {
            logo: javascript,
            name: 'JavaScript'
        },
        {
            logo: python,
            name: 'GraphQL'
        },
        {
            logo: java,
            name: 'Java'
        },
        {
            logo: dart,
            name: 'Dart'
        },
        {
            logo: typescript,
            name: 'TypeScript'
        },
    ];


    const sectionTitleSkillsRef = useRef<HTMLDivElement>(null);
    const skillsContentRefFE = useRef<HTMLDivElement>(null);
    const skillsContentRefBE = useRef<HTMLDivElement>(null);
    const skillsContentRefLang = useRef<HTMLDivElement>(null);

    let lastKnownScrollPosition;
    let inFocus = false;
    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
        if (sectionTitleSkillsRef.current && skillsContentRefFE.current && skillsContentRefBE.current && skillsContentRefLang.current) {
            if (sectionStart && sectionEnd && prevSection) {
                if (lastKnownScrollPosition >= sectionStart - (prevSection.current.clientHeight * 0.8) && lastKnownScrollPosition <= sectionEnd) {
                    inFocus = true;
                    sectionTitleSkillsRef.current.classList.add("animate-in-left-to-right");
                    sectionTitleSkillsRef.current.classList.remove("animate-out-right-to-left");

                    skillsContentRefFE.current.classList.add("animate-in-right-to-left");
                    skillsContentRefFE.current.classList.remove("animate-out-left-to-right");

                    skillsContentRefBE.current.classList.add("animate-in-right-to-left");
                    skillsContentRefBE.current.classList.remove("animate-out-left-to-right");

                    skillsContentRefLang.current.classList.add("animate-in-right-to-left");
                    skillsContentRefLang.current.classList.remove("animate-out-left-to-right");
                } else {
                    if (inFocus) {
                        sectionTitleSkillsRef.current.classList.add("animate-out-right-to-left");
                        sectionTitleSkillsRef.current.classList.remove("animate-in-left-to-right");

                        skillsContentRefFE.current.classList.add("animate-out-left-to-right");
                        skillsContentRefFE.current.classList.remove("animate-in-right-to-left");

                        skillsContentRefBE.current.classList.add("animate-out-left-to-right");
                        skillsContentRefBE.current.classList.remove("animate-in-right-to-left");

                        skillsContentRefLang.current.classList.add("animate-out-left-to-right");
                        skillsContentRefLang.current.classList.remove("animate-in-right-to-left");
                        
                        inFocus = false;
                    }
                }
            }
        }
    })

    return (
        <div ref={ref} className="skills-container">
            <h1 ref={sectionTitleSkillsRef} className="section-title">SKILLS。</h1>
            <div className="skills-content-container" ref={skillsContentRefFE}>
                {
                    techFrontend.map(tech => {
                        return (
                            <div className="skills-content" key={tech.name}>
                                <div className="skills-item" style={{backgroundColor: colorConfig.secondary}}>
                                    <div className="img-container">
                                        <img src={tech.logo} alt={tech.logo}/>
                                    </div>
                                    <h4>{tech.name}</h4>
                                </div>
                            </div> 
                        )
                    })
                }
            </div>
            <div className="skills-content-container" ref={skillsContentRefBE}>
                {
                    techBackend.map(tech => {
                        return (
                            <div className="skills-content" key={tech.logo}>
                                <div className="skills-item" style={{backgroundColor: colorConfig.secondary}}>
                                    <div className="img-container">
                                        <img src={tech.logo} alt={tech.logo}/>
                                    </div>
                                    <h4>{tech.name}</h4>
                                </div>
                            </div> 
                        )
                    })
                }
            </div>
            <div className="skills-content-container" ref={skillsContentRefLang}>
                {
                    techLang.map(tech => {
                        return (
                            <div className="skills-content" key={tech.logo}>
                                <div className="skills-item" style={{backgroundColor: colorConfig.secondary}}>
                                    <div className="img-container">
                                        <img src={tech.logo} alt={tech.logo}/>
                                    </div>
                                    <h4>{tech.name}</h4>
                                </div>
                            </div> 
                        )
                    })
                }
            </div>
        </div>
    )
})

export default Skills;