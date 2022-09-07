/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  mode: 'jit',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '40rem',
      },
      width:{
        '98': '29rem',
      },
      container: {
        'center' : true,
      
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}


