import React from 'react';

import Pokemon from '../../interfaces/Pokemon.interface';

export interface Props {
	pokemon: Pokemon;
}

const PokemonDisplay: React.SFC<Props> = ({
	pokemon: { name, numberOfAbilities, baseExperience, imageUrl }
}) => {
	return (
		<div>
			<img src={imageUrl} alt="pokemon image" />
			<p>{name}</p>
			<p>number of abilities: {numberOfAbilities}</p>
			<p>base experience: {baseExperience}</p>
		</div>
	);
};

export default PokemonDisplay;
