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

export type SizeLabel =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';

export type Unit = 'px' | '%' | 'em' | 'rem';

export type Sizes = { [key in SizeLabel]: string };

export interface Shape {
  borderRadius: CSSProperties['borderRadius'];
}

export interface Shadows {
  [key: string]: CSSProperties['boxShadow'];
}

export interface Color {
  main: string;
  light: string;
  dark: string;
  contrast: string;
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

export interface Colors {
  common: { black: string; white: string };
  primary: Color;
  secondary: Color;
  warning: Color;
  success: Color;
  danger: Color;
  info: Color;
  background: Color;
  gray: { [key: number]: string };
}
export interface Multipliers {
  px: number;
  rem: number;
}

export interface Breakpoints {
  keys: string[];
  values: BreakpointValues;
  unit: Unit;
}

export type BreakpointValues = {
  [key in Breakpoint]: number;
};

export type BreakpointMixins = Record<
  Breakpoint,
  ThemedCssFunction<DefaultTheme>
>;

export type SizeMixin = (value: number) => string;
export type ColorMixin = (color: string, amount: number) => string;

export interface Mixins {
  breakpoint: BreakpointMixins;
  alpha: ColorMixin;
  cols: SizeMixin;
  colsAll: SizeMixin;
  constSize: (width: string, height?: string) => string;
  rows: SizeMixin;
  rowsAll: SizeMixin;
  size: SizeMixin;
  tint: ColorMixin;
  transition: (...properties: string[]) => string;
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
