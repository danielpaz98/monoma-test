import tw, { styled, css } from "twin.macro";
// INTERFACES
import { TPokemonType } from "~/interfaces";
// UTILS STYLES
import { getColorPokemonType } from "~/styles/Utils";

const fadeIn = css`
	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateY(40px);
		}
		100% {
			opacity: 1;
			transform: translateY(0px);
		}
	}
`;

export const Styles = {
	Header: tw.div`flex justify-end`,
	Image: tw.img`object-contain w-full h-full`,
	Footer: tw.div`flex justify-between items-end`,
	Sprite: tw.img`max-w-[48px] object-contain`,
	Spot: styled.picture<{ type?: TPokemonType }>`
		background: ${({ type }) => type && getColorPokemonType(type)};

		${tw`self-center grow block h-44 rounded-full`}
	`,
	Card: styled.article`
		${tw`flex flex-col gap-2 w-[300px] xs:w-[225px] h-[320px] bg-neutral-1 p-4 rounded-md shadow-md animate-[fadeIn_500ms_both]`}

		${fadeIn}
	`,
	Text: styled.span<{ type?: TPokemonType }>`
		color: ${({ type }) => type && getColorPokemonType(type)};

		${tw`text-xl font-bold capitalize`}
	`,
};

export default Styles;
