import "./App.css";
import logements from "./data/logements.json";

function App() {
  console.log(logements[0].title);
  return (
    <div className="App">
      <h1>Mon site Kasa</h1>
    </div>
  );
}

export default App;
