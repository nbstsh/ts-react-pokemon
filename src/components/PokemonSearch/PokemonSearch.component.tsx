import React, { Component } from 'react';

import style from './PokemonSearch.module.scss';

import User from '../../interfaces/User.interface';
import Pokemon from '../../interfaces/Pokemon.interface';
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay.component';

const POKEMON_API: string = 'https://pokeapi.co/api/v2/pokemon';

interface SearchState {
	error: string;
	inputValue: string;
	pokemon: Pokemon | null;
}

class PokemonSearch extends Component<User, SearchState> {
	constructor(props: User) {
		super(props);
		this.state = {
			error: '',
			inputValue: '',
			pokemon: null
		};
	}

	onSearchClick = async () => {
		const { inputValue } = this.state;

		if (!inputValue)
			return this.setState({ error: 'Please provide pokemon name!' });

		try {
			const res = await fetch(`${POKEMON_API}/${inputValue}`);
			if (res.status !== 200)
				return this.setState({ error: 'Something went wrong ...' });

			const data = await res.json();
			if (!data)
				return this.setState({
					error: 'Pokemon with given name was not found ....'
				});

			const pokemon: Pokemon = {
				name: data.name,
				numberOfAbilities: data.abilities.length,
				baseExperience: data.base_experience,
				imageUrl: data.sprites.front_default
			};

			this.setState({ error: '', pokemon });
		} catch (e) {
			this.setState({ error: 'Sometihng went wrong ...' });
		}
	};

	render() {
		const { name, numberOfPokemons } = this.props;
		const { error, inputValue, pokemon } = this.state;

		return (
			<div>
				<p className={style.userInfo}>
					User {name}{' '}
					{numberOfPokemons && (
						<span>has {numberOfPokemons} pokemons!</span>
					)}
				</p>
				<p>Enter your favorite Pokemon name!</p>
				<input
					className={style.input}
					type="text"
					value={inputValue}
					onChange={e =>
						this.setState({ inputValue: e.target.value })
					}
				/>
				<button className={style.button} onClick={this.onSearchClick}>
					search
				</button>
				{error && <p className={style.errorMessage}>{error}</p>}
				{!error && pokemon && <PokemonDisplay pokemon={pokemon} />}
			</div>
		);
	}
}

export default PokemonSearch;
