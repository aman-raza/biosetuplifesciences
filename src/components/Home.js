import React from 'react';
import './Home.css';
import Backanimation from './Backanimation';
import Header from './Header';
import Bioit from './Bioit';
import About from './About';
import Career from './Career';
import Newsletter from './Newsletter';

function Home() {
  
  return (
    <div>
    <Backanimation/>
    <div className="container" id='container'>
    <Header/>
      <div className="main-content">
        <div className="network-bg"></div>
        {/* <Backanimation/> */}
        <div className='biosetup-title'>
        <span className="biosetup-title">Biosetup</span>
        <span className="lifesciences-title">Lifesciences</span>
        </div>
        <p className="subtitle">A hub for scientific research and learning</p>
      </div>
    </div>
    <Bioit/>
    <About/>
    <Newsletter/>
    <Career/>
    </div>
  );
}

export default Home;
