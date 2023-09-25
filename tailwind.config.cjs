/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				base: ['10px']
			}
		}
	},

	plugins: []
};

module.exports = config;
