import React, { Component } from 'react';

import User from '../../interfaces/User.interface';
import Pokemon from '../../interfaces/Pokemon.interface';
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay.component';

const POKEMON_API: string = 'https://pokeapi.co/api/v2/pokemon';

interface SearchState {
	error: boolean;
	inputValue: string;
	pokemon: Pokemon | null;
}

class PokemonSearch extends Component<User, SearchState> {
	constructor(props: User) {
		super(props);
		this.state = {
			error: false,
			inputValue: '',
			pokemon: null
		};
	}

	onSearchClick = async () => {
		try {
			const res = await fetch(`${POKEMON_API}/${this.state.inputValue}`);
			if (res.status !== 200) return this.setState({ error: true });

			const data = await res.json();

			const pokemon: Pokemon = {
				name: data.name,
				numberOfAbilities: data.abilities.length,
				baseExperience: data.base_experience,
				imageUrl: data.sprites.front_default
			};

			this.setState({ error: false, pokemon });
		} catch (e) {
			this.setState({ error: true });
		}
	};

	render() {
		const { name, numberOfPokemons } = this.props;
		const { error, inputValue, pokemon } = this.state;

		return (
			<div>
				<p>
					User {name}{' '}
					{numberOfPokemons && (
						<span>has {numberOfPokemons} pokemons!</span>
					)}
				</p>
				<input
					type="text"
					value={inputValue}
					onChange={e =>
						this.setState({ inputValue: e.target.value })
					}
				/>
				<button onClick={this.onSearchClick}>search</button>
				{error && <p>Pokemon with given name was not found.....</p>}
				{!error && pokemon && <PokemonDisplay pokemon={pokemon} />}
			</div>
		);
	}
}

export default PokemonSearch;
