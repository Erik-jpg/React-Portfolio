import React from "react";
import Button from 'react-bootstrap/Button';


function MyNavbar({ page, setPage }) {
  return (
    <>
      <div className="NavbarDisplay">
        <h1>Welcome to my React Portfolio!</h1>
        <Button id="BioBtn" onClick={() => setPage("Bio")}>
          Bio
        </Button>
        <Button id="projectsBtn" onClick={() => setPage("Projects")}>
          Projects
        </Button>
        <Button id="ContactBtn" onClick={() => setPage("Contact")}>
          Contact
        </Button>
        <Button id="Resume" onClick={() => setPage("Resume")}>
          Resume
        </Button>
        
      </div>
    </>
  );
}

export default MyNavbar;
