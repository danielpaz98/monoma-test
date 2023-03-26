import { useContext, useEffect, useState } from "react";
// CONTEXTS
import PokemonContext from "~/contexts/PokemonContext";
// SERVICES
import { getPokemons as getPokemonsService } from "~/services";

interface HookParams {
	limit?: number;
	offset?: number;
}

export default function usePokemons({ limit, offset }: HookParams = {}) {
	const [isLoading, setIsLoading] = useState(false);
	const { pokemons, setPokemons } = useContext(PokemonContext);

	useEffect(() => {
		setIsLoading(true);

		getPokemonsService({ limit, offset })
			.then(setPokemons)
			.finally(() => setIsLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [limit, offset]);

	return { pokemons, isLoading };
}
