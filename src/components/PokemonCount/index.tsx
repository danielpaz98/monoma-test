// STYLES
import Styles from "./styles";
// ICONS
import { ReactComponent as IconPokeBall } from "~/assets/icons/pokeball.svg";

interface IProps {
	count: number | undefined;
}

const PokemonCount = ({ count }: IProps) => {
	return (
		<Styles.Container>
			<IconPokeBall height={24} width={24} />
			{count && <span>{count} Pokemons</span>}
		</Styles.Container>
	);
};

export default PokemonCount;
