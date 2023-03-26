// INTERFACES
import { TPokemonType } from "~/interfaces";

export const typesPokemon = {
	normal: "#a4acaf",
	fire: "#ff7402",
	water: "#4592c4",
	electric: "#bba909",
	grass: "#9bcc50",
	ice: "#51c4e7",
	fighting: "#bb5544",
	poison: "#a33ea1",
	ground: "#ab9842",
	flying: "#3dc7ef",
	psychic: "#f366b9",
	bug: "#729f3f",
	rock: "#a38c21",
	ghost: "#4d5b64",
	dragon: "#7766ee",
	dark: "#7b62a3",
	steel: "#9eb7b8",
	fairy: "#fdb9e9",
	unknown: "#757575",
};

export const getColorPokemonType = (type: TPokemonType) => {
	return type ? typesPokemon[type] : null;
};
