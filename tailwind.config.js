/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					100: '#112530',
					200: '#60b4e0'
				},
			},
		},
	},
	plugins: [],
}
