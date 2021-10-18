
import React from 'react';
import { useState } from 'react';
import Navbar from './Header';
import Footer from './Footer';
import Bio from './Bio';
// import Resume from './Resume';
import Projects from './Projects';


const App = () => {
  const makeSectionDisplay = (displayState) => {
    const displayChange = {
      'Bio': () => <Bio />,
      'Projects': () => <Projects sectionDisplay={sectionDisplay} />,
      // 'Resume': () => <Resume sectionDisplay={sectionDisplay} />,
    };
    return displayChange[displayState]();
  }
  const [ sectionDisplay, setSectionDisplay ] = useState('Projects');
  
  return(
    <>
    <Navbar setsectionDisplay={sectionDisplay} />
    {makeSectionDisplay(sectionDisplay)}
    <Footer />
      </>
  )
}

export default App;
