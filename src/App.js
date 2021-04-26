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

  render() {
    return (
      <>
        <nav>
          <p>CV Maker</p>
          <button onClick={this.handlePreviewSwitch}>
            {this.state.preview ? "Edit" : "Preview"}
          </button>
          <button>Print</button>
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
