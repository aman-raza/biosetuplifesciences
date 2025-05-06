import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Bioit from './components/Bioit';
import Newsletter from './components/Newsletter';
import Career from './components/Career';
import Blogs from './components/Blogs'; 
import SingleBlog from './components/SingleBlog';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  
  return (
    <div>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bioit" element={<Bioit/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
