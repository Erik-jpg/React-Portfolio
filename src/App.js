
import React from 'react';
import { useState } from 'react';
import Title from './Header';
import Footer from './Footer';
import Bio from './Bio';
import Resume from './Resume';
import Projects from './Projects';


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
