// COMPONENTS
import { Navbar } from "~/components";
// HOOKS
import { useAuth } from "~/hooks";

interface IProps {
	children?: React.ReactNode;
}

export default function MainLayout({ children }: IProps) {
	const { isAuthenticated } = useAuth();

	return (
		<div className="main-container">
			{isAuthenticated && <Navbar />}
			<main className="p-6 overflow-y-auto hover-scrollbar">{children}</main>
		</div>
	);
}
