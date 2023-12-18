import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Projects from './navbar/Projects';
import Certifications from './navbar/Certifications';
import Skills from './navbar/Skills';
import Achievements from './navbar/Achievements';
import Navigations from './navbar/Navigations';
import Contact from './navbar/Contact'
import Name from './navbar/Name'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigations/>
        <Routes>
          <Route path="/" element={<Name/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/certifications" element={<Certifications/>} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
