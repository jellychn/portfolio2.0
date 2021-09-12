import CanIT from '../assets/work/canit.png';
import MaoProduce from '../assets/work/mao-produce.png';
import FreshIsBest from '../assets/work/fresh-is-best.png';
import WigramClouds from '../assets/work/wigram-clouds.png';

import flutter from '../assets/skills/skill-set/flutter.svg';
import nextJS from '../assets/skills/skill-set/next-js.svg';

const Work = () => {
    const workProjects = [
        {
            icon: CanIT,
            title: 'CANIT LIMITED',
            subTitle: 'INFORMATION',
            bgColor: '#700000',
            techStack: [
                flutter,
                nextJS
            ]
        },
        {
            icon: CanIT,
            title: 'CANIT LIMITED',
            subTitle: 'BACKEND SYSTEM',
            bgColor: '#700000',
            techStack: [
                flutter,
                nextJS
            ]
        },
        {
            icon: MaoProduce,
            title: 'MAO PRODUCE',
            subTitle: 'LANDING PAGE',
            bgColor: '#3A9821',
            techStack: [
                flutter,
                nextJS
            ]
        },
        {
            icon: FreshIsBest,
            title: 'FRESH IS BEST',
            subTitle: 'E-COMMERCE',
            bgColor: '#F4840C',
            techStack: [
                flutter,
                nextJS
            ]
        },
        {
            icon: WigramClouds,
            title: 'WIGRAM CLOUDS',
            subTitle: 'E-COMMERCE',
            bgColor: '#950CF7',
            techStack: [
                flutter,
                nextJS
            ]
        },
        {
            icon: CanIT,
            title: 'RICCARTON MALL MOTELS',
            subTitle: 'HOTEL BOOKING',
            bgColor: '#950CF7',
            techStack: [
                flutter,
                nextJS
            ]
        },
    ];

    return (
        <div className="work-container">
            <h1 className="section-title">WORK。</h1>
            <div className="work-item-container">
            {
                workProjects.map(project => {
                    return (
                        <div className="work-item-outter">
                            <div className="work-item">
                                <div className="work-item-content" style={{backgroundColor: project.bgColor}}>
                                    <div className="content">
                                        <div className="img-container">
                                            <img src={project.icon}/>
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
};

export default Work;