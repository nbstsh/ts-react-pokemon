import React, { Component } from 'react';

import User from '../../interfaces/User.interface';

interface SearchState {
	name: string;
	numberOfAbility: number;
	baseExperience: number;
	imageUrl: string;
}

class PokemonSearch extends Component<User, SearchState> {
	constructor(props: User) {
		super(props);
		this.state = {
			name: '',
			numberOfAbility: 0,
			baseExperience: 0,
			imageUrl: ''
		};
	}
	render() {
		const { name, numberOfPokemons } = this.props;

		return (
			<div>
				<p>
					User {name}{' '}
					{numberOfPokemons && (
						<span>has {numberOfPokemons} pokemons!</span>
					)}
				</p>
				<input type="text" />
				<button>search </button>
			</div>
		);
	}
}

export default PokemonSearch;
