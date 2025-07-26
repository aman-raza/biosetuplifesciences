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
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#about-container" element={<About />} />
          <Route path="#bioit-container" element={<Bioit />} />
          <Route path="#newsletter-container" element={<Newsletter />} />
          <Route path="#career-container" element={<Career />} />
          <Route path="#team-container" element={<Team />} />
        </Routes>
      </Router>
=======
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
>>>>>>> 0689a5adda6afe58d2574e4401714e87f0f68a99
    </div>
  );
}

export default App;