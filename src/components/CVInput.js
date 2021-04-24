import { Component } from "react";

class CVInput extends Component {
  render() {
    return (
      <div>
        <form>
          <section>
            <h2>General Info</h2>
            <p>
              <label htmlFor="name">Name: </label>
              <input type="text" autoComplete="off" id="name" />
            </p>
            <p>
              <label htmlFor="address">Address: </label>
              <input type="text" autoComplete="off" id="address" />
            </p>
            <p>
              <label htmlFor="phone">Phone Number: </label>
              <input type="text" autoComplete="off" id="phone" />
            </p>
            <p>
              <label htmlFor="email">Email: </label>
              <input type="text" autoComplete="off" id="email" />
            </p>
            <p>
              <label htmlFor="linkedin">Linkedin: </label>
              <input type="text" autoComplete="off" id="linkedin" />
            </p>
            <p>
              <label htmlFor="github">Github: </label>
              <input type="text" autoComplete="off" id="github" />
            </p>
          </section>

          <section>
            <h2>Summary</h2>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </section>

          <section>
            <h2>Work Experience</h2>
            <p>
              <label htmlFor="role_1">Role: </label>
              <input type="text" autoComplete="off" id="role_1" />
            </p>
            <p>
              <label htmlFor="company_1">Company Name: </label>
              <input type="text" autoComplete="off" id="company_1" />
            </p>
            <p>
              <label htmlFor="work_from_1">From: </label>
              <input type="text" autoComplete="off" id="work_from_1" />
            </p>
            <p>
              <label htmlFor="work_to_1">To: </label>
              <input type="text" autoComplete="off" id="work_to_1" />
            </p>
            <p>
              <label htmlFor="desc_1">Description: </label>
              <input type="text" autoComplete="off" id="desc_1" />
            </p>
            <button>Add more</button>
          </section>

          <section>
            <h2>Education</h2>
            <p>
              <input type="checkbox" id="enroll_1" />
              <label htmlFor="enroll_1">Currently Enrolling</label>
            </p>
            <p>
              <label htmlFor="field_1">Field/Degree: </label>
              <input type="text" autoComplete="off" id="field_1" />
            </p>
            <p>
              <label htmlFor="school_1">School/University Name: </label>
              <input type="text" autoComplete="off" id="school_1" />
            </p>
            <p>
              <label htmlFor="country_1">Country: </label>
              <input type="text" autoComplete="off" id="country_1" />
            </p>
            <p>
              <label htmlFor="year_1">Year: </label>
              <input type="text" autoComplete="off" id="year_1" />
            </p>
            <p>
              <label htmlFor="gpa_1">GPA: </label>
              <input type="text" autoComplete="off" id="gpa_1" />
            </p>
            <p>
              <label htmlFor="education_from_1">From: </label>
              <input type="text" autoComplete="off" id="education_from_1" />
            </p>
            <p>
              <label htmlFor="education_to_1">To: </label>
              <input type="text" autoComplete="off" id="education_to_1" />
            </p>
            <button>Add more</button>
          </section>
        </form>
      </div>
    );
  }
}

export default CVInput;
