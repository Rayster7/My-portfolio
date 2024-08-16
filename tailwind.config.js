// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Extend or customize the theme as needed
    },
  },
  plugins: [],
  corePlugins: {
    // Disable utilities that might conflict with Bootstrap
    preflight: false,
  },
};
