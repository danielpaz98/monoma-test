import tw from "twin.macro";

export const Styles = {
	Container: tw.div`relative`,
	Picture: tw.nav`block w-10 h-10 rounded-full`,
	Img: tw.img`object-contain rounded-[inherit]`,
	Toggle: tw.div`cursor-pointer flex items-center gap-3`,
	MenuContainer: tw.div`absolute translate-x-1/2 right-1/2 top-12 z-10 divide-y rounded-lg border border-neutral-1/[0.35] w-44 p-2 bg-neutral-2 divide-gray-600`,
	Menu: tw.ul`py-2 text-sm text-gray-200`,
	MenuItem: tw.li`rounded-md px-2 py-2 hover:bg-gray-600 hover:text-white`,
};

export default Styles;
