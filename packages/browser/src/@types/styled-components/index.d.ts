import 'styled-components';
import { CSSProperties } from 'react';

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
  background?: string;
  gray: { [key as number]: string };
}

interface Shape {
  borderRadius: CSSProperties['borderRadius'];
}

type Unit = 'px' | '%' | 'em' | 'rem';

interface Breakpoints {
  keys: string[];
  values: { [key as string]: string };
  unit?: Unit;
}

interface Utils {
  fourBy: (number: number) => number;
}

interface Spacing {
  calc: (multiplicand: number) => string;
  values: { [key as string]: string };
  multiplier: number;
  unit: Unit;
}
interface Typography {
  base: string;
  fontFamily: CSSProperties['fontFamily'];
  unit: Unit;
  size: { [key as string]: string };
  weight: { light: number; regular: number; medium: number; bold: number };
}

type Shadows = CSSProperties['boxShadow'][];

declare module 'styled-components' {
  export interface Theme {
    breakpoints: Breakpoints;
    palette: Palette;
    shadows?: Shadows;
    shape: Shape;
    spacing: Spacing;
    typography: Typography;
  }
}
