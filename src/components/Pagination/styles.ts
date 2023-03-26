import tw, { styled } from "twin.macro";
// INTERFACES
import { IProps } from "./index";

export const Styles = {
	Pagination: styled.div<{ position: IProps["position"] }>`
		${tw`flex flex-wrap justify-start items-center gap-5 text-white font-medium border-t-0`}

		${({ position }) => (position === "right" && tw`ml-auto`) || (position === "center" && tw`mx-auto`)}
	`,
	TotalPages: tw.p`mx-auto sm:mx-0`,
	Controls: tw.div`flex bg-neutral-2 mx-auto sm:mx-0 rounded overflow-hidden border border-[#c7c7c7]/[0.2]`,
	ControlsIndex: tw.div`flex [&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-neutral-1`,
	Button: styled.button<{ isSelected?: boolean }>`
		${({ isSelected }) => isSelected && tw`bg-neutral-1`}

		${tw`flex items-center py-1 px-2 outline-none disabled:cursor-not-allowed disabled:text-[#c7c7c7]/[0.25]`}

		${tw`[&:not(:disabled):active]:bg-[#4b4b5a] [&:not(:disabled):active]:text-white`}
		
		${tw`[&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-neutral-1`}
	`,
};

export default Styles;
