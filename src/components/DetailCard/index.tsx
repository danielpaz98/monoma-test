// STYLES
import Styles from "./styles";
// IMAGES
import questionMarkPokemon from "~/assets/images/question-mark-pokemon.png";
// INTERFACES
import { IPokemonAbilities, IPokemonMoves, IPokemonTypes } from "~/interfaces";

export interface IProps {
	id: number;
	image: string | undefined;
	name: string;
	weight: number;
	moves: IPokemonMoves[];
	abilities: IPokemonAbilities[];
	types: IPokemonTypes[];
	className?: string;
}

const DetailCard = ({
	image: propImage,
	name,
	weight,
	moves: movesProp,
	abilities: abilitiesProp,
	types,
	className,
}: IProps) => {
	const image = propImage || questionMarkPokemon;
	const abilities = abilitiesProp.map((ability) => ability.ability.name).join(", ");
	const moves = movesProp
		.map((move) => move.move.name)
		.slice(0, 2)
		.join(", ");

	return (
		<Styles.Card className={className}>
			<Styles.Figure type={types[0]?.type?.name}>
				<Styles.Image alt={name} src={image} />

				<Styles.Content>
					<ul className="flex gap-1">
						{types.map(({ type }) => (
							<li key={type.name}>
								<Styles.Badge className="capitalize flex-shrink-0 !py-1 !px-2" type={type.name}>
									{type.name}
								</Styles.Badge>
							</li>
						))}

						<Styles.Badge className="flex-shrink-0 ml-auto">Peso: {weight / 10} kg</Styles.Badge>
					</ul>
				</Styles.Content>
			</Styles.Figure>

			<Styles.Footer>
				<Styles.Title type={types[0]?.type?.name}>{name}</Styles.Title>

				<Styles.FooterContent>
					<ul className="flex flex-wrap xs:flex-none justify-between gap-x-2">
						<Styles.FirstText className="">Movimientos: </Styles.FirstText>
						<li className="mx-auto xs:mx-auto">
							<Styles.SecondText className="capitalize" title={moves}>
								{moves}
							</Styles.SecondText>
						</li>
					</ul>

					<ul className="flex flex-wrap xs:flex-none justify-between gap-x-2">
						<Styles.FirstText>Habilidades: </Styles.FirstText>
						<li className="mx-auto xs:mx-auto">
							<Styles.SecondText className="capitalize" title={abilities}>
								{abilities}
							</Styles.SecondText>
						</li>
					</ul>
				</Styles.FooterContent>
			</Styles.Footer>
		</Styles.Card>
	);
};

export default DetailCard;
