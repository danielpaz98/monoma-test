import tw, { styled } from "twin.macro";
// INTERFACES
import { TPokemonType } from "~/interfaces";
// UTILS STYLES
import { getColorPokemonType } from "~/styles/Utils";

export const Styles = {
	Content: tw.section`absolute h-[80px] w-full p-4 bottom-0`,
	Image: tw.img`object-contain w-full h-full`,
	Footer: tw.section`grid w-full h-full px-6 py-4`,
	FooterContent: tw.div`mt-auto flex flex-wrap justify-center xs:justify-between gap-1`,
	Card: styled.article`
		${tw`flex flex-col max-w-[400px] h-[460px] bg-[#f8f8f8] rounded-2xl overflow-hidden shadow-md justify-end`}
	`,
	Figure: styled.figure<{ type?: TPokemonType }>`
		${tw`relative bg-neutral-4 block h-[65%]`}
	`,
	FirstText: tw.span`text-background mx-auto xs:mx-auto text-lg font-bold w-full xs:w-auto text-center xs:text-left`,
	SecondText: tw.span`block text-lg text-neutral-4 text-center xs:text-left xs:truncate max-w-[240px] font-bold capitalize`,
	Title: styled.h2<{ type?: TPokemonType }>`
		color: ${({ type }) => type && getColorPokemonType(type)};

		${tw`text-3xl text-center xs:text-left font-bold capitalize`}
	`,
	Badge: styled.span<{ type?: TPokemonType }>`
		${tw`inline-block bg-neutral-1 text-white font-bold py-1 px-8 rounded-2xl`}

		background-color: ${({ type }) => type && getColorPokemonType(type)};
	`,
};

export default Styles;
