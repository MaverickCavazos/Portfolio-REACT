import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'

function App() {

  return (
    <div >
      <Router>
        <Nav/>
          <Routes>
            <Route path="/About" exact element={ <About/>} />
            <Route path="/Portfolio" exact element={ <Portfolio/> } />
            <Route path="/Contact" exact element={ <Contact/> } />
            <Route path="/Resume" exact element={ <Resume/> } />
          </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;