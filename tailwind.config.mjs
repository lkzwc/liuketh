const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				marquee: 'marquee 5s linear infinite',
				glow: 'glow 5s ease-in-out infinite',
			  },
			  keyframes: {
				marquee: {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(-80%)' },
				},
				glow: {
				  '0%, 100%': { 
					'text-shadow': '0 0 10px #fff, 0 0 20px #ff0000',
					'filter': 'brightness(1.2)'
				  },
				  '50%': { 
					'text-shadow': '0 0 20px #ff0000, 0 0 30px #ff0000',
					'filter': 'brightness(1.5)'
				  }
				}
			  }
		},
	},
	darkMode: "class",
	plugins: [
		require('@tailwindcss/typography'),
		nextui(),
	],
}
