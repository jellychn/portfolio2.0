import Backend from '../assets/skills/backend.svg';
import Design from '../assets/skills/design.svg';
import Languages from '../assets/skills/languages.svg';
import Frontend from '../assets/skills/frontend.svg';


// backend
import aws from '../assets/skills/skill-set/aws.svg';
import graphql from '../assets/skills/skill-set/graphql.svg';
import node from '../assets/skills/skill-set/node.svg';

// design
import figma from '../assets/skills/skill-set/figma.svg';
import photoshop from '../assets/skills/skill-set/phtotoshop.svg';

// languages
import dart from '../assets/skills/skill-set/dart.svg';
import java from '../assets/skills/skill-set/java.svg';
import javascript from '../assets/skills/skill-set/javascript.svg';
import python from '../assets/skills/skill-set/python.svg';

// frontend
import flutter from '../assets/skills/skill-set/flutter.svg';
import nextJS from '../assets/skills/skill-set/next-js.svg';
import react from '../assets/skills/skill-set/react.svg';
import redux from '../assets/skills/skill-set/redux.svg';
import sass from '../assets/skills/skill-set/sass.svg';
import typescript from '../assets/skills/skill-set/typescript.svg';
import vue from '../assets/skills/skill-set/vue.svg';
import vuetify from '../assets/skills/skill-set/vuetify.svg';



const Skills = () => {
    const tech = [
        aws,
        graphql,
        node,
        figma,
        dart,
        java,
        javascript,
        python,
        flutter,
        nextJS,
        react,
        redux,
        sass,
        typescript,
        vue,
        vuetify 
    ];

    return (
        <div className="skills-container">
            <h1 className="section-title">SKILLS。</h1>
            {
                tech.map(img => {
                    return (
                        <div className="skills-content" key={img}>
                            <div className="skills-item">
                                <div className="img-container">
                                    <img src={img}/>
                                </div>
                            </div>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default Skills;