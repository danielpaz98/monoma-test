// PLUGINS
import { Navigate, Outlet } from "react-router-dom";
// HOOKS
import { useAuth } from "~/hooks";

interface IProps {
	children?: React.ReactNode;
	redirectTo?: string;
}

export default function ProtectedRoute({ children, redirectTo = "/signin" }: IProps = {}) {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate replace to={redirectTo} />;
	}

	return children ? <>{children}</> : <Outlet />;
}
