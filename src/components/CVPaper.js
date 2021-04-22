import { Component } from "react";
import BlockHeader from "./BlockHeader";
import Block from "./Block";

class CVPaper extends Component {
  render() {
    return (
      <div>
        <BlockHeader />
        <Block type="summary" />
        <Block type="work" />
      </div>
    );
  }
}

export default CVPaper;
