import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';


const WorkProject = () => {
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);
    const project = useSelector((state: RootState) => state.app.item);
    const prompt = useSelector((state: RootState) => state.app.prompt);


    const projectLogoRef = useRef<HTMLDivElement>(null);
    const projectBodyRef = useRef<HTMLDivElement>(null);
    const projectInfoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (projectLogoRef.current && projectBodyRef.current && projectInfoRef.current) {        
            if (prompt) {
                projectLogoRef.current.classList.add('animate-in-left-to-right');
                projectLogoRef.current.classList.remove('animate-out-right-to-left');
    
                projectBodyRef.current.classList.add('animate-fade-in');
                projectBodyRef.current.classList.remove('animate-fade-out');
    
                projectInfoRef.current.classList.add('animate-in-right-to-left');
                projectInfoRef.current.classList.remove('animate-out-left-to-right');
            } else {
                projectLogoRef.current.classList.remove('animate-in-left-to-right');
                projectLogoRef.current.classList.add('animate-out-right-to-left');
    
                projectBodyRef.current.classList.remove('animate-fade-in');
                projectBodyRef.current.classList.add('animate-fade-out');
    
                projectInfoRef.current.classList.add('animate-out-left-to-right');
                projectInfoRef.current.classList.remove('animate-in-right-to-left');
            }
        }
    
    }, [projectLogoRef, projectBodyRef, projectInfoRef, prompt]);

    let viewBtn = () => {
        if (project.url) {
            return (
                <button className="view-button">
                    <a href={project.url} target="_blank" rel="noreferrer" style={{color: project.bgColor}}>
                        <h3>VIEW PROJECT</h3>
                    </a>
                </button>
            )
        }
    }

    return (
        <div  ref={projectBodyRef} className="work-project" style={{boxShadow: '0 0 100px 30px ' + colorConfig.shadow}}>
            <div className="main" style={{backgroundColor: project.bgColor}}>
                {viewBtn()}
                <div className="content">
                    <div ref={projectLogoRef} className="content-LHS">
                        <div className="img-container">
                            <img src={project.icon} alt={project.icon}/>
                        </div>
                    </div>
                    <div ref={projectInfoRef} className="content-RHS">
                        <div className="content-fill"/>
                        <div className="info">
                            <h1>{project.title}</h1>
                            <h5>{project.subTitle}</h5>
                            <br/>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="content-fill"/>
                {
                    project.techStack.map((img:string, index:number) => {
                        return (
                            <div className="img-container" key={index}>
                                <img src={img} alt={img}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WorkProject;