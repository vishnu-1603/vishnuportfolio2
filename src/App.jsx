import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
