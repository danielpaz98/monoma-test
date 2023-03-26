import tw, { styled } from "twin.macro";

export const Styles = {
	Container: styled.span`
		${tw`block text-[#eb5757] pt-1 min-h-[30px]`}

		& p {
			${tw`text-sm flex items-center gap-2`}
		}

		& svg {
			${tw`shrink-0`}
		}
	`,
};

export default Styles;
