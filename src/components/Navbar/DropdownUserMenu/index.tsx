import { useRef, useState } from "react";
// PLUGINS
import { Link } from "react-router-dom";
// STYLES
import Styles from "./styles";
// ICONS
import { ReactComponent as ArrowDownIcon } from "~/assets/icons/arrow-down.svg";
import { ReactComponent as UserIcon } from "~/assets/icons/user.svg";
import { ReactComponent as LogoutIcon } from "~/assets/icons/logout.svg";
// HOOKS
import { useAuth, useOnClickOutside } from "~/hooks";

interface IProps {
	className?: string;
}

const DropdownUserMenu = ({ className }: IProps) => {
	const { user, signOut } = useAuth();

	const [toggle, setToggle] = useState(false);

	const refMenu = useRef(null);

	useOnClickOutside(refMenu, () => setToggle(false));

	return (
		<Styles.Container ref={refMenu} className={className}>
			<Styles.Toggle onClick={() => setToggle(!toggle)}>
				<Styles.Picture>
					<Styles.Img alt="Profile Avatar" className="object-contain rounded-[inherit]" src={user?.avatar} />
				</Styles.Picture>

				<i>
					<ArrowDownIcon className="pointer-events-none" fill="#fefefe" height={14} width={14} />
				</i>
			</Styles.Toggle>

			{toggle && (
				<Styles.MenuContainer>
					<Styles.Menu>
						<Styles.MenuItem>
							<Link className="flex items-center gap-2" to="/profile">
								<UserIcon height={24} width={24} />
								<span>Ajustes de perfil</span>
							</Link>
						</Styles.MenuItem>
					</Styles.Menu>

					<Styles.Menu>
						<Styles.MenuItem>
							<button className="flex items-center gap-2" type="button" onClick={signOut}>
								<LogoutIcon height={24} width={24} />
								<span>Cerrar sesión</span>
							</button>
						</Styles.MenuItem>
					</Styles.Menu>
				</Styles.MenuContainer>
			)}
		</Styles.Container>
	);
};

export default DropdownUserMenu;
