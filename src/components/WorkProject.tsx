import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';


const WorkProject = () => {
    const project = useSelector((state: RootState) => state.app.item);
    const prompt = useSelector((state: RootState) => state.app.prompt);


    const projectLogoRef = useRef<HTMLDivElement>(null);
    const projectBodyRef = useRef<HTMLDivElement>(null);
    const projectInfoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (projectLogoRef.current && projectBodyRef.current && projectInfoRef.current) {        
            if (prompt) {
                projectBodyRef.current.classList.add('animate-fade-in');
                projectBodyRef.current.classList.remove('animate-fade-out');
            } else {    
                projectBodyRef.current.classList.remove('animate-fade-in');
                projectBodyRef.current.classList.add('animate-fade-out');
            }
        }
    
    }, [projectLogoRef, projectBodyRef, projectInfoRef, prompt]);

    let viewBtn = () => {
        if (project.url) {
            return (
                <button className="view-button" style={{backgroundColor: project.navigation}}>
                    <a href={project.url} target="_blank" rel="noreferrer" style={{color: project.bgColor, backgroundColor: project.navigation}}>
                        <h3>VIEW PROJECT</h3>
                    </a>
                </button>
            )
        }
    }

    return (
        <div  ref={projectBodyRef} className="work-project">
            <div className="main" style={{backgroundColor: project.bgColor}}>
                {viewBtn()}
                <div className="content">
                    <div className="info">
                        <h1>{project.title}</h1>
                        <h5>{project.subTitle}</h5>
                        <br/>
                        <p>{project.description}</p>
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