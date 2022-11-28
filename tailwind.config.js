/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'texture-one': 'url:{"./components/assets/Rectangle 5header_Background.png"}',
        'hero-board': "url('./components/assets/choppingboard.png')",
        'texture-two': 'url("./components/assets/banner_textile.png")',
        'texture-three': "url('./components/assets/Ellipse 21.png')",
        'home-texture':"url('./components/assets/homeBackground.png')",
        'pattern-one': "url('./components/assets/Ellipse 10.png')",
        'texture-four' : "url('./components/assets/cat_nav_texture.png')",
      },
      backgroundSize:{
        '50%': '50%',
        '75%': '75%',
      },
      fontFamily: {
        display: ['DM Sans', "sans-serif"],
        heading: ['ArgentumSansRegular','sans-serif'],
      },
      screens:{
        'sm': "480px",
        'md': "800px",
        'lg': "1024px",
        'xl': "1280px",
        '2xl': "1536px",
      },
      width:{
        '450':'450px',
        '430': '430px',
        '560': '560px',
        '650': '650px',
        '750': '750px',
        "48.58": "48.58px", 
        '670': '676px', 
        "517": '517px',
      },
      height:{
        "39.75": "39.75px",
      },
      backgroundColor:{
        "gray-custom": "rgba(230, 230, 230, 0.7)",
        "gray-bg": '#E4E4E4',
        "gray-input": 'rgba(217, 217, 217, 0.18)',
        "gray-check": "#f8f8f8",
      },
      textColor:{
        "lemon-sign-in": '#26be00',
        'cancel': 'rgba(211,6,6,1)',
        "gray-input": 'rgba(217, 217, 217, 0.18)',
        "gray-check": "#a7a7a7",
      },
      borderColor:{
        'cancel': 'rgba(211,6,6,1)',
      },
      accentColor:{
        'check': "#26be00",
      },
    },
  },
  plugins: [],
}
