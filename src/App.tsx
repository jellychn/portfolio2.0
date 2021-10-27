import { useRef, useEffect } from 'react';
import './App.scss';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/configureStore';

import { 
  setView, 
  setHomePositions,
  setSkillsPositions,
  setProjectPositions
} from './redux/ducks/app';

import Prompt from './components/Prompt';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './containers/Home';
import Skills from './containers/Skills';
import Projects from './containers/Projects';

function App() {
  window.scrollTo(0,0);
  const colorConfig = useSelector((state: RootState) => state.app.colorConfig);
  const dispatch = useDispatch();


  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const homeScrollHeight = homeRef.current?.scrollHeight || 0;
    const skillsScrollHeight = skillsRef.current?.scrollHeight || 0;

    document.addEventListener('scroll', function(e) {
      let lastKnownScrollPosition = window.scrollY;

      if (lastKnownScrollPosition >= 0 && lastKnownScrollPosition <= homeScrollHeight) {
        dispatch(setView("HI, THERE 。"));
      } else if (lastKnownScrollPosition >= homeScrollHeight && lastKnownScrollPosition <= homeScrollHeight + skillsScrollHeight) {
        dispatch(setView("SKILLS 。"));
      } else if (lastKnownScrollPosition > homeScrollHeight + skillsScrollHeight) {
        dispatch(setView("PROJECTS 。"));
      }
    });

    dispatch(setHomePositions({ref: homeRef, startPosition: 0, endPosition: homeScrollHeight}));
    dispatch(setSkillsPositions({ref: skillsRef, startPosition: homeScrollHeight, endPosition: homeScrollHeight + skillsScrollHeight}));
    dispatch(setProjectPositions({ref: projectsRef, startPosition: homeScrollHeight + skillsScrollHeight}));
  }, [homeRef, skillsRef, projectsRef, dispatch]);

  return (
    <div className="App" style={{backgroundColor: colorConfig.primary}}>
      <Prompt/>
      <Header/>
      <div className="container">
        <Navigation/>
        <Home ref={homeRef}/>
        <Skills ref={skillsRef}/>
        <Projects ref={projectsRef}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
