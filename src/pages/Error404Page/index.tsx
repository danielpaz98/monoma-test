// LAYOUTS
import MainLayout from "~/layouts/MainLayout";
// COMPONENTS
import { PokedexView, Error404 } from "~/components";

const Error404Page = () => {
	return (
		<MainLayout>
			<div className="flex justify-center items-center">
				<img
					alt="Pokemon gengar gif"
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif"
				/>
				<img
					alt="Pokemon haunter gif"
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/93.gif"
				/>
				<img
					alt="Pokemon gastly gif"
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif"
				/>
			</div>

			<PokedexView className="mt-5">
				<Error404 buttonText="Volver atrás o a la Home" redirectTo="/" text="Página no encontrada" />
			</PokedexView>
		</MainLayout>
	);
};

export default Error404Page;
