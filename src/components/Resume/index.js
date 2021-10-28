// The Resume section must have a downloadable resume and a list of developer's proficiencies.
import React from "react";

import resumePdf from './Resume.pdf';
import resumeImg from './ResumePicture.png';

const Resume = (props) => (
    <div className="box" style={{ background: 'black' }}>
        <div className="columns">
            <div
            className='column'
            style={{ display: 'flex', justifyContent: 'center' }}>
                <figure>
                    <a href={resumePdf}
                    download
                    >
                        <img id="resume-picture" src={resumeImg} alt="LookAtResume" />
                    </a>
                </figure>
            </div>
        </div>
    </div>
);
export default Resume;