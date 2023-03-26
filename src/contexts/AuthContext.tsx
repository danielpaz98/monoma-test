import { createContext, useState } from "react";
// INTERFACES
import { User } from "~/interfaces";

interface IAuthContextTypes {
	user: User | null;
	isLoading: boolean;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext({} as IAuthContextTypes);

export function AuthContextProvider({ children }: { children?: React.ReactNode }) {
	const initialUser = JSON.parse(window.sessionStorage.getItem("user") as string);

	const [user, setUser] = useState<IAuthContextTypes["user"]>(initialUser);
	const [isLoading, setIsLoading] = useState(false);

	return <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>{children}</AuthContext.Provider>;
}

export default AuthContext;
