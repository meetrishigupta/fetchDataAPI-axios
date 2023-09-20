import "./App.css";
import Userdata from "./Userdata";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontSize: "40px", color: "green" }}>
        Users and Images data render through multiple API(AXIOS AND FETCH
        METHOD)
      </h1>
      <Userdata />
    </div>
  );
}

export default App;
