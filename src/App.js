import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bioit from './components/Bioit';
import Newsletter from './components/Newsletter';
import Career from './components/Career';
import Event from './components/Events';
import Team from './components/Team';
function App() {

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bioit" element={<Bioit/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/events' element={<Event/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;