import tw, { styled, css } from "twin.macro";
// TYPES
import { ToastVariant } from "./index";

const variantOptions = {
	success: css`
		background-color: #26b26c;
	`,
	warning: css`
		background-color: #ffa41d;
	`,
	error: css`
		background-color: #eb5757;
	`,
};

export const Styles = {
	Toast: styled.div<{ variant?: keyof typeof ToastVariant }>`
		${tw`w-[600px] max-w-full bg-[#26b26c] text-sm font-normal text-white rounded-md py-2.5 px-3 shadow-md`}

		${({ variant }) => variant && variantOptions[variant]}
	`,
	ToastContent: tw.div`flex items-center gap-3`,
	ToastText: tw.p`grow`,
	ToastBtnClose: tw.button`flex items-center h-7 pl-4 outline-none border-l border-l-white`,
};

export default Styles;
