import 'styled-components';

import {
  Breakpoints,
  ColorFunction,
  ConstSize,
  Font,
  Media,
  Palette,
  ShadowFunction,
  Shadows,
  Shape,
  Size,
  Spacing,
  Transition
} from 'theme/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    alpha: ColorFunction;
    breakpoints: Breakpoints;
    constSize: ConstSize;
    customShadow: ShadowFunction;
    font: Font;
    media: Media;
    palette: Palette;
    shadows: Shadows;
    shape: Shape;
    size: Size;
    spacing: Spacing;
    tint: ColorFunction;
    transition: Transition;
  }
}
