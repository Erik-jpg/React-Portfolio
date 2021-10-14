
import React from 'react';
import { useState } from 'react';
import Title from './Header/Header';
import Footer from './Footer/Footer';
import Bio from './Bio/Bio';
import Resume from './Resume';

import { 
  Klettersteig,
  KlettersteigImg,
  weather,
  weatherImg,
  NoteTaker,
  ScribbleImg,
} from '../src/Projects/index';


const App = () => {
  const makeSectionDisplay = (displayState) => {
    const displayChange = {
      'Bio': () => <Bio />,
      'Projects': () => <Projects sectionDisplay={sectionDisplay} />,
      'Resume': () => <Resume sectionDisplay={sectionDisplay} />,
    };
    return displayChange[displayState]();
  }
  const [ sectionDisplay, setSectionDisplay ] = useState('Bio');
  
  return(
    <>
    <Title setsectionDisplay={sectionDisplay} />
    {makeSectionDisplay(sectionDisplay)}
    <Footer />
      </>
  )
}

export default App;
