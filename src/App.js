import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          alt="Redux logo"
          width={100}
          height={100}
          className="App-logo"
        />
        <h2>Redux Implementations</h2>
      </header>
      <main>
        <h5>...this app will enable you add and subtract (many more)</h5>
      </main>
    </div>
  );
}

export default App;
