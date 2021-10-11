import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

import left from '../assets/left.svg';
import right from '../assets/right.svg';

import SYimg0 from '../assets/projects/sylo-project/light-display.png';
import SYimg1 from '../assets/projects/sylo-project/light-view.png';
import SYimg2 from '../assets/projects/sylo-project/dark-display.png';
import SYimg3 from '../assets/projects/sylo-project/dark-view.png';


const ProjectShowcase = () => {
    let [index, setIndex] = useState(0);
    const project = useSelector((state: RootState) => state.app.item);

    const projects:any = {
        sylo: [
            SYimg0,
            SYimg1,
            SYimg2,
            SYimg3
        ]
    }

    const carouselLength = projects[project].length;
    const next = () => {
        if (index === carouselLength - 1) {
            setIndex(0);
        } else {
            setIndex(index += 1);
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(carouselLength - 1);
        } else {
            setIndex(index -= 1);
        }
    }

    return (
        <div className="project-showcase">
            <h2>{project.toUpperCase()} PROJECT</h2>
            <div className="carousel">
                <div className="arrow" onClick={prev}>
                    <img src={left} alt={left}/>
                </div>
                <div className="content-fill"/>
                <div className="arrow" onClick={next}>
                    <img src={right} alt={right}/>
                </div>
            </div>
            <div className="img-container">
                <img src={projects[project][index]} alt={projects[project][index]}/>
            </div>
        </div>
    )
}

export default ProjectShowcase;