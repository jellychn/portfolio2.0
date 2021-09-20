import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

const CV = () => {
    const cscv =  require('../assets/cscv.pdf');
    const colorConfig = useSelector((state: RootState) => state.app.colorConfig);

    return (
        <div className="cv" style={{boxShadow: '0 0 100px 30px ' + colorConfig.shadow}}>
            <embed src={cscv} type="application/pdf"/>
            {/* <iframe src={cscv} width="100%" height="100%"/> */}
            {/* <object data={cscv} type="application/pdf" width="100%" height="100%"/> */}
        </div>
    )
}

export default CV;