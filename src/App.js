import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {

  return (
    <div className='body'>
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" exact element={ <Home/> } />
            <Route path="/AboutMe" exact element={ <About/>} />
            <Route path="/Projects" exact element={ <Portfolio/> } />
            <Route path="/Contact" exact element={ <Contact/> } />
            <Route path="/Resume" exact element={ <Resume/> } />
            <Route path="/Portfolio-REACT" element={<Navigate replace to="/" />} />
          </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;