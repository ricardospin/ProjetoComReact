import React from 'react';
import AboutMe from './components/aboutme';
import Education from './components/education';
import Experience from './components/experiences';
import Hobbies from './components/hobbies';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <AboutMe />
      <Education />
      <Experience />
      <Hobbies />
      <div className="footer">© 2024 Ricardo Pinheiro</div>
    </div>
  );
};

export default App;
