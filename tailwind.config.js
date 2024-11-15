/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'stone-gray': '#8494A9',
        'blood-red': '#B81E1E',
        'light-sand': '#F7F5F2',
        'exalt-blue': '#1E3A6C',
        'exalt-gray': '#2E2E2E',
      },
    },
  },
  plugins: [],
}

