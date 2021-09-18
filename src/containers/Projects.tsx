import { useRef, forwardRef } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';


import img from '../assets/projects/keyboard.svg';

import flutter from '../assets/skills/skill-set/flutter.svg';
import nextJS from '../assets/skills/skill-set/next-js.svg';


const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);
    const sectionStart = useSelector((state: RootState) => state.app.projectStartPosition);

    const sectionTitleProjectRef = useRef<HTMLDivElement>(null);
    const projectContentRef = useRef<HTMLDivElement>(null);

    let lastKnownScrollPosition;
    let inFocus = false;
    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
        if (sectionTitleProjectRef.current && projectContentRef.current) {
            if (sectionStart) {
                if (lastKnownScrollPosition >= sectionStart && lastKnownScrollPosition) {
                    inFocus = true;
                    sectionTitleProjectRef.current.classList.add("animate-in-left-to-right");
                    sectionTitleProjectRef.current.classList.remove("animate-out-right-to-left");

                    projectContentRef.current.classList.add("animate-in-right-to-left");
                    projectContentRef.current.classList.remove("animate-out-left-to-right");
                } else {
                    if (inFocus) {
                        sectionTitleProjectRef.current.classList.add("animate-out-right-to-left");
                        sectionTitleProjectRef.current.classList.remove("animate-in-left-to-right");

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
            icon: img,
            name: 'PROJECT NAAME',
            description: 'PROJECT DESCRIPTION',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            techStack: [
                flutter,
                nextJS
            ]
        },
        {
            icon: img,
            name: 'PROJECT NAAME',
            description: 'PROJECT DESCRIPTION',
            LHSColor: 'aquamarine',
            RHSColor: 'white',
            techStack: [
                flutter,
                nextJS
            ]
        }
    ];

    return (
        <div ref={ref} className="projects-container">
            <h1 ref={sectionTitleProjectRef} className="section-title">PROJECTS。</h1>
            <div ref={projectContentRef} className="project-items-container">
                {
                    projects.map(project => {
                        return (
                            <div className="project">
                                <div className="project-LHS" style={{backgroundColor: project.LHSColor}}>
                                    <div className="img-container">
                                        <img src={project.icon}/>
                                    </div>
                                </div>
                                <div className="project-RHS" style={{backgroundColor: project.RHSColor}}>
                                    <div className="project-info">
                                        <h2 className="project-name">{project.name}</h2>
                                        <p className="project-description">{project.description}</p>
                                        <button className="project-button"><h3>VIEW PROJECT</h3></button>
                                        <div className="content-fill"/>
                                        <div className="tech-stack">
                                            <div className="content-fill"/>
                                            {
                                                project.techStack.map(img => {
                                                    return (
                                                        <div className="stack">
                                                            <img src={img}/>
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

export default Projects;