/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: '#FCFCFC',
				foreground: '#1A292E',
				accent1: '#48AC39',
				accent2: '#418738',
				accent3: '#3A6236'
				// Add as many as you need
			}
		}
	},

	plugins: []
};

module.exports = config;
