// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  plugins: [
    require('daisyui'),
  ],
  theme: {
    extend: {
      // Add your theme settings here
    },
  },
  daisyui: {
    themes: ["dim"],
  },
}
