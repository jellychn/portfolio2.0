import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import cscv from '../assets/cscv.pdf';

const CV = () => {
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);

    return (
        <div className="cv" style={{boxShadow: '0 0 100px 30px ' + colorConfig.shadow}}>
            <embed src={cscv} width="100%" height="100%"></embed>
        </div>
    )
}

export default CV;