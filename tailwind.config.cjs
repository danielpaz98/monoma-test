/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "576px",
			},
			colors: {
				background: "#0f172a",
				primary: "#EA047E",
				secondary: "#FEC260",
				neutral: {
					1: "#1e293b",
					2: "#334155",
					3: "#475569",
					4: "#64748b",
				},
			},
		},
	},
	plugins: [],
};
