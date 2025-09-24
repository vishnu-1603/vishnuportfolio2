import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';
import Designs from './components/Designs/Designs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/skills' element={<Skills/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/certificates' element={<Certificates/>}/>
         <Route path='/designs' element={<Designs/>}/>
         <Route path='/contact' element={<Contact/>}/>
  
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App;
