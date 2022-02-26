import React from 'react';

import resumePdf from '../static/media/Resume.3a7f71f1.pdf';
import resumeImg from '../static/media/ResumePicture.662d3985.png';

const Resume = (props) => (
    <div className="box" style={{ background: 'black' }}>
        <div className="columns">
            <div className="column" style={{display: flex, justifyContent: 'center'}}>
<figure> <a href={resumePdf} download><img id="ResumePicture" src={resumeImg} alt="ResumeSample" />
</a></figure>
        </div>
    </div>
</div>
);

export default Resume;