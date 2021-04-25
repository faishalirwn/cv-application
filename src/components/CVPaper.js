import { Component } from "react";

class CVPaper extends Component {
  render() {
    return (
      <div>
        <section>
          <img src="" alt="" />
          <div>
            <h3>John Smith</h3>
            <p>33 Avenue Cingcong</p>
            <p>Mobile: +1 912323</p>
            <p>Email: ajsdk@gas.asd</p>
            <p>Linkedin: linkedin.com/in/asd</p>
            <p>Github: github.com/asd</p>
          </div>
        </section>
        <section>
          <h2>Summary</h2>
          <p>I am not you yes I am not yes I am no no yes</p>
        </section>
        <section>
          <h2>Work Experience</h2>
          <ul>
            <li>
              <p>
                Software Engineer Intern at Azamon, June 2019 to August 2019
              </p>
              <p>
                Part of Technology function and a member of New Retail team. For
                backend tasks, we are using Golang and GraphQL. As for frontend
                tasks, we are using Sapper (a Svelte web framework).
              </p>
            </li>
            <li>
              <p>
                Software Engineer, Backend at Bytedance, October 2018 to June
                2019
              </p>
              <p>
                Part of Payment and Financial Services tribe, Zhinglue squad,
                Payment subsquad. Dealing with payment related issues in the
                Zhinglue feature (formerly known as Byte Zhinglue) on Bytedance.
                Mainly using Ruby programming language. This is a part-time job.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <p>Informatics, Baron University, Singapore</p>
              <p>Senior (4th year) student. 2016 - (expected) 2020 </p>
              <p>Current GPA: 3.1</p>
            </li>
            <li>
              <p>Mathematics & Natural Science, John High School, Barbados </p>
              <p>2013 - 2016</p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default CVPaper;
