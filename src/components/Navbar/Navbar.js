import React from "react";
import "./Navbar.css";

function MyNavbar({ page, setPage }) {
  return (
    <>
      <div className="">
        <h1>Welcome to my React Portfolio!</h1>
        <button id="BioBtn" onClick={() => setPage("Bio")}>
          Bio
        </button>
        <button id="projectsBtn" onClick={() => setPage("Projects")}>
          Projects
        </button>
        <button id="ContactBtn" onClick={() => setPage("Contact")}>
          Contact
        </button>
        <button id="Resume" onClick={() => setPage("Resume")}>
          Resume
        </button>
      </div>
    </>
  );
}

export default MyNavbar;
