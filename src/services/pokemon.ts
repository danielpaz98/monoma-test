// INTERFACES
import { IPokemon, IPokemonsData, IPokemonData } from "~/interfaces";

type IPokemonServiceParams = {
	limit?: number;
	offset?: number;
};

const baseURL = "https://pokeapi.co/api/v2/";

export async function getPokemons({ limit, offset }: IPokemonServiceParams): Promise<IPokemonsData> {
	const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
	const _data: IPokemonData = await res.json();

	const promises = _data.results.map(async (pokemon) => {
		const res = await fetch(pokemon.url);
		const data: IPokemon = await res.json();
		return data;
	});

	const results = await Promise.all(promises);
	const data = { ..._data, results };

	return data;
}

export async function getPokemonById({ id }: Pick<IPokemon, "id">): Promise<IPokemon> {
	const res = await fetch(`${baseURL}pokemon/${id}`);
	const data = await res.json();

	return data;
}
