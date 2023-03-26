// STYLES
import Styles from "./styles";
// INTERFACES
import { User } from "~/interfaces";

interface IProps extends Omit<Partial<User>, "id | password" | "accessToken"> {
	className?: string;
}

const UserProfile = ({ firstName, lastName, avatar, email, createdAt, className }: IProps) => {
	return (
		<Styles.Container className={className}>
			<Styles.Title className="mb-10">Mi Perfil</Styles.Title>

			<Styles.Content>
				<Styles.AvatarContent className="col-12 col-md-3">
					<Styles.Picture className="avatar avatar-profile">
						<Styles.Image alt="User Avatar" src={avatar} />
					</Styles.Picture>

					<Styles.Button className="mt-14" type="button">
						Editar Perfil
					</Styles.Button>
				</Styles.AvatarContent>

				<Styles.UserInfo>
					<div className="h-52">
						<div className="mt-5">
							<Styles.UserInfoTitle>Nombre Completo</Styles.UserInfoTitle>
							<Styles.UserInfoText>{`${firstName} ${lastName}`}</Styles.UserInfoText>
						</div>

						<div className="mt-5">
							<Styles.UserInfoTitle>Correo electrónico</Styles.UserInfoTitle>
							<Styles.UserInfoText>{email}</Styles.UserInfoText>
						</div>

						<div className="mt-5">
							<Styles.UserInfoTitle>Unido el</Styles.UserInfoTitle>
							<Styles.UserInfoText>{createdAt}</Styles.UserInfoText>
						</div>
					</div>

					<Styles.Button className="!bg-neutral-1 mt-20" type="button">
						Cambiar Contraseña
					</Styles.Button>
				</Styles.UserInfo>
			</Styles.Content>
		</Styles.Container>
	);
};

export default UserProfile;
