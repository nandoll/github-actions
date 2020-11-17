module.exports = {
  important: true,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      portrait: { raw: '(orientation: portrait)' },
      landscape: { raw: '(orientation: landscape)' },
    },
    zIndex: {
      0: 0,
      5: 5,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },
    container: {
      //padding: '1rem',
      center: true,
    },
    colors: {
      black: '#000',
      white: '#FFF',
      gray: {
        100: '#F3F3F3',
        200: '#BDBDBD',
        500: '#727272',
        700: '#2E2E2E',
      },
      blue: {
        100: '#8DC3DB',
        500: '#0039A6',
      },
      yellow: {
        500: '#FFC102',
      },
    },
    letterSpacing: {
      tightest: '-.07em',
      normal: '0',
    },
    extend: {
      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
      },
      backgroundColor: (theme) => theme('colors'),
      borderColor: (theme) => ({
        ...theme('colors'),
        default: theme('colors.gray.200', 'currentColor'),
      }),
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.25rem',
        default: '0.5rem',
        card: '0.6rem',
        lg: '1.25rem',
        xl: '2rem',
        full: '9999px',
      },
      lineHeight: {
        tighter: '1.125',
      },
      cursor: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        'not-allowed': 'not-allowed',
      },
      fill: {
        current: 'currentColor',
      },
      flex: {
        1: '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        none: 'none',
      },
      flexGrow: {
        0: '0',
        default: '1',
      },
      flexShrink: {
        0: '0',
        default: '1',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        cero: '0rem',
        xxs: '0.65rem',
        xs: '0.7rem',
        sm: '0.9rem',
        base: '1rem',
        lg: '1.2rem',
        xl: '1.36rem',
        '2xl': '1.5rem',
        '3xl': '1.9rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        black: '900',
      },
      height: (theme) => ({
        auto: 'auto',
        ...theme('spacing'),
        full: '100%',
        screen: '100vh',
      }),
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 7px 11px 0 rgba(0,0,0,0.15)',
      xl: '0 0 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 0 50px -12px rgba(0, 0, 0, 0.25)',
      none: 'none',
    },
    minHeight: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited'],
  },
  plugins: [
    ({ addUtilities }) => {
      const utils = {
        '.translate-x-half': {
          transform: 'translateX(50%)',
        },
      }
      addUtilities(utils, ['responsive'])
    },
  ],
}
