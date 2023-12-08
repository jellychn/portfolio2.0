import { useRef, forwardRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { setPromptType, setPrompt, setPromptItem } from '../redux/ducks/app';

import hardware from '../assets/work/hardware.svg';
import plant from '../assets/work/plant.svg';
import hotel from '../assets/work/hotel.svg';

import tricor from '../assets/projects/tricor.png';
import law from '../assets/projects/law.png';
import ecommerce from '../assets/projects/e-commerce.svg';
import chess from '../assets/projects/chess.svg';
import book from '../assets/projects/book.svg';
import Crypto from '../assets/projects/cryptocurrency.svg';

// backend
// import aws from '../assets/skills/skill-set/aws.svg';
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
// import vue from '../assets/skills/skill-set/vue.svg';
// import vuetify from '../assets/skills/skill-set/vuetify.svg';


const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    const dispatch = useDispatch();
    const prevSection = useSelector((state: RootState) => state.app.skillsRef);
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

                    projectContentRef.current.classList.add("animate-in-left-to-right");
                    projectContentRef.current.classList.remove("animate-out-right-to-left");
                } else {
                    if (inFocus) {
                        sectionTitleProjectRef.current.classList.add("animate-fade-out");
                        sectionTitleProjectRef.current.classList.remove("animate-fade-in");

                        projectContentRef.current.classList.add("animate-out-right-to-left");
                        projectContentRef.current.classList.remove("animate-in-left-to-right");
                        
                        inFocus = false;
                    }
                }
            }
        }
    })

    const projects = [
        {
            project: '',
            icon: tricor,
            name: 'Tricor',
            description: 'Software engineer at Dave Clark. Working on the Tricor project.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://www.tricorglobal.com/',
            title: 'CAREER',
            subTitle: 'PRESENT',
            git: '',
            stack: 'ReactJS . ExpressJS . Azure',
            date: '2023',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: law,
            name: 'LawVu',
            description: 'Software engineer at LawVu working on a SASS application.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://lawvu.com/',
            title: 'CAREER',
            subTitle: 'COMPLETED',
            git: '',
            stack: 'Angular . .NET . Azure',
            date: '2022',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: ecommerce,
            name: 'E-COMMERCE',
            description: 'DynamoBD, Route 53, Amplify, Cognito, API Gateway and Lambda.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://www.yoominii.com/',
            title: 'PERSONAL PROJECT',
            subTitle: 'COMPLETED',
            git: '',
            stack: 'ReactJS . AWS',
            date: '2022',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: hardware,
            name: 'CANIT LIMITED',
            description: "This project included designing and building a landing page for CanIT Limited, the website was built using VueJS.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://www.canit.co.nz/',
            title: 'CanIT Limited.',
            subTitle: 'INFORMATION',
            git: '',
            stack: 'VueJS . Vuetify',
            date: '2019',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: hotel,
            name: 'RICCARTON MALL MOTELS',
            description: "I was the lead designer and front-end developer for this project. The technology stack used was Vue and Vuetify. During this project I had to link the web app to the booking system as well as implementing emailing and Google reCaptcha for security.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://rmm.co.nz/',
            title: 'CanIT Limited.',
            subTitle: 'HOTEL BOOKINGS',
            git: '',
            stack: 'VueJS . Vuetify',
            date: '2019',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: chess,
            name: 'CHESS',
            description: "During one afternoon decided to built a working chess game using ReactJS.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://jellychn.github.io/chess/',
            title: 'PERSONAL PROJECT',
            subTitle: 'COMPLETED',
            git: 'https://github.com/jellychn/chess',
            stack: 'ReactJS',
            date: '2019',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: book,
            name: 'QUOTES',
            description: 'Web app and companion app that displays quotes from the book 366 days with Wisdom by Master Hsing Yun, the web app cycles between 366 quotes changing everyday automatically based on the date and the quote according to the book. ReactJS was used for the web app and flutter for the app.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://jellychn.github.io/quotes/',
            title: 'PERSONAL PROJECT',
            subTitle: 'COMPLETED',
            git: 'https://github.com/jellychn/quotes',
            stack: 'ReactJS . SCSS . Flutter . Dart',
            date: '2019',
            techStack: [
                react,
                sass,
                flutter,
                dart,
            ]
        },
        {
            project: 'sylo',
            icon: Crypto,
            name: 'SYLO TEST',
            description: "Front-end Cryptocurrency app tracker I made when applying for an internship back in 2019 using React Native. I was tasked to replicate a design produced by the company's UX developers. Requesting data from a backend API and enabling light and dark themes.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: '',
            title: 'PERSONAL PROJECT',
            subTitle: 'COMPLETED',
            git: 'https://github.com/jellychn/sylo-test',
            stack: 'ReactJS . TypeScript',
            date: '2019',
            techStack: [
                react,
                typescript
            ]
        },
    ];

    const projectButton = (href:string, project:string) => {
        if (href.length > 0) {
            return <a href={href} target="_blank" rel="noreferrer"> <button className="project-button"><h3>VIEW PROJECT</h3></button></a>
        } else if (project.length > 0) {
            return <button onClick={() => {dispatch(setPrompt(true)); dispatch(setPromptType('projectShowCase')); dispatch(setPromptItem(project))}} className="project-button"> <h3>VIEW PROJECT</h3></button>
        }
    };

    const git = (link:string) => {
        if (link.length > 0) {
            return (
                <a href={link} target="_blank" rel="noreferrer">
                    <h5 className="git">GITHUB</h5>
                </a>
            )
        }
    }

    return (
        <div ref={ref} className="projects-container">
            <h1 ref={sectionTitleProjectRef} className="section-title">PROJECTS。</h1>
            <div ref={projectContentRef} className="project-items-container">
                {
                    projects.map(project => {
                        return (
                            <div className="project">
                                <div className="project-LHS" style={{backgroundColor: project.LHSColor}}>
                                    <h5>{project.title}</h5>
                                    <h6>{project.subTitle}</h6>
                                    <h3>{project.date}</h3>
                                    {git(project.git)}
                                    <div className="project-logo-container">
                                        <div className="img-container">
                                            <img src={project.icon} alt={project.icon}/>
                                        </div>
                                    </div>
                                    <h5 className="stack">{project.stack}</h5>
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