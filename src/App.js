import { Component } from "react";
import "./App.css";
import CVInput from "./components/CVInput";
import CVPaper from "./components/CVPaper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <>
        <nav>
          <p>CV Maker</p>
          <button>Preview</button>
          <button>Print</button>
        </nav>
        <div className="App">
          <CVInput
            onValueChange={this.handleValueChange}
            onArrayValueChange={this.handleArrayValueChange}
            onFormAddition={this.handleFormAddition}
            onFormDeletion={this.handleFormDeletion}
            cvContent={this.state.cvContent}
          />
          {/* <CVPaper /> */}
        </div>
      </>
    );
  }
}

export default App;
