import React, { useState } from 'react';
import MyNavbar from '../Navbar/Navbar';
import Bio from '../bio/index';
import Projects from '../Projects/index';
import Communication from '../Contact/Contact';


function Header(){
let [page, setPage] = useState('Bio');
const compilePage = () => {
    if (page === "Bio") {
        return <Bio />
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