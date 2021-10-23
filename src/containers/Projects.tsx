import { useRef, forwardRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { setPromptType, setPrompt, setPromptItem } from '../redux/ducks/app';

import hardware from '../assets/work/hardware.svg';
import system from '../assets/work/system.svg';
import plant from '../assets/work/plant.svg';
import veggie from '../assets/work/veggie.svg';
import vape from '../assets/work/vape.svg';
import hotel from '../assets/work/hotel.svg';

import ecommerce from '../assets/projects/e-commerce.svg';
import language from '../assets/projects/language.svg';
import chess from '../assets/projects/chess.svg';
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
            icon: hardware,
            name: 'CANIT LIMITED',
            description: "During this project I was tasked with another work colleague to design and revamp the old CanIT Limited informational web app, a hardware repair specialist company. Figma was used for designing the wireframing and mockup of the web app. The technology stack for this web app was VueJS and Vuetify.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://www.canit.co.nz/',
            title: 'CanIT Limited.',
            subTitle: 'INFORMATION',
            git: '',
            stack: 'VueJS . Vuetify',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: system,
            name: 'CANIT LIMITED',
            description: "CanIT Limited backend system is an inventory, device logging, tracking system. The main purpose of this system was to create hardware repair jobs while logging hundreds of user data and thousands of device data. This System had a frontend web app using VueJS and Vuetify, a companion app using Flutter and a backend cloud GraphQL API and database all using AWS. It uses multiple services from AWS such as user authentication and user pools from (AWS cognito), realtime updates (AWS AppSync) as well as AWS hosting (Route 52). During this project I was the lead developer for the frontend web app as well as helping the backend developer with data structuring and implementing AWS lambda functions and resolvers. I was also tasked with building an automatic SMS sending server used by multiple services in the company. The automatic SMS server was built using a Raspberry PI, attached to it and a 4G Hat for connecting to the network. I programmed a flask server to handle the SMS request traffic and stored all SMS messages on to a local SQLite database. I then used AT commands to send out the messages to the customers when required. During implementation I had to ensure that the down time for this system was keeped to a minimum. Therefore I set the server to boot on device start up using the linux systemd commands. Security was also taken into consideration and hashing algorithms were used to ensure the sender was a valid trusted sender.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: '',
            title: 'CanIT Limited.',
            subTitle: 'BACKEND SYSTEM',
            git: '',
            stack: 'VueJS . Vuetify . AWS . Flutter',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: plant,
            name: 'MAO PRODUCE',
            description: "Mao Produce is a local veggie producer. During this project I was tasked in designing and implementation of the landing page. The technologies used were VueJS and Vuetify.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://www.maoproduce.co.nz/',
            title: 'CanIT Limited.',
            subTitle: 'LANDING PAGE',
            git: '',
            stack: 'VueJS . Vuetify',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: veggie,
            name: 'FRESH IS BEST',
            description: "Fresh Is Best is a local produce distribution and grocery store. The scope of this project was to build a functioning e-commerce web app linked to a payment gateway. In this project I handled adding, updating and deletion of the products to the cart as well as the processing of the payment gateway. Strip was used for online payment for this project.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://www.freshisbest.kiwi/',
            title: 'CanIT Limited.',
            subTitle: 'E-COMMERCE',
            git: '',
            stack: 'VueJS . Vuetify . AWS',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: vape,
            name: 'WIGRAM CLOUDS',
            description: "Wigram Clouds is a local vape store. The scope of this project was to build a functioning e-commerce web app linked to a payment gateway. In this project I handled adding, updating and deletion of the products to the cart as well as the processing of the payment gateway. WindCave was used for online payment for this project.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://wigramclouds.co.nz/',
            title: 'CanIT Limited.',
            subTitle: 'E-COMMERCE',
            git: '',
            stack: 'VueJS . Vuetify . AWS',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: hotel,
            name: 'RICCARTON MALL MOTELS',
            description: "Riccarton Mall Motels is a local Motel company, and I was the lead designer and front-end developer for this project. The technology stack used was Vue and Vuetify. During this project I had to link the web app to the booking system as well as implementing emailing and Google reCaptcha to prevent bots.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://rmm.co.nz/',
            title: 'CanIT Limited.',
            subTitle: 'HOTEL BOOKINGS',
            git: '',
            stack: 'VueJS . Vuetify',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: ecommerce,
            name: 'E-COMMERCE',
            description: 'IN-Progress.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: '',
            title: 'PERSONAL PROJECT',
            subTitle: 'IN-PROGRESS',
            git: '',
            stack: 'ReactJS',
            techStack: [
                react
            ]
        },
        {
            project: '',
            icon: language,
            name: 'LANGUAGE',
            description: "I developed a language web app for language learning. The system allows users to add, update and delete any english + romanized + native language record to a local SQLite database as well as to choose what language to group this record by. I also implemented mini games to aid with language learning such as cycling through the database randomly for the user to identify the words and characters in various ways using flash card methods to typing out the words and characters.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: '',
            title: 'PERSONAL PROJECT',
            subTitle: 'COMPLETED',
            git: '',
            stack: 'VueJS . Vuetify . SQLite',
            techStack: [
            ]
        },
        {
            project: '',
            icon: chess,
            name: 'CHESS',
            description: "As a side project I programmed a fully working chess game using ReactJS.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://jellychn.github.io/chess/',
            title: 'PERSONAL PROJECT',
            subTitle: 'COMPLETED',
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
            description: 'Web app and companion app that displays quotes from the book 366 days with Wisdom by Master Hsing Yun, the web app cycles between 366 quotes changing everyday automatically based on the date and the quote according to the book. ReactJS was used for the web app and flutter for the app.',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'https://jellychn.github.io/quotes/',
            title: 'PERSONAL PROJECT',
            subTitle: 'COMPLETED',
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
            name: 'KEYBOARD',
            description: "A keyboard game I programmed to help improve typing speed. It randomly generates random strings for the user to correctly type. Hosted on AWS.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: 'http://keyboard-worrior.s3-website-ap-southeast-2.amazonaws.com/',
            title: 'PERSONAL PROJECT',
            subTitle: 'COMPLETED',
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
            description: "Front-end Cryptocurrency app tracker I made when applying for an internship back in 2019 using React Native. I was tasked to replicate a design produced by the company's UX developers. Requesting data from a backend API and enabling light and dark themes.",
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            demo: '',
            title: 'PERSONAL PROJECT',
            subTitle: 'COMPLETED',
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