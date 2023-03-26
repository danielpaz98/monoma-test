// PLUGINS
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import ProtectedRoute from "../ProtectedRoute";
// PROVIDER CONTEXTS
import { PokemonContextProvider } from "~/contexts/PokemonContext";
// PAGES
import { SignInPage, ProfilePage, PokemonPage, HomePage, Error404Page } from "~/pages";

export default function AppRoutes() {
	return (
		<PokemonContextProvider>
			<Routes>
				<Route element={<SignInPage />} path="signin" />
				<Route element={<ProfilePage />} path="profile" />
				<Route
					element={
						<ProtectedRoute>
							<HomePage />
						</ProtectedRoute>
					}
					path="/"
				/>
				<Route
					element={
						<ProtectedRoute>
							<PokemonPage />
						</ProtectedRoute>
					}
					path="pokemon/:id"
				/>
				<Route element={<Error404Page />} path="*" />
			</Routes>
		</PokemonContextProvider>
	);
}
