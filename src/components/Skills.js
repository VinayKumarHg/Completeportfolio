import React from 'react'
import "../style/skills.css"

function Skills({skill,progress}) {
  return (
    <div>
      <div className="skillssection">
      <div className="skill-container">
      <h5 className="skill-tittle">{skill}</h5>
      <div className="skill-bar">
      <p className="skill-text">{progress}</p>
          <div className="skill-progress" >
             <div className="progress" >

             </div>
          </div>

      </div>

      </div>
    </div>
    </div>
  )
}


export default Skills;

