import React from 'react'
import './Bioit.css'

function Bioit() {
  return (
    <div>
      <div className='main-div'>
        <div className="bioit-grid">

          {/* Biospedia Card */}
          <div className="card biopedia-card">
            <div className='bio'><a href='/'>Bio Pedia</a></div>
            <div className='bio'><a href='/'>Scientisketch</a></div>
            <div className='bio'><a href='/'>Quiz</a></div>
            <div className='bio'><a href='/'>Job Updates</a></div>
          </div>

          {/* Itpedia Card */}
          <div className="card itpedia-card">
            <div className='it'><a href='/'>Bio-IT Pedia</a></div>
            <div className='it'><a href='/'>Scientisketch</a></div>
            <div className='it'><a href='/'>Quiz</a></div>
            <div className='it'><a href='/'>Job Updates</a></div>
          </div>

        </div>
      </div>
    </div>
  )
}
//hii
export default Bioit
