import React from 'react';
import Tittle from './Tittle';
import Imagesection from './Imagesection';
import Skills from './Skills';

const Aboutus = () => {
  return (
    <div className="aboutpage">
             <Tittle tittle={'About Me'} span={'About Me'}/>
            <Imagesection />
            <Tittle tittle={'My Skills'} span={'My Skills'} />
            <Skills skill={'Javascript'} progress={'70%'}  />
    </div>
  )
}

export default Aboutus;
