import React from 'react';
import TetrisImg from "./Images/TetrisImg";

const Tetris = () => (
    <div className="ProjectTetris"
    style ={{ margin: '2px', padding: '2px' }}>
        <div className="card">
            <div className="columns">
                <figure className="image">
                    <img className="TetrisScreen" 
                    src={TetrisImg} alt="Tetris"
                    href="https://arcade-lite.herokuapp.com/"
                    />
                    </figure>
                <p>
                    <strong>Arcade-Lite</strong>
                    <p>Deployed site.</p>
                    <a className="Arcade-lite-link" href="https://arcade-lite.herokuapp.com">
                    </a>

                Github Link</p>
                    <a className="Github-Arcade-lite-link" href="https://github.com/Windowmac/arcade-lite">
                    </a>

                <p>
                    This is a team built application. This React app is designed to play Tetris. It uses Context API to change state, set timers, check piece movement, 
                    and update with the new state.</p> 
                
                <p>
                    <strong>Technologies used:</strong>
                    GraphQL, React, Apollo Server/Client, Mongoose, Context API
                    </p>
        </div>
    </div>
</div>
);

export default Tetris;