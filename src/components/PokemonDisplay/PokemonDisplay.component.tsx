import React from 'react';

import style from './PokemonDisplay.module.scss';

import Pokemon from '../../interfaces/Pokemon.interface';

export interface Props {
	pokemon: Pokemon;
}

const PokemonDisplay: React.SFC<Props> = ({
	pokemon: { name, numberOfAbilities, baseExperience, imageUrl }
}) => {
	return (
		<div className={style.card}>
			<img className={style.img} src={imageUrl} alt="pokemon image" />
			<p className={style.name}>{name}</p>
			<p className={style.ability}>
				number of abilities: {numberOfAbilities}
			</p>
			<p className={style.experience}>
				base experience: {baseExperience}
			</p>
		</div>
	);
};

export default PokemonDisplay;
