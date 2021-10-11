import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';

import Logo from '../assets/logo.svg';
import LogoDark from '../assets/logo-dark.svg'

const Header = () => {
    const darkMode = useSelector((state: RootState) => state.app.darkMode);
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);
    const view = useSelector((state: RootState) => state.app.view);

    return (
        <div>
            <header className="App-header" style={{backgroundColor: colorConfig.primary}}>
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
  