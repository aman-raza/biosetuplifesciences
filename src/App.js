import React from 'react';
import './App.css';
import Backanimation from './components/Backanimation';
import Header from './components/Header';

function App() {
  
  return (
    <div className="container" id='container'>
    <Header/>
      <div className="main-content">
        <div className="network-bg"></div>
        <Backanimation/>
        <div className='biosetup-title'>
        <span className="biosetup-title">Biosetup</span>
        <span className="lifesciences-title">Lifesciences</span>
        </div>
        <p className="subtitle">A hub for scientific research and learning</p>
      </div>
    </div>
  );
}

export default App;
