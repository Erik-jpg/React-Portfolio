import React from 'react';
import Tetris from "./Tetris";
import Klettersteig from "./Klettersteig";
import NoteTaker from "./NoteTaker";
import Weather from "./Weather";

const PastProjects = () => {
  return (
    <div id="show-projects">
      <h3>These are links to projects that I did in the University of Oregon coding boot camp.
        Please feel free to click the links and explore! Also if you would like to view the coding that was done, click on the link below.
        Github link and you can view the code from there.
      </h3>
      <br />
      <div id="Tetris">
        <Tetris />
      </div>
      <div id="project-Klettersteig">
        <Klettersteig />
      </div>
      <div id="Note-Taker">
      <NoteTaker />
      </div>
      <div id="weather-app">
      <Weather />
      </div>
    </div>
  );
};

export default PastProjects;

