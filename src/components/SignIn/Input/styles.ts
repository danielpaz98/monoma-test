import tw, { styled } from "twin.macro";

export const Styles = {
	Container: tw.div`flex flex-col font-medium text-white gap-1 relative`,
	Label: styled.label<{ required?: boolean }>`
		${({ required }) => required && tw`after:content-[" *"] after:text-[#eb5757]`}
		${tw`font-semibold`}
	`,
	InputContainer: tw.div`bg-neutral-2 flex rounded w-full overflow-hidden font-light p-4`,
	Input: tw.input`bg-[inherit] grow outline-none`,
};

export default Styles;
