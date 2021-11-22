import React, { useState } from 'react';
import MyNavbar from '../Navbar';
import Bio from '../Bio/index';
import Projects from '../Projects/index';
import Contact from '../Contact';
import Resume from '../Resume/index';


function Header(){
let [page, setPage] = useState('Bio');
const compilePage = () => {
    if (page === "Bio") {
        return <Bio />
    }
        else if (page === "Projects") {
            return <Projects />
    }
        else if (page === "Contact") {
            return <Contact />
    }
    else if (page === "Resume") {
        return <Resume />
    }
    
};
return (
    <>
    <header className="headerCaption">
        <br />
        <h1>Erik Stone</h1> 
        <br />
        <h2>Full Stack Web Developer</h2>
        <br />
        <MyNavbar page={page} setPage={setPage} />
    </header>
    {compilePage()}
    </>
);
}



export default Header;


