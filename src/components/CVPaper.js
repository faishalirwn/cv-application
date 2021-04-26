import { Component } from "react";

class CVPaper extends Component {
  render() {
    const cvContent = this.props.cvContent;
    return (
      <div>
        <section>
          <img src="" alt="" />
          <div>
            <h3>{cvContent.name}</h3>
            <p>{cvContent.address}</p>
            <p>Mobile: {cvContent.phone}</p>
            <p>Email: {cvContent.email}</p>
            <p>Linkedin: {cvContent.linkedin}</p>
            <p>Github: {cvContent.github}</p>
          </div>
        </section>
        <section>
          <h2>Summary</h2>
          <p>{cvContent.summary}</p>
        </section>
        <section>
          <h2>Work Experience</h2>
          <ul>
            {cvContent.work.map((form, i) => {
              return (
                <li key={i}>
                  <p>
                    {form.role} at {form.company}, {form.from} to {form.to}
                  </p>
                  <p>{form.desc}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            {cvContent.education.map((form, i) => {
              return (
                <li key={i}>
                  <p>
                    {form.field}, {form.school}, {form.country}
                  </p>
                  <p>
                    {form.year ? `${form.year}. ` : ""} {form.from} - {form.to}{" "}
                  </p>
                  <p>
                    {form.enroll ? "Current" : ""} GPA: {form.gpa}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default CVPaper;
