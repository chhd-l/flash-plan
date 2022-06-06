module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: '#6CA100',
      black: '#0B121C',
      white: '#FFFFFF',
      gray: {
        300: '#AEAEB0',
        400: '#CCCCCC',
        500: '#E6E6E6 ',
        600: '#f4f4f4',
      },
    },

    extend: {
      width: {
        am275: '275px',
        am282: '282px',
        am284: '284px',
        am384: '384px',
        am242: '242px',
        am342: '342px',
        am377: '377px',
        am450: '450px',
        am525: '525px',
        am646: '646px',
        am1200: '1200px',
      },
      height: {
        am26: '26px',
        am57: '57px',
        am70: '70px',
        am148: '148px',
        am222: '222px',
        18: '300px',
      },
      lineHeight: {
        am26: '26px',
      },
      fontSize: {
        am12: '12px',
        am14: '14px',
        am16: '16px',
        am20: '20px',
        am22: '22px',
        am24: '24px',
        am26: '26px',
        am50: '50px',
      },
      padding: {
        am20: '20px',
        am24: '24px',
        am30: '30px',
        am43: '43px',
      },
      margin: {
        am_5: '5%',
        am_7: '7%',
        am_11: '11%',
        am_19: '19%',
        am_33: '33%',
        am20: '20px',
        am25: '25px',
        am28: '28px',
        am30: '30px',
        am43: '43px',
        am50: '50px',
      },
      textColor: {
        am_568300: '#568300',
        am_373737: '#373737',
        am_333333: '#333333',
        am_666666: '#666666',
      },
      inset: {
        am50: '50px',
        am160: '160px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
