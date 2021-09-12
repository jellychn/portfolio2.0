
import Logo from '../assets/logo.svg';
import Moon from '../assets/home/moon.svg';

const Header = () => {
    return (
        <div>
            <div className="light-dark-mode">
                <img src={Moon}/>
            </div>
            <header className="App-header">
                <div className="flex">
                    <img className="logo" src={Logo}/>
                    <span className="space"/>
                    <h2>HI, THERE 。</h2>
                </div>
            </header>
        </div>
    );
};
  
export default Header;
  