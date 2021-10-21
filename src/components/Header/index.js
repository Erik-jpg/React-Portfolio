import React, { useState } from 'react';
import MyNavbar from './components/Navbar/MyNavbar';
import './Title.css';
import BioIllumination from './components/Bio/BioIllumination';
import Projects from './components/Projects/PastProjects';
import Communication from './components/Contact/communication';


function Header(){
let [page, setPage] = useState('BioIllumination');
const compilePage = () => {
    if (page === "BioIllumination") {
        return <BioIllumination />
    }
        else if (page === "Projects") {
            return <Projects />
    }
        else if (page === "Communication") {
            return <Communication />
    }
    
};
return (
    <>
    <header>
        <h1>Erik Stone</h1>
        <h2>Full Stack Web Developer</h2>
        <MyNavbar page={page} setPage={setPage} />
    </header>
    {compilePage()}
    </>
);
}



export default Header;