import { useRef, forwardRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { setPrompt, setPromptType, setPromptItem } from '../redux/ducks/app';

import CanIT from '../assets/work/canit.png';
import MaoProduce from '../assets/work/mao-produce.png';
import FreshIsBest from '../assets/work/fresh-is-best.png';
import WigramClouds from '../assets/work/wigram-clouds.png';
import RMM from '../assets/work/RMM.png';

// backend
import aws from '../assets/skills/skill-set/aws.svg';
// import graphql from '../assets/skills/skill-set/graphql.svg';
// import node from '../assets/skills/skill-set/node.svg';

// design
// import figma from '../assets/skills/skill-set/figma.svg';
// import photoshop from '../assets/skills/skill-set/phtotoshop.svg';

// languages
// import dart from '../assets/skills/skill-set/dart.svg';
// import java from '../assets/skills/skill-set/java.svg';
// import javascript from '../assets/skills/skill-set/javascript.svg';
// import python from '../assets/skills/skill-set/python.svg';

// frontend
import flutter from '../assets/skills/skill-set/flutter.svg';
// import nextJS from '../assets/skills/skill-set/next-js.svg';
// import react from '../assets/skills/skill-set/react.svg';
// import redux from '../assets/skills/skill-set/redux.svg';
// import sass from '../assets/skills/skill-set/sass.svg';
// import typescript from '../assets/skills/skill-set/typescript.svg';
import vue from '../assets/skills/skill-set/vue.svg';
import vuetify from '../assets/skills/skill-set/vuetify.svg';


const Work = forwardRef<HTMLDivElement>((props, ref) => {
    const dispatch = useDispatch();
    const sectionStart = useSelector((state: RootState) => state.app.workStartPosition);
    const sectionEnd = useSelector((state: RootState) => state.app.workEndPosition);

    const sectionTitleWorkRef = useRef<HTMLDivElement>(null);
    const workContentRef = useRef<HTMLDivElement>(null);

    let lastKnownScrollPosition;
    let inFocus = false;
    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
        if (sectionTitleWorkRef.current && workContentRef.current) {
            if (sectionStart && sectionEnd) {
                if (lastKnownScrollPosition >= sectionStart && lastKnownScrollPosition <= sectionEnd) {
                    inFocus = true;
                    sectionTitleWorkRef.current.classList.add("animate-in-left-to-right");
                    sectionTitleWorkRef.current.classList.remove("animate-out-right-to-left");

                    workContentRef.current.classList.add("animate-in-right-to-left");
                    workContentRef.current.classList.remove("animate-out-left-to-right");
                } else {
                    if (inFocus) {
                        sectionTitleWorkRef.current.classList.add("animate-out-right-to-left");
                        sectionTitleWorkRef.current.classList.remove("animate-in-left-to-right");


                        workContentRef.current.classList.add("animate-out-left-to-right");
                        workContentRef.current.classList.remove("animate-in-right-to-left");
                        
                        inFocus = false;
                    }
                }
            }
        }
    })

    const workProjects = [
        {
            icon: CanIT,
            title: 'CANIT LIMITED',
            subTitle: 'INFORMATION',
            description: 'CanIT Limited landing page.',
            bgColor: '#700000',
            url: 'https://www.canit.co.nz/',
            techStack: [
                vue,
                vuetify,
                aws
            ]
        },
        {
            icon: CanIT,
            title: 'CANIT LIMITED',
            subTitle: 'BACKEND SYSTEM',
            description: 'CanIT backend system uses CRUD to store, edit and delete hardware repair jobs, with functionalities to track the device history and automatic email and SMS message sending.',
            bgColor: '#700000',
            url: null,
            techStack: [
                vue,
                vuetify,
                aws,
                flutter
            ]
        },
        {
            icon: MaoProduce,
            title: 'MAO PRODUCE',
            subTitle: 'LANDING PAGE',
            description: 'Landing page for a local Christchurch veggie producer.',
            bgColor: '#3A9821',
            url: 'https://www.maoproduce.co.nz/',
            techStack: [
                vue,
                vuetify
            ]
        },
        {
            icon: FreshIsBest,
            title: 'FRESH IS BEST',
            subTitle: 'E-COMMERCE',
            description: 'e-commerce website for a local Christchurch grocery store, using stripe for online payment.',
            bgColor: '#F4840C',
            url: 'https://www.freshisbest.kiwi/',
            techStack: [
                vue, 
                vuetify,
                aws
            ]
        },
        {
            icon: WigramClouds,
            title: 'WIGRAM CLOUDS',
            subTitle: 'E-COMMERCE',
            description: 'e-commerce website for a local Christchurch vape store, using Wind Cave API for online payment.',
            bgColor: '#950CF7',
            url: 'https://wigramclouds.co.nz/index.php?route=common/home',
            techStack: [
                vue, 
                vuetify,
                aws
            ]
        },
        {
            icon: RMM,
            title: 'RICCARTON MALL MOTELS',
            subTitle: 'HOTEL BOOKING',
            description: 'Hotel booking website for a local Christchurch motel.',
            bgColor: '#105E30',
            url: 'https://rmm.co.nz/',
            techStack: [
                vue, 
                vuetify,
            ]
        },
    ];

    return (
        <div ref={ref} className="work-container">
            <h1 ref={sectionTitleWorkRef} className="section-title">WORK。</h1>
            <div ref={workContentRef} className="work-item-container">
            {
                workProjects.map(project => {
                    return (
                        <div className="work-item-outter">
                            <div className="work-item" onClick={() => {dispatch(setPrompt(true)); dispatch(setPromptType('workProject')); dispatch(setPromptItem(project))}}>
                                <div className="work-item-content" style={{backgroundColor: project.bgColor}}>
                                    <div className="content">
                                        <div className="img-container">
                                            <img src={project.icon} alt={project.icon}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-item-name" style={{backgroundColor: project.bgColor}}>
                                        <h3>{project.title}</h3>
                                        <p>{project.subTitle}</p>
                                    </div>
                                <div className='work-item-footer'>
                                    <div className="tech-stack">
                                        <div className="content-fill"/>
                                        {
                                            project.techStack.map(img => {
                                                return (
                                                    <div className="img-container">
                                                        <img src={img} alt={img}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
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

export default Work;