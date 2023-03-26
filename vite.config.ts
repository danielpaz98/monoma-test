import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return defineConfig({
		server: {
			port: parseInt(env.VITE_APP_PORT),
		},
		optimizeDeps: {
			esbuildOptions: {
				target: "es2020",
			},
		},
		esbuild: {
			// https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
			logOverride: { "this-is-undefined-in-esm": "silent" },
		},
		plugins: [
			react({
				babel: {
					plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
				},
			}),
			svgr({
				svgrOptions: {
					dimensions: false,
				},
			}),
			eslint(),
		],
		resolve: {
			alias: [{ find: "~/", replacement: "/src/" }],
		},
	});
};
