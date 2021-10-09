import React from 'react';
import Images from './Images';
import KlettersteigImg from './Images/Klettersteig';

const Klettersteig = () =>(
<div className="ProjectKlettersteig"
style={{ margin: '2px', padding: '2px' }}>
    <div className="card">
        <div className="columns">
            <div className="columns">
                <figure className="image">
                    <img className="KlettersteigPic" src={Images.Klettersteig} alt="Klettersteig" />
                </figure>
            </div>
            <div className="column">
                <p>
                    <h3>Weekly Weather</h3>
                    <a className="project-link" href="https://erik-jpg.github.io/Weather-Dashboard-App/">
                        Deployed
                    </a>
                </p>
                <a className="project-link" href="https://github.com/Erik-jpg/Weather-Dashboard-App">
                    Github Repository Link
                </a>
                <br />
                <p>
                    An App that makes two fetch requests and returns current weather and an 8 day forecast, making planning easier.
                    After the fetch returns the info to the page, the JavaScript then renders 
                </p>
                <p>
                    <h5>Technologies used:</h5>
                    OpenWeather API, Vanilla JavaScript, CSS, and local storage.
                </p>
            </div>
        </div>
    </div>
</div>
);



export default Klettersteig;




