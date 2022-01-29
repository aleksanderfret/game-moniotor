import { CSSProperties } from 'react';

export enum BreakpointKey {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

export enum BreakpointSizes {
  xxs = 0,
  xs = 320,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1440,
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

export interface Shadow {
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
export interface ConstSize {
  width: string;
  maxWidth: string;
  minWidth: string;
  height: string;
  maxHeight: string;
  minHeight: string;
  flexShrink: number;
}

export interface Transition {
  transitionProperty: string;
  transitionDuration: string;
  transitionTimingFunction: string;
  backfaceVisibility: string;
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

export type BreakpointValues = {
  [key in BreakpointKey]: BreakpointSizes;
};

export interface Breakpoints {
  keys: BreakpointKey[];
  values: BreakpointValues;
}

interface GridClassesOptions {
  selector?: string;
  columns?: number;
  unit?: Unit;
}

export type SizeMixin = (value: number) => string;
export type ColorMixin = (color: string, amount: number) => string;
export type GridClassesMixin = (
  color: string,
  options?: GridClassesOptions
) => string;
export interface Utils {
  alpha: ColorMixin;
  cols: SizeMixin;
  colsAll: SizeMixin;
  constSize: (width: string, height?: string) => ConstSize;
  gridClasses: GridClassesMixin;
  rows: SizeMixin;
  rowsAll: SizeMixin;
  size: SizeMixin;
  tint: ColorMixin;
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

const breakpointValues: BreakpointValues = {
  [BreakpointKey.xxs]: BreakpointSizes.xxs,
  [BreakpointKey.xs]: BreakpointSizes.xs,
  [BreakpointKey.sm]: BreakpointSizes.sm,
  [BreakpointKey.md]: BreakpointSizes.md,
  [BreakpointKey.lg]: BreakpointSizes.lg,
  [BreakpointKey.xl]: BreakpointSizes.xl,
  [BreakpointKey.xxl]: BreakpointSizes.xxl,
};

export const breakpoints: Breakpoints = {
  keys: Object.keys(breakpointValues) as BreakpointKey[],
  values: breakpointValues,
};
