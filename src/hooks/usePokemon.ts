import { useEffect, useState } from "react";
// PLUGINS
import { useParams } from "react-router-dom";
// HOOKS
import usePokemons from "~/hooks/usePokemons";
// SERVICES
import { getPokemonById as getPokemonByIdService } from "~/services";

export default function usePokemon() {
	const params = useParams();
	const id = parseInt(params.id as string);

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
