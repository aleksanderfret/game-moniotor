import { Theme } from 'styled-components';

import { breakpoints } from './variables';
import { breakpoint, constSize, transition } from './mixins';

const theme: Theme = {
  breakpoints: {
    keys: Object.keys(breakpoints),
    values: breakpoints,
    unit: 'px'
  },
  constSize,
  media: breakpoint,
  palette: {
    common: {
      black: '#00000',
      white: '#ffffff'
    },
    primary: {
      main: '#1414b8',
      light: '#4343C6',
      dark: '#0e0e80',
      contrast: '#ffffff'
    },
    secondary: {
      main: '#2979ff',
      light: '#5393ff',
      dark: '#1c54b2',
      contrast: '#ffffff'
    },
    warning: {
      main: '#c98200',
      light: '#d39b33',
      dark: '#8c5b00',
      contrast: '#ffffff'
    },
    success: {
      main: '#4ca801',
      light: '#6FB933',
      dark: '#b27d00',
      contrast: '#ffffff'
    },
    error: {
      main: '#ff0034',
      light: '#ff335c',
      dark: '#357500',
      contrast: '#ffffff'
    },
    info: {
      main: '#00a28b',
      light: '#33B4A2',
      dark: '#007161',
      contrast: '#ffffff'
    },
    background: {
      main: '#fafafa',
      light: '#ffffff',
      dark: '#f5f5f5',
      contrast: '#000000'
    },
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  shape: {
    borderRadius: '10px'
  },
  size: {
    calc: (multiplicand: number): string => {
      const { multiplier, unit } = theme.size;

      return `${multiplicand * multiplier}${unit}`;
    },
    multiplier: 1,
    values: {
      xxxs: '0.125rem', // 2px
      xxs: '0.25rem', // 4px
      xs: '0.5rem', // 8px
      sm: '1rem', // 16px
      md: '1.5rem', // 24px
      lg: '2rem', // 32px
      xl: '3rem', // 48px
      xxl: '4rem', // 64px
      xxxl: '5rem' // 80px
    },
    unit: 'rem'
  },
  spacing: {
    cols: (value: number) => {
      const { calc } = theme.size;

      return `
        & > :not(:last-child) {
          margin-right: ${calc(value)};
        }
      `;
    },
    colsAll: (value: number) => {
      const { calc } = theme.size;

      return `
        & > * {
          margin-right: ${calc(value)};
        }
      `;
    },
    rows: (value: number) => {
      const { calc } = theme.size;

      return `
        & > :not(:last-child) {
          margin-bottom: ${calc(value)};
        }
      `;
    },
    rowsAll: (value: number) => {
      const { calc } = theme.size;

      return `
        & > * {
          margin-bottom: ${calc(value)};
        }
      `;
    }
  },
  transition,
  typography: {
    base: '16px',
    fontFamily: '"Montserrat", "Ubuntu", "Helvetica", "Arial", sans-serif',
    size: {
      tiny: '0.75rem', // 12px
      small: '0.875rem', // 14px
      normal: '1rem', // 16px
      big: '1.125rem', // 18px
      large: '1.5rem', // 24px
      huge: '2rem', // 32px
      super: '3rem' // 48px
    },
    unit: 'rem',
    weight: { light: 300, regular: 400, medium: 500, bold: 700, black: 900 }
  }
};

export default theme;
