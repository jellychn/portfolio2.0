import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { setPrompt } from '../redux/ducks/app';

import ContactCard from './ContactCard';
import ProjectShowcase from './ProjectShowcase';

const Prompt = () => {
    const dispatch = useDispatch();
    const prompt = useSelector((state: RootState) => state.app.prompt);
    const promptType = useSelector((state: RootState) => state.app.type);
    
    const promptRef = useRef<HTMLDivElement>(null);

    if (promptRef.current) {
        if (prompt) {
            promptRef.current.classList.add('animate-fade-in');
            promptRef.current.classList.remove('animate-fade-out');
        } else {
            promptRef.current.classList.add('animate-fade-out');
            promptRef.current.classList.remove('animate-fade-in');
        }
    }

    let promptContent = () => {
        if (promptType === 'contact') {
            return <ContactCard/>;
        } else if (promptType === 'projectShowCase') {
            return <ProjectShowcase/>;
        }
    };

    return (
        <div ref={promptRef} className="prompt" style={{display: prompt ? 'block':'none'}}>
            {promptContent()}
            <div className="prompt-tint" onClick={() => dispatch(setPrompt(false))}/>
        </div>
    )
}

export default Prompt;