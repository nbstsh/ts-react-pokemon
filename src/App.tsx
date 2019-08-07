import React from 'react';
import './App.css';
import PokemonSearch from './components/PokemonSearch/PokemonSearch.component';

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonSearch name="John Doe" numberOfPokemons={5} />
    </div>
  );
};

export default App;
