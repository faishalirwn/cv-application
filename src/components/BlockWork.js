import { Component } from "react";

class BlockWork extends Component {
  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <p>Software Engineer Intern at Azamon, June 2019 to August 2019</p>
            <p>
              Part of Technology function and a member of New Retail team. For
              backend tasks, we are using Golang and GraphQL. As for frontend
              tasks, we are using Sapper (a Svelte web framework).
            </p>
          </li>
          <li>
            <p>
              Software Engineer, Backend at Bytedance, October 2018 to June 2019
            </p>
            <p>
              Part of Payment and Financial Services tribe, Zhinglue squad,
              Payment subsquad. Dealing with payment related issues in the
              Zhinglue feature (formerly known as Byte Zhinglue) on Bytedance.
              Mainly using Ruby programming language. This is a part-time job.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default BlockWork;
