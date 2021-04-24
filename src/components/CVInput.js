import { Component } from "react";

class CVInput extends Component {
  render() {
    return (
      <div>
        <h2>General Info</h2>
        <label htmlFor="name">
          Name
          <input type="text" id="name" />
        </label>
        <label htmlFor="address">
          Address
          <input type="text" id="address" />
        </label>
        <label htmlFor="phone">
          Phone Number
          <input type="text" id="phone" />
        </label>
        <label htmlFor="email">
          Email
          <input type="text" id="email" />
        </label>
        <button>Add more</button>

        <label htmlFor="summary">
          <h2>Summary</h2>
          <input type="text" id="summary" />
        </label>

        <h2>Work Experience</h2>
        <label htmlFor="role">
          role
          <input type="text" id="role" />
        </label>
        <label htmlFor="company">
          company name
          <input type="text" id="company" />
        </label>
        <label htmlFor="from">
          from
          <input type="date" id="from" />
        </label>
        <label htmlFor="to">
          to
          <input type="date" id="to" />
        </label>
        <label htmlFor="desc">
          description
          <input type="text" id="desc" />
        </label>
        <button>Add more</button>

        <h2>Education</h2>
        <label htmlFor="enroll">
          <input type="checkbox" id="enroll" />
          currently enrolling
        </label>
        <label htmlFor="field">
          field/degree
          <input type="text" id="field" />
        </label>
        <label htmlFor="school">
          school/university name
          <input type="text" id="school" />
        </label>
        <label htmlFor="country">
          country
          <input type="text" id="country" />
        </label>
        <label htmlFor="year">
          year
          <input type="text" id="year" />
        </label>
        <label htmlFor="gpa">
          gpa
          <input type="text" id="gpa" />
        </label>
        <label htmlFor="from">
          from
          <input type="date" id="from" />
        </label>
        <label htmlFor="to">
          to
          <input type="date" id="to" />
        </label>
        <button>Add more</button>
      </div>
    );
  }
}

export default CVInput;
