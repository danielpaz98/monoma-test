import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";

export const Styles = {
	Container: tw.section`p-5 flex flex-col items-center bg-neutral-1 w-full h-full`,
	Content: tw.div`font-bold flex justify-center items-center`,
	Text: styled.span`
		font-size: clamp(4rem, 18vw, 12rem);
		${tw`-translate-y-[10%] leading-none`}
	`,
	Description: styled.span`
		font-size: clamp(1rem, 5vw, 2rem);
		${tw`uppercase font-bold`}
	`,
	Image: tw.img`w-[18vw] lg:w-[35%]`,
	Link: styled(Link)`
		${tw`[&>svg]:flex-shrink-0 [&>svg]:xs:block [&>svg]:hidden`}

		${tw`flex items-center justify-center gap-4 min-w-[28%] font-bold rounded-md cursor-pointer py-3 px-5 
			outline-none text-white text-sm uppercase bg-background
		`}
	`,
};

export default Styles;
