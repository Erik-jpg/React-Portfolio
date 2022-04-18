import React from "react";


function ContactForm() {
  return (
    <div id="contact-info">
      <h3>Contact Form and Links</h3>
      <br />
      <form
        class="row g-3"
        id="test-form"
        action="https://formspree.io/f/xoqyldrv"
        method="POST"
      >
        <div class="col-md-12">
          <label for="inputInquiry" class="form-label">
            Inquiry
          </label>
          <select id="inputInquiry" class="form-select" name="Inquiry-Type">
            <option selected>Select One</option>
            <option value="1">Digital Consultation</option>
            <option value="2">Web Development Commission</option>
            <option value="3">Freelance Story Commission</option>
            <option value="4">Job Recruitment</option>
            <option value="5">Other</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputFirstName" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputFirstName"
            name="First-Name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputLastName" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputLastName"
            name="Last-Name"
          />
        </div>
        <div class="col-12">
          <label for="inputEmail" class="form-label">
            Email Address
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            name="E-mail"
            placeholder="example@example.com"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="inputCity" name="City" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            State
          </label>
          <select id="inputState" class="form-select" name="State">
            <option selected>Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            <option value="Other">Not in USA</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            ZIP Code
          </label>
          <input type="text" class="form-control" id="inputZip" name="ZIP" />
        </div>
        <div class="col-md-12">
          <label for="description" class="form-label">
            Description of request:
          </label>
          <textarea
            class="form-control"
            aria-label="With textarea"
            name="Message"
          ></textarea>
        </div>
        <div class="col-12">
          <button id="text-form-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      </div>
  );
}
export default ContactForm;