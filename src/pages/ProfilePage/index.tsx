// STYLES
import Styles from "./styles";
// LAYOUTS
import UserProfile from "~/components/UserProfile";
import MainLayout from "~/layouts/MainLayout";
// HOOKS
import { useAuth } from "~/hooks";

const ProfilePage = () => {
	const { user } = useAuth();

	return (
		<MainLayout>
			<Styles.Container>
				<UserProfile
					avatar={user?.avatar}
					createdAt={user?.createdAt}
					email={user?.email}
					firstName={user?.firstName}
					lastName={user?.lastName}
				/>
			</Styles.Container>
		</MainLayout>
	);
};

export default ProfilePage;
