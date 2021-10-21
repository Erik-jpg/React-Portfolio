import React from 'react';
import './Navbar.css';
import MyNavbar from './Navbar/MyNavbar';

function Navbar() {
    return (
        <>
        <div className="Navbar">
            <h1>Welcome to my React Portfolio!</h1>
            <MyNavbar />
        </div>
        
        </>
    )
}


export default Navbar;