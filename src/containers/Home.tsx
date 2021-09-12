import Sun from '../assets/home/sun.svg';

const Home = () => {
    return (
        <div>
            <div className="home-content">
                <div className="content">
                    <div className="App-logo">
                        <img src={Sun}/>
                    </div>
                    <p className="hello">HELLO, I'M</p>
                    <h1 className="name">JERRY,</h1>
                    <h1 className="description">AND I'M A DEVELOPER。</h1>

                    <p className="sub-description">
                        <span className="sub-description-1">FULLSTACK DEVELOPER。</span><br/>
                        <span className="sub-description-2">PASSION FOR DESIGN。</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;