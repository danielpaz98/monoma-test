import { useState } from "react";
// PLUGINS
import { Link } from "react-router-dom";
// COMPONENTS
import { PokedexView, PokemonCard, PokemonCount, Pagination, Loader } from "~/components";
// LAYOUTS
import MainLayout from "~/layouts/MainLayout";
// HOOKS
import usePokemons from "~/hooks/usePokemons";

const HomePage = () => {
	const limit = 10;
	const [offset, setOffset] = useState(0);
	const { pokemons, isLoading } = usePokemons({ limit, offset });

	return (
		<MainLayout>
			<div className="mx-auto max-w-[1140px]">
				<PokemonCount count={pokemons?.count} />

				<PokedexView className="mt-5">
					{pokemons?.results?.map((pokemon) => (
						<Link key={pokemon.id} to={`pokemon/${pokemon.id}`}>
							<PokemonCard
								id={pokemon.id}
								image={
									pokemon.sprites.other?.home?.front_default ||
									pokemon.sprites?.other?.dream_world?.front_default ||
									pokemon.sprites.other?.["official-artwork"]?.front_default
								}
								name={pokemon.name}
								sprite={pokemon.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default}
								type={pokemon.types[0]?.type?.name}
							/>
						</Link>
					))}
				</PokedexView>

				<div className="flex flex-wrap gap-5 mt-3">
					<Loader className="mx-auto sm:mx-0 sm:mb-0" isLoading={isLoading} text="Cargando..." />

					<Pagination
						className="mx-auto sm:mx-0"
						itemsPerPage={limit}
						pages={pokemons?.count}
						position="right"
						onChangePage={({ offset }) => setOffset(offset)}
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default HomePage;
