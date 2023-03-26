import tw, { styled } from "twin.macro";

export const Styles = {
	Card: styled.article`
		border: 1px solid rgba(255, 255, 255, 0.16);
		${tw`bg-background mx-auto max-w-[500px] min-h-[440px] p-5 xs:p-8 rounded`}
	`,
	Form: tw.form`flex flex-col gap-3 text-base`,
	Title: tw.h3`text-center text-[#f2f2f2] text-3xl font-semibold mb-4`,
	Description: tw.p`text-[#c7c7c7] text-center xs:text-left mb-10 font-light break-words`,
	Button: styled.button`
		${tw`w-full font-medium rounded-md cursor-pointer py-3 px-5 
			outline-none text-[#f2f2f2] text-base uppercase bg-neutral-1
		`}

		&:disabled {
			${tw`cursor-not-allowed bg-[#c7c7c7]/[0.25] text-[#999999]`}
		}
	`,
};

export default Styles;
