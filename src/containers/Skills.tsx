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
import nextJS from '../assets/skills/skill-set/next-js.svg';
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
    const sectionStart = useSelector((state: RootState) => state.app.skillsStartPosition);
    const sectionEnd = useSelector((state: RootState) => state.app.skillsEndPosition);

    const tech = [
        aws,
        graphql,
        node,
        figma,
        dart,
        java,
        javascript,
        python,
        flutter,
        nextJS,
        react,
        redux,
        sass,
        typescript,
        vue,
        vuetify,
        photoshop
    ];

    const sectionTitleSkillsRef = useRef<HTMLDivElement>(null);
    const skillsContentRef = useRef<HTMLDivElement>(null);

    let lastKnownScrollPosition;
    let inFocus = false;
    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
        if (sectionTitleSkillsRef.current && skillsContentRef.current) {
            if (sectionStart && sectionEnd) {
                if (lastKnownScrollPosition + 600 >= sectionStart && lastKnownScrollPosition <= sectionEnd) {
                    inFocus = true;
                    sectionTitleSkillsRef.current.classList.add("animate-in-left-to-right");
                    sectionTitleSkillsRef.current.classList.remove("animate-out-right-to-left");

                    skillsContentRef.current.classList.add("animate-in-right-to-left");
                    skillsContentRef.current.classList.remove("animate-out-left-to-right");
                } else {
                    if (inFocus) {
                        sectionTitleSkillsRef.current.classList.add("animate-out-right-to-left");
                        sectionTitleSkillsRef.current.classList.remove("animate-in-left-to-right");

                        skillsContentRef.current.classList.add("animate-out-left-to-right");
                        skillsContentRef.current.classList.remove("animate-in-right-to-left");
                        
                        inFocus = false;
                    }
                }
            }
        }
    })

    return (
        <div ref={ref} className="skills-container">
            <h1 ref={sectionTitleSkillsRef} className="section-title">SKILLS。</h1>
            <div className="skills-content-container" ref={skillsContentRef}>
                {
                    tech.map(img => {
                        return (
                            <div className="skills-content" key={img}>
                                <div className="skills-item" style={{backgroundColor: colorConfig.secondary}}>
                                    <div className="img-container">
                                        <img src={img} alt={img}/>
                                    </div>
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