import "../styles/block.css";
import BlockControl from "./BlockControl";
import BlockSummary from "./BlockSummary";
import BlockWork from "./BlockWork";
import BlockEducation from "./BlockEducation";

function Block(props) {
  let blockComponent;
  const type = props.type;
  switch (type) {
    case "summary":
      blockComponent = <BlockSummary />;
      break;
    case "work":
      blockComponent = <BlockWork />;
      break;
    case "education":
      blockComponent = <BlockEducation />;
      break;
    default:
      break;
  }

  return (
    <div class="block">
      {blockComponent}
      <BlockControl />
    </div>
  );
}

export default Block;
