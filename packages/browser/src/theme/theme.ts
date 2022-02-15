import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
} from '@mui/material/styles';

import { breakpoints, Font, Multipliers, Shadow, Sizes, Utils } from './types';
import {
  alpha,
  cols,
  colsAll,
  constSize,
  gridClasses,
  rows,
  rowsAll,
  size,
  tint,
} from './mixins';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface Theme {
    multipliers: Multipliers;
    utils: Utils;
    font: Font;
    sizes: Sizes;
    shadow: Shadow;
  }

  interface ThemeOptions {
    multipliers: Multipliers;
    utils: Utils;
    font: Font;
    sizes: Sizes;
    shadow: Shadow;
  }
}

const createCustomTheme = (): ThemeOptions => {
  const unit = 'rem';

  const multipliers = {
    px: 4,
    rem: 1,
  };

  const fontSizes = {
    tiny: '0.75rem', // 12px
    small: '0.875rem', // 14px
    normal: '1rem', // 16px
    medium: '1.125rem', // 18px
    big: '1.5rem', // 24px
    large: '2rem', // 32px
    huge: '2.5rem', // 40px
    super: '3rem', // 48px
  };

  const fontWeight = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
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
    xxxxl: '5rem', // 80px
  };

  const palette = {
    mode: 'light',
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#001999',
      light: '#0026e6',
      dark: '#000d4d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0055ff',
      light: '#80aaff',
      dark: '#003399',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#c98200',
      light: '#d39b33',
      dark: '#8c5b00',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4ca801',
      light: '#6FB933',
      dark: '#357500',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff0034',
      light: '#ff335c',
      dark: '#b20024',
      contrastText: '#ffffff',
    },
    info: {
      main: '#00a28b',
      light: '#33B4A2',
      dark: '#007161',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  };

  const sizeMixin = size(multipliers.rem, unit);

  const themeOptions: ThemeOptions = {
    breakpoints,
    multipliers,
    palette: palette as PaletteOptions,
    typography: {
      fontSize: 16,
      fontFamily: 'Montserrat, sans-serif',
      h1: {
        fontSize: fontSizes.super,
        fontWeight: fontWeight.bold,
        lineHeight: 1.45,
      },
      h2: {
        fontWeight: fontWeight.bold,
        lineHeight: 1.45,
        fontSize: fontSizes.huge,
      },
      h3: {
        fontWeight: fontWeight.bold,
        fontSize: fontSizes.large,
        lineHeight: 1.45,
      },
      h4: {
        fontWeight: fontWeight.bold,
        fontSize: fontSizes.big,
        lineHeight: 1.45,
      },
      h5: {
        fontWeight: fontWeight.bold,
        fontSize: fontSizes.medium,
        lineHeight: 1.45,
      },
      h6: {
        fontWeight: fontWeight.bold,
        fontSize: fontSizes.normal,
        lineHeight: 1.45,
      },
      subtitle1: {
        fontWeight: fontWeight.medium,
        lineHeight: 1.45,
        fontSize: fontSizes.medium,
      },
      subtitle2: {
        lineHeight: 1.45,
      },
      body1: {
        fontWeight: fontWeight.light,
        fontSize: fontSizes.normal,
        lineHeight: 1.45,
      },
      body2: {
        fontWeight: fontWeight.light,
        lineHeight: 1.45,
        fontSize: fontSizes.small,
      },
      button: {
        fontWeight: fontWeight.medium,
      },
      caption: {
        fontSize: fontSizes.small,
        lineHeight: 1.45,
      },
      overline: {
        lineHeight: 2.5,
        fontSize: fontSizes.small,
      },
    },
    shadow: {
      init: `0 0 0 0 ${alpha(palette.primary.main, 0)}`,
      focus: `0 0 0 ${sizes.xxs} ${alpha(palette.secondary.main, 60)}`,
      focusError: `0 0 0 ${sizes.xxs} ${alpha(palette.error.main, 60)}`,
    },
    shape: {
      borderRadius: 8,
    },
    spacing: (factor: number) => `${1 * factor}rem`,
    utils: {
      alpha,
      cols: cols(sizeMixin),
      colsAll: colsAll(cols(sizeMixin)),
      constSize,
      gridClasses: gridClasses(breakpoints.values),
      rows: rows(sizeMixin),
      rowsAll: rowsAll(sizeMixin),
      size: sizeMixin,
      tint,
    },
    font: {
      base: '16px',
      fontFamily: '"Montserrat", "Ubuntu", "Helvetica", "Arial", sans-serif',
      letterSpacing: '0.005rem',
      lineHeight: 1.45,
      size: fontSizes,
      unit,
      weight: fontWeight,
    },
    sizes,
  };

  return themeOptions;
};

const theme = createTheme({
  ...createCustomTheme(),
});

export default theme;
