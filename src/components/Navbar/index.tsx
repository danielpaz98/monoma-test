// STYLES
import Styles from "./styles";
// COMPONENTS
import DropdownUserMenu from "./DropdownUserMenu";

interface IProps {
	className?: string;
}

const Navbar = ({ className }: IProps) => {
	return (
		<Styles.Header className={className}>
			<Styles.Nav>
				<Styles.Anchor tabIndex={-1} to="/">
					<Styles.Img
						alt="Brand Logo"
						loading="lazy"
						sizes="(max-width: 449px) 100vw, 449px"
						src="https://monoma.io/wp-content/uploads/2022/05/logo-white.png"
						srcSet="https://monoma.io/wp-content/uploads/2022/05/logo-white.png 449w, 
						https://monoma.io/wp-content/uploads/2022/05/logo-white-300x55.png 300w"
					/>
				</Styles.Anchor>

				<ul className="flex items-center gap-[30px] mr-7">
					<li>
						<DropdownUserMenu />
					</li>
				</ul>
			</Styles.Nav>
		</Styles.Header>
	);
};

export default Navbar;
