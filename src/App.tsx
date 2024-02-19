import "./App.css";
import TypeProps from "./components/TypeProps";

function App() {
  return (
    <div className="App">
      <TypeProps name="TypeScript" count={10} isCheck={true} />
    </div>
  );
}

export default App;
