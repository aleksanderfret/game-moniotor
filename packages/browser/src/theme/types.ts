import { DefaultTheme, ThemedCssFunction } from 'styled-components';
import { CSSProperties } from 'react';

export enum Breakpoint {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl'
}

export type BreakpointValues = {
  [key in Breakpoint]: number;
};

export type BreakpointMixins = {
  [key in Breakpoint]: ThemedCssFunction<DefaultTheme>;
};

export interface Color {
  main: string;
  light?: string;
  dark?: string;
  contrast?: string;
}

export type SizeLabel =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export interface Palette {
  common: { black: string; white: string };
  primary: Color;
  secondary: Color;
  warning: Color;
  success: Color;
  error: Color;
  info: Color;
  background: Color;
  gray: { [key: number]: string };
}

export interface Shape {
  borderRadius: CSSProperties['borderRadius'];
}

export type Unit = 'px' | '%' | 'em' | 'rem';

export type SpacingFunction = (multiplicand: number) => string;

export type Alpha = (color: string, alpha: number) => string;
export interface Breakpoints {
  keys: string[];
  values: BreakpointValues;
  unit: Unit;
}

export interface Utils {
  fourBy: (number: number) => number;
}

export interface Spacing {
  cols: SpacingFunction;
  colsAll: SpacingFunction;
  rows: SpacingFunction;
  rowsAll: SpacingFunction;
}

export interface Font {
  base: string;
  fontFamily: CSSProperties['fontFamily'];
  letterSpacing: CSSProperties['letterSpacing'];
  lineHeight: CSSProperties['lineHeight'];
  unit: Unit;
  size: { [key: string]: string };
  weight: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
    black: number;
  };
}
export interface Size {
  calc: SpacingFunction;
  multiplier: number;
  unit: Unit;
  values: { [key in SizeLabel]: string };
}

export interface ShadowParams {
  horizontal?: number;
  vertical?: number;
  blur?: number;
  spread?: number;
  color?: string;
  unit?: Unit;
}

export type ShadowFunction = (params: ShadowParams) => string;

export interface Shadows {
  [key: string]: CSSProperties['boxShadow'];
}

export type Transition = (...properties: CSSProperties[]) => string;

export type ConstSize = (width: string, height?: string) => string;

export type Media = Record<Breakpoint, ThemedCssFunction<DefaultTheme>>;
