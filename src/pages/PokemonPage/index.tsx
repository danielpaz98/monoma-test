// PLUGINS
import { useParams, Navigate } from "react-router-dom";
// LAYOUTS
import MainLayout from "~/layouts/MainLayout";
// COMPONENTS
import { DetailCard, Loader } from "~/components";
// HOOKS
import usePokemon from "~/hooks/usePokemon";

const PokemonPage = () => {
	const params = useParams();
	const id = parseInt(params.id as string);
	const { pokemon, isLoading, isError } = usePokemon({ id });

	if (isError) return <Navigate replace to="/404" />;

	if (isLoading)
		return (
			<Loader
				className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
				isLoading={isLoading}
				text="Cargando..."
			/>
		);

	if (!pokemon) return null;

	return (
		<MainLayout>
			<DetailCard
				abilities={pokemon.abilities}
				className="mx-auto"
				id={pokemon.id}
				image={
					pokemon.sprites.other?.home?.front_default ||
					pokemon.sprites?.other?.dream_world?.front_default ||
					pokemon.sprites.other?.["official-artwork"]?.front_default
				}
				moves={pokemon.moves}
				name={pokemon.name}
				types={pokemon.types}
				weight={pokemon.weight}
			/>
		</MainLayout>
	);
};

export default PokemonPage;
