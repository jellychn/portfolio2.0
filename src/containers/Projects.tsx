import img from '../assets/projects/keyboard.svg';

import flutter from '../assets/skills/skill-set/flutter.svg';
import nextJS from '../assets/skills/skill-set/next-js.svg';


const Projects = () => {
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
        <div className="projects-container">
            <h1 className="section-title">PROJECTS。</h1>
            <div className="project-items-container">
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
}

export default Projects;