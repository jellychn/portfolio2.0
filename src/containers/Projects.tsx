import { useRef, forwardRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { setPromptType, setPrompt, setPromptItem } from '../redux/ducks/app';

import ECOMMERCE from '../assets/projects/e-commerce.svg';
import Chess from '../assets/projects/chess.svg';
import book from '../assets/projects/book.svg';
import keyboard from '../assets/projects/keyboard.svg';
import Crypto from '../assets/projects/cryptocurrency.svg';

// backend
import aws from '../assets/skills/skill-set/aws.svg';
// import graphql from '../assets/skills/skill-set/graphql.svg';
// import node from '../assets/skills/skill-set/node.svg';

// design
// import figma from '../assets/skills/skill-set/figma.svg';
// import photoshop from '../assets/skills/skill-set/phtotoshop.svg';

// languages
import dart from '../assets/skills/skill-set/dart.svg';
// import java from '../assets/skills/skill-set/java.svg';
// import javascript from '../assets/skills/skill-set/javascript.svg';
// import python from '../assets/skills/skill-set/python.svg';

// frontend
import flutter from '../assets/skills/skill-set/flutter.svg';
// import nextJS from '../assets/skills/skill-set/next-js.svg';
import react from '../assets/skills/skill-set/react.svg';
// import redux from '../assets/skills/skill-set/redux.svg';
import sass from '../assets/skills/skill-set/sass.svg';
import typescript from '../assets/skills/skill-set/typescript.svg';
import vue from '../assets/skills/skill-set/vue.svg';
// import vuetify from '../assets/skills/skill-set/vuetify.svg';


const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    const dispatch = useDispatch();
    const prevSection = useSelector((state: RootState) => state.app.workRef);
    const sectionStart = useSelector((state: RootState) => state.app.projectStartPosition);

    const sectionTitleProjectRef = useRef<HTMLDivElement>(null);
    const projectContentRef = useRef<HTMLDivElement>(null);

    let lastKnownScrollPosition;
    let inFocus = false;
    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
        if (sectionTitleProjectRef.current && projectContentRef.current) {
            if (sectionStart && prevSection) {
                if (lastKnownScrollPosition >= sectionStart - (prevSection.current.clientHeight * 0.8)) {
                    inFocus = true;
                    sectionTitleProjectRef.current.classList.add("animate-fade-in");
                    sectionTitleProjectRef.current.classList.remove("animate-fade-out");

                    projectContentRef.current.classList.add("animate-in-right-to-left");
                    projectContentRef.current.classList.remove("animate-out-left-to-right");
                } else {
                    if (inFocus) {
                        sectionTitleProjectRef.current.classList.add("animate-fade-out");
                        sectionTitleProjectRef.current.classList.remove("animate-fade-in");

                        projectContentRef.current.classList.add("animate-out-left-to-right");
                        projectContentRef.current.classList.remove("animate-in-right-to-left");
                        
                        inFocus = false;
                    }
                }
            }
        }
    })

    const projects = [
        {
            project: '',
            icon: ECOMMERCE,
            name: 'E-COMMERCE',
            description: 'e-commerce.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: '',
            status: 'IN-PROGRESS',
            git: '',
            stack: 'ReactJS',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: Chess,
            name: 'CHESS',
            description: 'Chess game using React.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://jellychn.github.io/chess/',
            status: 'COMPLETED',
            git: 'https://github.com/jellychn/chess',
            stack: 'ReactJS',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: book,
            name: 'QUOTES',
            description: 'Website/App that displays quotes from the book 366 days with Wisdom by Master Hsing Yun, the website cycles between 366 quotes changing everyday automaticly based on the date and the quote according to the book.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://jellychn.github.io/quotes/',
            status: 'COMPLETED',
            git: 'https://github.com/jellychn/quotes',
            stack: 'ReactJS . SCSS . Flutter . Dart',
            techStack: [
                react,
                sass,
                flutter,
                dart,
            ]
        },
        {
            project: '',
            icon: keyboard,
            name: 'KEYBOARD WARRIOR',
            description: 'A Website to improve typing hosted on AWS',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'http://keyboard-worrior.s3-website-ap-southeast-2.amazonaws.com/',
            status: 'COMPLETED',
            git: 'https://github.com/jellychn/keyboard-warrior',
            stack: 'VueJS . AWS',
            techStack: [
                vue,
                aws
            ]
        },
        {
            project: 'sylo',
            icon: Crypto,
            name: 'SYLO TEST',
            description: 'Front-end Cryptocurrency app tracker i made when applying for an internship back in 2019 using React Native.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: '',
            status: 'COMPLETED',
            git: 'https://github.com/jellychn/sylo-test',
            stack: 'ReactJS . TypeScript',
            techStack: [
                react,
                typescript
            ]
        },
    ];

    const projectButton = (href:string, project:string) => {
        if (href.length > 0) {
            return <button className="project-button"> <a href={href} target="_blank" rel="noreferrer"><h3>VIEW PROJECT</h3></a></button>
        } else if (project.length > 0) {
            return <button onClick={() => {dispatch(setPrompt(true)); dispatch(setPromptType('projectShowCase')); dispatch(setPromptItem(project))}} className="project-button"> <h3>VIEW PROJECT</h3></button>
        }
    };

    return (
        <div ref={ref} className="projects-container">
            <h1 ref={sectionTitleProjectRef} className="section-title">PROJECTS。</h1>
            <div ref={projectContentRef} className="project-items-container">
                {
                    projects.map(project => {
                        return (
                            <div className="project">
                                <div className="project-LHS" style={{backgroundColor: project.LHSColor}}>
                                    <h5>{project.status}</h5>
                                    <a href={project.git} target="_blank" rel="noreferrer">
                                        <h5 className="git">GITHUB</h5>
                                    </a>
                                    <div className="project-logo-container">
                                        <div className="img-container">
                                            <img src={project.icon} alt={project.icon}/>
                                        </div>
                                    </div>
                                    <p className="stack">{project.stack}</p>
                                </div>
                                <div className="project-RHS" style={{backgroundColor: project.RHSColor}}>
                                    <div className="project-info">
                                        <h2 className="project-name">{project.name}</h2>
                                        <p className="project-description">{project.description}</p>
                                        <div className="content-fill"/>
                                        {projectButton(project.demo, project.project)}
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

export default Projects;