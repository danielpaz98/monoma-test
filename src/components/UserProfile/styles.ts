import tw from "twin.macro";

export const Styles = {
	Container: tw.div``,
	Content: tw.div`mt-5 flex flex-wrap gap-10 md:grid md:grid-cols-[30%_40%] justify-around`,
	AvatarContent: tw.div` grid place-items-center`,
	UserInfo: tw.div``,
	UserInfoTitle: tw.h3`text-2xl text-neutral-4 font-bold`,
	UserInfoText: tw.p`text-lg`,
	Title: tw.h1`text-4xl font-bold`,
	Picture: tw.picture`block text-4xl rounded-full w-64 h-64`,
	Image: tw.img`text-4xl rounded-[inherit]`,
	Button: tw.button`w-full font-medium rounded-md cursor-pointer py-3 px-5 
	outline-none text-[#f2f2f2] text-base uppercase bg-neutral-4`,
};

export default Styles;
