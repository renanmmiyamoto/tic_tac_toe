import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#0e2a3a',
				secondary: '#3e5461',
				'secondary-hover': '#48677A',
				'player-one': '#FF7B73',
				'player-two': '#83C8CA',
			},
			color: {
				'player-one': '#C65F5A',
				'player-two': '#669C9E',
			},
		},
	},
	plugins: [],
}
export default config
