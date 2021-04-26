import { Component } from "react";
import "../styles/CVInput.css";

class CVInput extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleArrayValueChange = this.handleArrayValueChange.bind(this);
    this.handleFormAddition = this.handleFormAddition.bind(this);
    this.handleFormDeletion = this.handleFormDeletion.bind(this);
  }

  handleValueChange(key, e) {
    this.props.onValueChange(key, e.target.value);
  }

  handleArrayValueChange(section, key, index, e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value);
    this.props.onArrayValueChange(section, key, value, index);
  }

  handleFormAddition(section) {
    this.props.onFormAddition(section);
  }

  handleFormDeletion(section, index) {
    this.props.onFormDeletion(section, index);
  }

  render() {
    const cvContent = this.props.cvContent;
    return (
      <div>
        <section>
          <h2>General Info</h2>
          <p>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="Saitama"
              onChange={this.handleValueChange.bind(this, "name")}
              value={cvContent.name}
            />
          </p>
          <p>
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              placeholder="San Fransisco, CA"
              onChange={this.handleValueChange.bind(this, "address")}
              value={cvContent.address}
            />
          </p>
          <p>
            <label htmlFor="phone">Phone Number: </label>
            <input
              type="text"
              placeholder="+14162241527"
              onChange={this.handleValueChange.bind(this, "phone")}
              value={cvContent.phone}
            />
          </p>
          <p>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              placeholder="saitama@opm.com"
              onChange={this.handleValueChange.bind(this, "email")}
              value={cvContent.email}
            />
          </p>
          <p>
            <label htmlFor="linkedin">Linkedin: </label>
            <input
              type="text"
              placeholder="linkedin.com/in/saitama"
              onChange={this.handleValueChange.bind(this, "linkedin")}
              value={cvContent.linkedin}
            />
          </p>
          <p>
            <label htmlFor="github">Github: </label>
            <input
              type="text"
              placeholder="github.com/saitama"
              onChange={this.handleValueChange.bind(this, "github")}
              value={cvContent.github}
            />
          </p>
        </section>

        <section>
          <h2>Summary</h2>
          <textarea
            placeholder="I have dived in web development especially front-end for almost 2 years since 2017. I entered the programming world in 2018. I'm interested in learning computer science in order to become a solid software engineer. In that regard, I’m eager to build something that could have good impacts on the lives of others."
            onChange={this.handleValueChange.bind(this, "summary")}
            value={cvContent.summary}
            cols="30"
            rows="10"
          ></textarea>
        </section>

        <section>
          <h2>Work Experience</h2>
          {cvContent.work.map((form, i) => {
            return (
              <div key={i}>
                <p>
                  <label htmlFor={`role_${i}`}>Role: </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "work",
                      "role",
                      i
                    )}
                    type="text"
                    placeholder="Software Engineer"
                    autoComplete="off"
                    id={`role_${i}`}
                    value={cvContent.work[i].role}
                  />
                </p>
                <p>
                  <label htmlFor={`company_${i}`}>Company Name: </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "work",
                      "company",
                      i
                    )}
                    type="text"
                    placeholder="Azamon"
                    autoComplete="off"
                    id={`company_${i}`}
                    value={cvContent.work[i].company}
                  />
                </p>
                <p>
                  <label htmlFor={`work_from_${i}`}>From: </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "work",
                      "from",
                      i
                    )}
                    type="text"
                    placeholder="August 2019"
                    autoComplete="off"
                    id={`work_from_${i}`}
                    value={cvContent.work[i].from}
                  />
                </p>
                <p>
                  <label htmlFor={`work_to_${i}`}>To: </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "work",
                      "to",
                      i
                    )}
                    type="text"
                    placeholder="July 2029"
                    autoComplete="off"
                    id={`work_to_${i}`}
                    value={cvContent.work[i].to}
                  />
                </p>
                <p>
                  <label htmlFor={`desc_${i}`}>Description: </label>
                  <textarea
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "work",
                      "desc",
                      i
                    )}
                    id={`desc_${i}`}
                    value={cvContent.work[i].desc}
                    placeholder="Part of Technology departement. For backend tasks, we are using Node and GraphQL. As for frontend tasks, we are using React."
                    cols="30"
                    rows="10"
                  ></textarea>
                </p>
                <button onClick={this.handleFormDeletion.bind(this, "work", i)}>
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={this.handleFormAddition.bind(this, "work")}>
            Add
          </button>
        </section>

        <section>
          <h2>Education</h2>
          {cvContent.education.map((form, i) => {
            return (
              <div key={i}>
                <p>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "education",
                      "enroll",
                      i
                    )}
                    type="checkbox"
                    id={`enroll_${i}`}
                    value={cvContent.education[i].enroll}
                  />
                  <label className="checkbox-label" htmlFor={`enroll_${i}`}>
                    Currently Enrolling
                  </label>
                </p>
                <p>
                  <label htmlFor={`field_${i}`}>Field/Degree: </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "education",
                      "field",
                      i
                    )}
                    type="text"
                    placeholder="Computer Science"
                    autoComplete="off"
                    id={`field_${i}`}
                    value={cvContent.education[i].field}
                  />
                </p>
                <p>
                  <label htmlFor={`school_${i}`}>
                    School/University Name:{" "}
                  </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "education",
                      "school",
                      i
                    )}
                    type="text"
                    placeholder="Harvard University"
                    autoComplete="off"
                    id={`school_${i}`}
                    value={cvContent.education[i].school}
                  />
                </p>
                <p>
                  <label htmlFor={`country_${i}`}>Country: </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "education",
                      "country",
                      i
                    )}
                    type="text"
                    placeholder="US"
                    autoComplete="off"
                    id={`country_${i}`}
                    value={cvContent.education[i].country}
                  />
                </p>
                {cvContent.education[i].enroll && (
                  <p>
                    <label htmlFor={`year_${i}`}>Year: </label>
                    <input
                      onChange={this.handleArrayValueChange.bind(
                        this,
                        "education",
                        "year",
                        i
                      )}
                      type="text"
                      placeholder="4th"
                      autoComplete="off"
                      id={`year_${i}`}
                      value={cvContent.education[i].year}
                    />
                  </p>
                )}
                <p>
                  <label htmlFor={`gpa_${i}`}>
                    {cvContent.education[i].enroll ? "Current" : ""} GPA:
                  </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "education",
                      "gpa",
                      i
                    )}
                    type="text"
                    placeholder="4.0"
                    autoComplete="off"
                    id={`gpa_${i}`}
                    value={cvContent.education[i].gpa}
                  />
                </p>
                <p>
                  <label htmlFor={`education_from_${i}`}>From: </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "education",
                      "from",
                      i
                    )}
                    type="text"
                    placeholder="2017"
                    autoComplete="off"
                    id={`education_from_${i}`}
                    value={cvContent.education[i].from}
                  />
                </p>
                <p>
                  <label htmlFor={`education_to_${i}`}>To: </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "education",
                      "to",
                      i
                    )}
                    type="text"
                    placeholder="2020"
                    autoComplete="off"
                    id={`education_to_${i}`}
                    value={cvContent.education[i].to}
                  />
                </p>
                <button
                  onClick={this.handleFormDeletion.bind(this, "education", i)}
                >
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={this.handleFormAddition.bind(this, "education")}>
            Add
          </button>
        </section>
      </div>
    );
  }
}

export default CVInput;
