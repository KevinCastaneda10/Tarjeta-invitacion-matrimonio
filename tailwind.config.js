/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir las carpetas donde estás usando Tailwind
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#d1d5d8", // Añade tu color personalizado aquí
      },
    },
    plugins: [],
  },
};
