import 'styled-components';

import {
  Breakpoints,
  Colors,
  Font,
  Mixins,
  Multipliers,
  Shadows,
  Shape,
  Sizes,
  Unit
} from 'theme/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
    colors: Colors;
    font: Font;
    mixins: Mixins;
    multipliers: Multipliers;
    shadows: Shadows;
    shape: Shape;
    sizes: Sizes;
    unit: Unit;
  }
}
