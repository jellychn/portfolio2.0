import React from 'react';
import './App.scss';

import Prompt from './components/Prompt';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './containers/Home';
import Skills from './containers/Skills';
import Work from './containers/Work';
import Projects from './containers/Projects';

function App() {
  return (
    <div className="App">
      {/* <Prompt/> */}
      <Header/>
      <div className="container">
        <Navigation/>
        <Home/>
        <Skills/>
        <Work/>
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
