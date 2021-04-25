import { Component } from "react";

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
              onChange={this.handleValueChange.bind(this, "name")}
              value={cvContent.name}
            />
          </p>
          <p>
            <label htmlFor="address">Address: </label>
            <input
              onChange={this.handleValueChange.bind(this, "address")}
              value={cvContent.address}
            />
          </p>
          <p>
            <label htmlFor="phone">Phone Number: </label>
            <input
              onChange={this.handleValueChange.bind(this, "phone")}
              value={cvContent.phone}
            />
          </p>
          <p>
            <label htmlFor="email">Email: </label>
            <input
              onChange={this.handleValueChange.bind(this, "email")}
              value={cvContent.email}
            />
          </p>
          <p>
            <label htmlFor="linkedin">Linkedin: </label>
            <input
              onChange={this.handleValueChange.bind(this, "linkedin")}
              value={cvContent.linkedin}
            />
          </p>
          <p>
            <label htmlFor="github">Github: </label>
            <input
              onChange={this.handleValueChange.bind(this, "github")}
              value={cvContent.github}
            />
          </p>
        </section>

        <section>
          <h2>Summary</h2>
          <textarea
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
                    autoComplete="off"
                    id={`work_to_${i}`}
                    value={cvContent.work[i].to}
                  />
                </p>
                <p>
                  <label htmlFor={`desc_${i}`}>Description: </label>
                  <input
                    onChange={this.handleArrayValueChange.bind(
                      this,
                      "work",
                      "desc",
                      i
                    )}
                    type="text"
                    autoComplete="off"
                    id={`desc_${i}`}
                    value={cvContent.work[i].desc}
                  />
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
                  <label htmlFor={`enroll_${i}`}>Currently Enrolling</label>
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
