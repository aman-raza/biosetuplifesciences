import React from 'react'
import './Bioit.css'
import Backanimation from './Backanimation'

function Bioit() {
  return (
    <div>
      <div className='main-div'>
        <div className="bioit-grid">

          {/* Biospedia Card */}
          <div className="card biopedia-card">
            <div className='bio'><a>BioPedia</a></div>
            <div className='bio'><a>Scientisketch</a></div>
            <div className='bio'><a>Quiz</a></div>
            <div className='bio'><a>Job Updates</a></div>
          </div>

          {/* Itpedia Card */}
          <div className="card itpedia-card">
            <div className='it'><a>BioPedia</a></div>
            <div className='it'><a>Scientisketch</a></div>
            <div className='it'><a>Quiz</a></div>
            <div className='it'><a>Job Updates</a></div>
          </div>

        </div>
      </div>
    </div>
  )
}
//hii
export default Bioit
