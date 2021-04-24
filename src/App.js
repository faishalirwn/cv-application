import "./App.css";
import Switcher from "./components/Switcher";

function App() {
  return (
    <>
      <nav>
        <p>CV Maker</p>
        <button>Preview</button>
        <button>Print</button>
      </nav>
      <div className="App">
        <Switcher />
      </div>
    </>
  );
}

export default App;
