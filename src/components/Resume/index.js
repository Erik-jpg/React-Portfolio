// The Resume section must have a downloadable resume and a list of developer's proficiencies.
import React from "react";
import { Document, Page } from "react-pdf";

export default function ResumeApp(props) {

    const [numPages, setNumPages] = useState(null);
   

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const {pdf} = props;

    return ( 
        <div>
            <Document file= "https://drive.google.com/file/d/1yPLEK35BKnUWy67JRonzp7ZBu5w1YCJK/view?usp=sharing" />
               
           
           
        </div>
    );
}
