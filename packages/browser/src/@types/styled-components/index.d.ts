import 'styled-components';
import { CSSProperties, DefaultTheme, ThemedCssFunction } from 'react';

import { Breakpoint } from 'theme/types';

interface Color {
  main: string;
  light?: string;
  dark?: string;
  contrast?: string;
}

interface Palette {
  common: { black: string; white: string };
  primary: Color;
  secondary: Color;
  warning: Color;
  success: Color;
  error: Color;
  info: Color;
  background: Color;
  gray: { [key as number]: string };
}

interface Shape {
  borderRadius: CSSProperties['borderRadius'];
}

type Unit = 'px' | '%' | 'em' | 'rem';

type SpacingFunction = (multiplicand: number) => string;

interface Breakpoints {
  keys: string[];
  values: { [key as string]: string };
  unit?: Unit;
}

interface Utils {
  fourBy: (number: number) => number;
}

interface Spacing {
  calc: SpacingFunction;
  cols: SpacingFunction;
  colsAll: SpacingFunction;
  multiplier: number;
  rows: SpacingFunction;
  rowsAll: SpacingFunction;
  unit: Unit;
  values: { [key as string]: string };
}

interface Typography {
  base: string;
  fontFamily: CSSProperties['fontFamily'];
  unit: Unit;
  size: { [key as string]: string };
  weight: { light: number; regular: number; medium: number; bold: number };
}

type Shadows = CSSProperties['boxShadow'][];

type Transition = (...properties: CSSProperties[]) => string;

type ConstSize = (width: string, height?: string) => string;

type Media = Record<Breakpoint, ThemedCssFunction<DefaultTheme>>;

declare module 'styled-components' {
  export interface Theme {
    breakpoints: Breakpoints;
    constSize: ConstSize;
    media: Media;
    palette: Palette;
    shadows?: Shadows;
    shape: Shape;
    spacing: Spacing;
    transition: transition;
    typography: Typography;
  }
}
