// The Contact section must contain fields for entering Name, Email, and a message. If any of the fields are blank, the user must be notified that they are required.
// After submitting the user will be notified that they must enter in a valid email address.
import React from "react";

import { EmailForm } from "react-bootstrap";


function Communication() {
  class EmailForm extends React.Component {
    constructor() {
      super();
      this.state = {
        input: {},
        errors: {},
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      let input = this.state.input;
      input[event.target.name] = event.target.value;

      this.setState({
        input,
      });
    }
    handleSubmit(event) {
      event.preventDefault();

      if (this.validate()) {
        console.log(this.state);

        let input = {};
        input["FIrst Name"] = "";
        input["Last Name"] = "";
        input["email"] = "";
        this.setState({ input: input });

        alert("Email Form is submitted");
      }
    }

    validate() {
      let input = this.state.input;
      let errors = {};
      let isValid = true;

      if (!input[" First Name"]) {
        isValid = false;
        errors["name"] = "Please enter your first name.";
      }

      if (!input[" Last Name"]) {
        isValid = false;
        errors["name"] = "Please enter your last name.";
      }

      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter a valid email.";
      }

      if (typeof input["email"] !== "undefined") {
        const pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter a valid email.";
        }
      }
    }
  }
  return (
    <>
      <form className="contact row g-3">
        <div className="col-md-4">
          <label for="ValidationServer01" class="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control is-valid"
            id="ValidationServer01"
            value="Mark"
            required
          />
          <div className="valid-feedback">Thank You for your input!</div>
        </div>
        <div className="col-md-4">
          <label for="ValidationServer02" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control is-valid"
            id="ValidationServer02"
            value="Mark"
            required
          />
          <div className="valid-feedback">Thank You for your input!</div>
        </div>
        <div className="col-md-4">
          <label for="ValidationServer03" class="form-label">
            Valid Email Address
          </label>
          <input
            type="text"
            className="form-control is-valid"
            id="ValidationServer03"
            value="Mark"
            required
          />
          <div className="valid-feedback">Thank You for your input!</div>
        </div>
      </form>
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
    </>
  );
}


export default Communication;

