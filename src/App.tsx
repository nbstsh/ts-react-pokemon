import React from 'react';
import style from './App.module.scss';
import PokemonSearch from './components/PokemonSearch/PokemonSearch.component';

const App: React.FC = () => {
	return (
		<div className={style.app}>
			<PokemonSearch name="John Doe" numberOfPokemons={5} />
		</div>
	);
};

export default App;
