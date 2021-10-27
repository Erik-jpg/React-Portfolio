// The Resume section must have a downloadable resume and a list of developer's proficiencies.
import React, {useState }from "react";
import { Document } from "react-pdf";

export default function AllPages(props) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const { pdf } = props;
    return (
        <Document
        file={pdf}
        options={{ resumeSrc: "/pdf.Resume.pdf" }}
        onLoadSuccess={onDocumentLoadSuccess}
        >

            {Array.from(new Array(numPages), (el, index) => (
                <page key={'page_${index + 1}'} pageNumber={index + 1} />
            ))}
        </Document>
    );

}