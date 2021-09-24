import { DefaultTheme, ThemedCssFunction } from 'styled-components';

export enum Breakpoint {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl'
}

export type Breakpoints = {
  [key in Breakpoint]: number;
};

export type BreakpointMixins = {
  [key in Breakpoint]: ThemedCssFunction<DefaultTheme>;
};
