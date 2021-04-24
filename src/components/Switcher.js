import { Component } from "react";
import CVInput from "./CVInput";
import CVPaper from "./CVPaper";

class Switcher extends Component {
  render() {
    return (
      <>
        <CVInput />
        <CVPaper />
      </>
    );
  }
}

export default Switcher;
