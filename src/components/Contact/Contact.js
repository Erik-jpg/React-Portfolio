// The Contact section must contain fields for entering Name, Email, and a message. If any of the fields are blank, the user must be notified that they are required.
// After submitting the user will be notified that they must enter in a valid email address.
import React from "react";
import { useForm, ValidationError } from "@formspree/react";



    function communication() {
    return (
        [state, handleSubmit] = useForm("xeqvwlqd")
        <>
        <div id="contact">
    <h4>Social Media and Contact Form</h4>
    <br />
    if (state.succeeded) {
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email Address
        </label>
        <input
            id="email"
            type="email"
            name="email"
        />
        <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
        />
        <textarea
            id="message"
            name="message"
        />
        <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
            Submit
        </button>
    </form>
    }
    
    <br />
    <section>
        <h3>
            If you would like a more direct way to contact me, click the email
            link. If you would like to see what I am currently working on, feel
            free to checkout my linkedIn profile. There is also a link to read my
            resume in PDF form.
        </h3>

        <ul>
            <li>
                <a
                    href="mailto:spologas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    E-Mail
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/Erik-jpg/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </li>
            <li>
                <a
                    href="www.linkedin.com/in/erik-stone-33b2a661"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </li>
            <li>
                <a
                    href="https://drive.google.com/file/d/1yPLEK35BKnUWy67JRonzp7ZBu5w1YCJK/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </li>
        </ul>
    </section>
</div>
)
}
  
export default communication;
