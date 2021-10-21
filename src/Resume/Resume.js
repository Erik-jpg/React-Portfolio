// The Resume section must have a downloadable resume and a list of developer's proficiencies.
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"

function ResumeApp() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setPageNumber(numPages);
    }

    return ( 
        <div>
            <Document
            file="https://drive.google.com/file/d/1yPLEK35BKnUWy67JRonzp7ZBu5w1YCJK/view?usp=sharing"
            onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}