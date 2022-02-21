import React from 'react';
import { Document } from 'react-pdf';
import resumePdf from './Resume.pdf';
import resumeImg from './ResumePicture.png';

<figure>
    <a href={resumePdf}
        download><img src={resumeImg} alt='Png of resume' /></a>
</figure>

export default Document;