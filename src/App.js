import { Component } from "react";
import "./App.css";
import CVInput from "./components/CVInput";
import CVPaper from "./components/CVPaper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
      cvContent: {
        name: "",
        address: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        summary: "",
        work: [
          {
            role: "",
            company: "",
            from: "",
            to: "",
            desc: "",
          },
        ],
        education: [
          {
            enroll: false,
            field: "",
            school: "",
            country: "",
            gpa: "",
            from: "",
            to: "",
            year: "",
          },
        ],
      },
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleArrayValueChange = this.handleArrayValueChange.bind(this);
    this.handleFormAddition = this.handleFormAddition.bind(this);
    this.handleFormDeletion = this.handleFormDeletion.bind(this);
    this.handlePreviewSwitch = this.handlePreviewSwitch.bind(this);
    this.handleExample = this.handleExample.bind(this);
  }

  handleValueChange(key, value) {
    this.setState({
      cvContent: {
        ...this.state.cvContent,
        [key]: value,
      },
    });
    console.log(this.state.cvContent);
  }

  handleArrayValueChange(section, key, value, index) {
    let currentSection = this.state.cvContent[section];
    currentSection[index][key] = value;
    this.setState({
      cvContent: {
        ...this.state.cvContent,
        [section]: currentSection,
      },
    });
    console.log(this.state.cvContent);
  }

  handleFormAddition(section) {
    let currentSection = this.state.cvContent[section];
    currentSection.push({});
    this.setState({
      cvContent: {
        ...this.state.cvContent,
        [section]: currentSection,
      },
    });
  }

  handleFormDeletion(section, index) {
    let currentSection = this.state.cvContent[section];
    currentSection.splice(index, 1);
    this.setState({
      cvContent: {
        ...this.state.cvContent,
        [section]: currentSection,
      },
    });
  }

  handlePreviewSwitch() {
    this.setState({ preview: !this.state.preview });
  }

  handleExample() {
    this.setState({
      cvContent: {
        name: "Saitama",
        address: "San Fransisco, CA",
        phone: "+14162241527",
        email: "saitama@opm.com",
        linkedin: "linkedin.com/in/saitama",
        github: "github.com/saitama",
        summary:
          "I have dived in web development especially front-end for almost 2 years since 2017. I entered the programming world in 2018. I'm interested in learning computer science in order to become a solid software engineer. In that regard, I’m eager to build something that could have good impacts on the lives of others.",
        work: [
          {
            role: "Software Engineer",
            company: "Azamon",
            from: "August 2019",
            to: "July 2029",
            desc:
              "Part of Technology departement. For backend tasks, we are using Node and GraphQL. As for frontend tasks, we are using React.",
          },
          {
            role: "Front End Developer",
            company: "Guguru",
            from: "August 2018",
            to: "July 2019",
            desc: "Part of Management.",
          },
        ],
        education: [
          {
            enroll: true,
            field: "Computer Science",
            school: "Harvard University",
            country: "US",
            gpa: "4.0",
            from: "2017",
            to: "2020",
            year: "4th",
          },
          {
            enroll: false,
            field: "Mechanical Engineering",
            school: "Harvard University",
            country: "US",
            gpa: "3.9",
            from: "2014",
            to: "2017",
          },
        ],
      },
    });
  }

  render() {
    return (
      <>
        <nav>
          <p>CV Maker</p>
          <button onClick={this.handleExample}>Load Example</button>
          <button onClick={this.handlePreviewSwitch}>
            {this.state.preview ? "Edit" : "Preview"}
          </button>
        </nav>
        <div className="App">
          {this.state.preview ? (
            <CVPaper cvContent={this.state.cvContent} />
          ) : (
            <CVInput
              onValueChange={this.handleValueChange}
              onArrayValueChange={this.handleArrayValueChange}
              onFormAddition={this.handleFormAddition}
              onFormDeletion={this.handleFormDeletion}
              cvContent={this.state.cvContent}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
