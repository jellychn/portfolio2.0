import Logo from '../assets/work/canit.png';

import vue from '../assets/skills/skill-set/vue.svg';
import vuetify from '../assets/skills/skill-set/vuetify.svg';

const WorkProject = () => {
    return (
        <div className="work-project">
            <div className="main">
            <button className="view-button">
                    <h3>VIEW PROJECT</h3>
                </button>
                <div className="content">
                    <div className="content-LHS">
                        <div className="img-container">
                            <img src={Logo}/>
                        </div>
                    </div>
                    <div className="content-RHS">
                        <div className="content-fill"/>
                        <div className="info">
                            <h1>NAME。</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non. Similique maxime quisquam nulla harum officiis ullam eveniet quia accusamus voluptatum, quos quo fuga, suscipit doloribus eius! Quasi, exercitationem eum?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="content-fill"/>
                <div className="img-container">
                    <img src={vue}/>
                </div>
                <div className="img-container">
                    <img src={vuetify}/>
                </div>
            </div>
        </div>
    )
}

export default WorkProject;