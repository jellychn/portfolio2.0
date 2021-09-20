import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from '../redux/ducks/app';
import { RootState } from '../redux/configureStore';

import Logo from '../assets/logo.svg';
import LogoDark from '../assets/logo-dark.svg'
import Moon from '../assets/home/moon-light.svg';
import Sun from '../assets/home/sun-light.svg';

const Header = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: RootState) => state.app.darkMode);
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);
    const view = useSelector((state: RootState) => state.app.view);

    return (
        <div>
            <div className="light-dark-mode" onClick={() => dispatch(setDarkMode(!darkMode))} 
                style={{
                    backgroundColor: colorConfig.navigation,
                    boxShadow: '-10px 10px ' + colorConfig.teriary
                }}>
                <img src={darkMode ? Sun:Moon} alt="timeOfDay"/>
            </div>
            <header className="App-header">
                <div className="flex">
                    <img className="logo" src={darkMode ? LogoDark:Logo} alt="logo"/>
                    <span className="space"/>
                    <h2 style={{color: colorConfig.navigation}}>{view}</h2>
                </div>
            </header>
        </div>
    );
};
  
export default Header;
  