import { Component } from "react";
import BlockEducation from "./BlockEducation";
import BlockHeader from "./BlockHeader";
import BlockSummary from "./BlockSummary";
import BlockWork from "./BlockWork";

class CVPaper extends Component {
  render() {
    return (
      <div>
        <BlockHeader />
        <BlockSummary />
        <BlockWork />
        <BlockEducation />
      </div>
    );
  }
}

export default CVPaper;
