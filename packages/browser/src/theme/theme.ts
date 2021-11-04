import { DefaultTheme } from 'styled-components';

import { breakpoints } from './variables';
import {
  alpha,
  breakpoint,
  cols,
  colsAll,
  constSize,
  gridClasses,
  rows,
  rowsAll,
  size,
  tint,
  transition
} from './mixins';

const createTheme = (): DefaultTheme => {
  const unit = 'rem';

  const multipliers = {
    px: 4,
    rem: 1
  };

  const colors = {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    primary: {
      main: '#001999',
      light: '#0026e6',
      dark: '#000d4d',
      contrast: '#ffffff'
    },
    secondary: {
      main: '#0055ff',
      light: '#80aaff',
      dark: '#003399',
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
      dark: '#357500',
      contrast: '#ffffff'
    },
    danger: {
      main: '#ff0034',
      light: '#ff335c',
      dark: '#b20024',
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
  };

  const fontSizes = {
    tiny: '0.75rem', // 12px
    small: '0.875rem', // 14px
    normal: '1rem', // 16px
    big: '1.125rem', // 18px
    large: '1.5rem', // 24px
    huge: '2rem', // 32px
    super: '3rem' // 48px
  };

  const sizes = {
    xxxs: '0.125rem', // 2px
    xxs: '0.25rem', // 4px
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '2.5rem', // 40px
    xxl: '3rem', // 48px
    xxxl: '4rem', // 64px
    xxxxl: '5rem' // 80px
  };

  const sizeMixin = size(multipliers.rem, 'rem');

  const theme: DefaultTheme = {
    breakpoints: {
      keys: Object.keys(breakpoints),
      values: breakpoints,
      unit: 'px'
    },
    font: {
      base: '16px',
      fontFamily: '"Montserrat", "Ubuntu", "Helvetica", "Arial", sans-serif',
      letterSpacing: '0.005rem',
      lineHeight: 1.45,
      size: fontSizes,
      unit: 'rem',
      weight: { light: 300, regular: 400, medium: 500, bold: 700, black: 900 }
    },
    mixins: {
      breakpoint,
      alpha,
      cols: cols(sizeMixin),
      colsAll: colsAll(cols(sizeMixin)),
      constSize,
      gridClasses: gridClasses(breakpoints),
      rows: rows(sizeMixin),
      rowsAll: rowsAll(sizeMixin),
      size: sizeMixin,
      tint,
      transition
    },
    multipliers,
    colors,
    shape: {
      borderRadius: '1rem'
    },
    sizes,
    shadows: {
      init: `0 0 0 0 ${alpha(colors.primary.main, 0)}`,
      focus: `0 0 0 ${sizes.xxs} ${alpha(colors.secondary.main, 60)}`,
      focusDanger: `0 0 0 ${sizes.xxs} ${alpha(colors.danger.main, 60)}`
    },
    unit
  };

  return theme;
};

export default createTheme();
