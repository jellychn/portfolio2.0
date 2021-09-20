import { RefObject, useRef} from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

import HomeImg from '../assets/home.svg';
import SkillsImg from '../assets/skills.svg';
import WorkImg from '../assets/work.svg';
import ProjectsImg from '../assets/projects.svg';

const Navigation = () => {
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);
    const view = useSelector((state: RootState) => state.app.view);

    const homeRef = useSelector((state: RootState) => state.app.homeRef);
    const skillsRef = useSelector((state: RootState) => state.app.skillsRef);
    const workRef = useSelector((state: RootState) => state.app.workRef);
    const projectRef = useSelector((state: RootState) => state.app.projectRef);

    const homeNavRef = useRef<HTMLDivElement>(null);
    const skillsNavRef = useRef<HTMLDivElement>(null);
    const workNavRef = useRef<HTMLDivElement>(null);
    const projectNavRef = useRef<HTMLDivElement>(null);

    const onMouseOver = (ref: RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.classList.add("animate-fade-in");
            ref.current.classList.remove("animate-fade-out");
        }
    }

    const onMouseLeave = (ref: RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.classList.remove("animate-fade-in");
            ref.current.classList.add("animate-fade-out");
        }
    }

    const scrollTo = (ref: RefObject<HTMLDivElement>, page: String) => {
        if (ref.current) {
            if (page === 'HOME') {
                window.scrollTo(0, 0)
            } else {
                window.scrollTo(0, ref.current.offsetTop + 1)
            }
        }
    }

    return (
        <div className="navigation">
            <div className="navigation-item-container">
                <div ref={homeNavRef} className="nav-info" style={{backgroundColor: colorConfig.navigation, boxShadow: '0 0 10px 10px ' + colorConfig.shadow}}>
                    <div className="img-container">
                        <img src={HomeImg} alt={HomeImg}/>
                    </div>
                    <h5>HOME</h5>
                </div>
                <div className="navigation-item" style={{backgroundColor: view === 'Hi, THERE 。' ? colorConfig.highlight:colorConfig.teriary}} onMouseEnter={() => onMouseOver(homeNavRef)} onMouseLeave={() => onMouseLeave(homeNavRef)} onClick={() => scrollTo(homeRef, 'HOME')}/>
            </div>
            <div className="navigation-item-container">
                <div ref={skillsNavRef} className="nav-info" style={{backgroundColor: colorConfig.navigation, boxShadow: '0 0 10px 10px ' + colorConfig.shadow}}>
                    <div className="img-container">
                        <img src={SkillsImg} alt={SkillsImg}/>
                    </div>
                    <h5>SKILLS</h5>
                </div>
                <div className="navigation-item" style={{backgroundColor: view === 'SKILLS 。' ? colorConfig.highlight:colorConfig.teriary}} onMouseEnter={() => onMouseOver(skillsNavRef)} onMouseLeave={() => onMouseLeave(skillsNavRef)} onClick={() => scrollTo(skillsRef, 'SKILLS')}/>
            </div>
            <div className="navigation-item-container">
                <div ref={workNavRef} className="nav-info"style={{backgroundColor: colorConfig.navigation, boxShadow: '0 0 10px 10px ' + colorConfig.shadow}}>
                    <div className="img-container">
                        <img src={WorkImg} alt={WorkImg}/>
                    </div>
                    <h5>WORK</h5>
                </div>
                <div className="navigation-item" style={{backgroundColor: view === 'WORK 。' ? colorConfig.highlight:colorConfig.teriary}} onMouseEnter={() => onMouseOver(workNavRef)} onMouseLeave={() => onMouseLeave(workNavRef)} onClick={() => scrollTo(workRef, 'WORK')}/>
            </div>
            <div className="navigation-item-container">
                <div ref={projectNavRef} className="nav-info"style={{backgroundColor: colorConfig.navigation, boxShadow: '0 0 10px 10px ' + colorConfig.shadow}}>
                    <div className="img-container">
                        <img src={ProjectsImg} alt={ProjectsImg}/>
                    </div>
                    <h5>PROJECTS</h5>
                </div>
                <div className="navigation-item" style={{backgroundColor: view === 'PROJECTS 。' ? colorConfig.highlight:colorConfig.teriary}} onMouseEnter={() => onMouseOver(projectNavRef)} onMouseLeave={() => onMouseLeave(projectNavRef)} onClick={() => scrollTo(projectRef, 'PROJECTS')}/>
            </div>
        </div>
    )
}

export default Navigation;