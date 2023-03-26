import { useContext, useEffect } from "react";
// PLUGINS
import { useLocation, useNavigate } from "react-router-dom";
import toast, { ToastOptions } from "react-hot-toast";
// INTERFACES
import { User } from "~/interfaces";
// CONTEXTS
import AuthContext from "~/contexts/AuthContext";
// SERVICES
import { signIn as signInService } from "~/services";

export default function useAuth() {
	const { user, setUser: updateUser, isLoading, setIsLoading } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const isAuthenticated = Boolean(user?.accessToken);

	const setUser = (user: User) => {
		updateUser(user);
		window.sessionStorage.setItem("user", JSON.stringify(user));
	};

	const removeUser = () => {
		updateUser(null);
		window.sessionStorage.removeItem("user");
	};

	const signIn = async ({ email, password }: { email: string; password: string }) => {
		setIsLoading(true);

		const user = await signInService({ email, password })
			.catch((err) => {
				toast(err.message, { variant: "error", duration: 3000 } as ToastOptions);
			})
			.finally(() => setIsLoading(false));

		if (user) setUser(user);
		else toast("Email o contraseña incorrecta.", { variant: "warning", duration: 3000 } as ToastOptions);
	};

	const signOut = async () => {
		removeUser();
		navigate("/signin");
	};

	useEffect(() => {
		if (location.pathname === "/signin" && isAuthenticated) navigate("/");
	}, [isAuthenticated, location, navigate]);

	return { user, signIn, signOut, setIsLoading, isLoading, isAuthenticated };
}
