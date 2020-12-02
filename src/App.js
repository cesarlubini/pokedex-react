import MainMenu from './components/MainMenu';
import SearchForm from './components/SearchForm';
import PokemonList from './components/PokemonList';
import PokemonCard from './components/PokemonCard';
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
    }
  ]
  
  return (
    <section className="content">
      <MainMenu/>
      <SearchForm/>
      <PokemonList/>

      {pokemonList.map((pokemon, key) => {
        return <PokemonCard
          key={key}
          photo={pokemon.photo}
          number={pokemon.number}
          name={pokemon.name}
          types={pokemon.types}
          />
      })}

      <Footer/>
    </section>
  );
}

export default App;
