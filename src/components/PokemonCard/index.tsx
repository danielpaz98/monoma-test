// STYLES
import Styles from "./styles";
// IMAGES
import questionMarkPokemon from "~/assets/images/question-mark-pokemon.png";
// INTERFACES
import { TPokemonType } from "~/interfaces";

export interface IProps {
	id: number;
	image: string | undefined;
	name: string;
	sprite?: string;
	type: TPokemonType;
	className?: string;
}

const PokemonCard = ({ id, image: propImage, name, sprite, type, className }: IProps) => {
	const image = propImage || questionMarkPokemon;
	const typeSpot = propImage ? type : undefined;

	return (
		<Styles.Card className={className}>
			<Styles.Header>
				<Styles.Text type={type}>#{id}</Styles.Text>
			</Styles.Header>

			<Styles.Spot type={typeSpot}>{<Styles.Image alt={name} src={image} />}</Styles.Spot>

			<Styles.Footer>
				<Styles.Text type={type}>{name}</Styles.Text>
				{sprite && <Styles.Sprite alt={name} src={sprite} />}
			</Styles.Footer>
		</Styles.Card>
	);
};

export default PokemonCard;
