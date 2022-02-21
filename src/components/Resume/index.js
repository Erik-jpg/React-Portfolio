import React from 'react';

import resumePdf from './Resume.pdf';
import resumeImg from './ResumePicture.png';

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