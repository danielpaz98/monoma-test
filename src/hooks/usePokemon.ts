import { useEffect, useState } from "react";
// HOOKS
import usePokemons from "~/hooks/usePokemons";
// SERVICES
import { getPokemonById as getPokemonByIdService } from "~/services";

type HookParams = {
	id: number;
};

export default function usePokemon({ id }: HookParams) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const { pokemons } = usePokemons();

	const pokemonFromCache = pokemons?.results?.find((pokemon) => pokemon.id === id);

	const [pokemon, setPokemon] = useState(pokemonFromCache);

	useEffect(() => {
		if (!pokemon) {
			setIsLoading(true);

			getPokemonByIdService({ id })
				.then((data) => {
					setPokemon(data);
					setIsError(false);
				})
				.finally(() => setIsLoading(false))
				.catch(() => setIsError(true));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, pokemon]);

	return { pokemon, isLoading, isError };
}
