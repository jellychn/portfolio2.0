import resume from '../assets/resume.pdf';

const CV = () => {
    return (
        <div className="cv">
            <embed src={resume} width="100%" height="100%"></embed>
        </div>
    )
}

export default CV;