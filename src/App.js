import logo from './logo.svg';
import './App.css';

function App() {
  // fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
  //   .then(response => response.json())
  //   .then(data => data.results)
  //   .then(pokemons => console.log(pokemons))



  fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(pokemons => console.log(pokemons))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
