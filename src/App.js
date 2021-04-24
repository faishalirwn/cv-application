import "./App.css";
import CVInput from "./components/CVInput";

function App() {
  return (
    <>
      <nav>
        <p>CV Maker</p>
        <button>Preview</button>
        <button>Print</button>
      </nav>
      <div className="App">
        <CVInput />
        {/* <CVPaper /> */}
      </div>
    </>
  );
}

export default App;
