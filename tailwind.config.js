export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6600',
        secondary: '#1a1a1a',
        accent: '#00d9ff',
        dark: '#0f0f0f',
        darker: '#0a0a0a',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF6600 0%, #ff8533 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
      },
    },
  },
};
