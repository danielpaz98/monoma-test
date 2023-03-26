import { StrictMode } from "react";
// PLUGINS
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// PROVIDER CONTEXTS
import { AuthContextProvider } from "~/contexts/AuthContext";
// COMPONENTS
import App from "./App";
// TAILWIND CSS
import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
	<StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</BrowserRouter>
	</StrictMode>
);
