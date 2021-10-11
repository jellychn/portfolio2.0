import cscv from '../assets/cscv.pdf';

const CV = () => {
    return (
        <div className="cv">
            <embed src={cscv} width="100%" height="100%"></embed>
        </div>
    )
}

export default CV;