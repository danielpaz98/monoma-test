import tw, { styled } from "twin.macro";

export const Styles = {
	Container: styled.section`
		box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
			rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
		${tw`flex items-center gap-3 p-2.5 rounded-md font-semibold max-w-[300px]`}
	`,
	Picture: styled.picture`
		${tw`animate-[pokeballRotate_5000ms_infinite]`}

		@keyframes pokeballRotate {
			30% {
				transform: rotate(0deg);
			}
			30% {
				transform: rotate(13deg);
			}
			50% {
				transform: rotate(-13deg);
			}
			60% {
				transform: rotate(13deg);
			}
			80% {
				transform: rotate(-13deg);
			}
			90% {
				transform: rotate(13deg);
			}
			100% {
				transform: rotate(0deg);
			}
		}
	`,
};

export default Styles;
