export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { 
    extend: {
      colors:{
        primary:"#12716A",
        secondary:"#E0F2F3",
        side:"#2C2C2C",
        text:"#1F1F1F"
      },
      fontFamily: {
        heading: ['Oswald','sans-serif'],
        body: ['Yantramanav','sans-serif'],
      }    
    } 
  },
  plugins: [],
}