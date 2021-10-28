// The Resume section must have a downloadable resume and a list of developer's proficiencies.
import React from "react";
import { Document } from "react-pdf";
import resumePdf from './Resume(PDF).pdf';
import resumeImg from './Screenshot(50.png)';

<figure>
    <a href={resumePdf}
    download><img src={resumeImg} alt= 'ThisIsResume' /></a>
</figure>

        // <Document file="https://drive.google.com/file/d/1yPLEK35BKnUWy67JRonzp7ZBu5w1YCJK/view?usp=sharing" />

export default Document;