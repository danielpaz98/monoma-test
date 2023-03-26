import tw from "twin.macro";
import { Link } from "react-router-dom";

export const Styles = {
	Header: tw.header`sticky top-0 z-10 min-h-[60px] border-b-[1px] border-[#131517] bg-neutral-2 sm:py-4 sm:px-10 py-2 px-4`,
	Nav: tw.nav`flex justify-between`,
	Anchor: tw(Link)`w-1/3 md:w-1/4 lg:w-1/5`,
	Img: tw.img`object-contain w-full h-full`,
};

export default Styles;
