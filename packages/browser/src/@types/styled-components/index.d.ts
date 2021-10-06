import 'styled-components';

import {
  Alpha,
  Breakpoints,
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
    alpha: Alpha;
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
    transition: Transition;
  }
}
