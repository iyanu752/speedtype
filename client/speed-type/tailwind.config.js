import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
    darkMode: "class",
    content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	colors: {
  		lightblue: '#71c3f7',
  		blue: '#0028FF',
  		darkblue: '#2c6cbc',
  		white: '#FFFFFF',
  		black: '#000000',
  		gray: '#808080',
  		red: '#ff0000',
		lightred: '#fecaca',
		darkred: '#fca5a5',
		dark: '#000000',
  	},
  	fontFamily: {
  		roboto: [
  			'Roboto',
  			'sans-serif'
  		]
  	},
  	fontWeight: {
  		light: '300',
  		normal: '400',
  		medium: '500',
  		semibold: '600',
  		bold: '700',
  		extrabold: '800'
  	},
  	fontSize: {
  		t1: '18px',
  		t2: '16px',
  		t3: '14px',
  		h1: '56px',
  		h2: '48px',
  		h3: '40px',
  		h4: '32px',
  		h5: '24px',
  		h6: '20px'
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [],
})

