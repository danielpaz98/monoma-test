import { createContext, useState } from "react";
// INTERFACES
import { IPokemonsData } from "~/interfaces";

interface IPokemonContextTypes {
	pokemons: IPokemonsData | null | undefined;
	setPokemons: React.Dispatch<React.SetStateAction<IPokemonsData | null | undefined>>;
}

const PokemonContext = createContext({} as IPokemonContextTypes);

export function PokemonContextProvider({ children }: { children?: React.ReactNode }) {
	const [pokemons, setPokemons] = useState<IPokemonContextTypes["pokemons"]>();

	return <PokemonContext.Provider value={{ pokemons, setPokemons }}>{children}</PokemonContext.Provider>;
}

export default PokemonContext;
