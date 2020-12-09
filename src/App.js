import MainMenu from './components/MainMenu';
import SearchForm from './components/SearchForm';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer';
import './assets/App.css';

function App() {
  
  const pokemonList = [
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      'number': '001',
      'name': "Bulbassaur",
      'types' :["grass", "poison"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      'number': '004',
      'name': "Charmander",
      'types' :["fire"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      'number': '007',
      'name': "Squirtle",
      'types' :["water"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      'number': '001',
      'name': "Bulbassaur",
      'types' :["grass", "poison"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      'number': '004',
      'name': "Charmander",
      'types' :["fire"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      'number': '007',
      'name': "Squirtle",
      'types' :["water"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      'number': '001',
      'name': "Bulbassaur",
      'types' :["grass", "poison"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      'number': '004',
      'name': "Charmander",
      'types' :["fire"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      'number': '007',
      'name': "Squirtle",
      'types' :["water"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      'number': '001',
      'name': "Bulbassaur",
      'types' :["grass", "poison"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      'number': '004',
      'name': "Charmander",
      'types' :["fire"]
    },
    {
      'photo': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      'number': '007',
      'name': "Squirtle",
      'types' :["water"]
    }
  ]
  
  return (
    <section className="content home-page">
      <MainMenu/>
      <SearchForm/>
      <PokemonList
        pokemonList={pokemonList}
      />
      <Footer/>
    </section>
  );
}

export default App;
