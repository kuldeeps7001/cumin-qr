import { extendTheme, Theme, withDefaultColorScheme } from '@chakra-ui/react';
import baseTheme from './theme/baseTheme';

const breakpoints = {
  '2xs': '320px',
  xs: '768px',
  sm: '1280px',
  md: '1440px',
  lg: '1920px',
  xl: '2048px',
  '2xl': '4096px',
};

// Add component specific styles to theme
export const themeConfig = {
  ...baseTheme,
  // breakpoints,
  components: {

  },
};

export type CuminBaseTheme = Theme & typeof baseTheme;

type CuminThemeComponents = (typeof themeConfig)['components'];
type ChakraThemeComponents = Omit<
  Theme['components'],
  keyof CuminThemeComponents
>;

// Note we need to exclude Chakra components types if we have defined our own component
// with the same name. This prevents incorrect overlapping types.
export type CuminTheme = Omit<Theme, 'components'> & {
  components: ChakraThemeComponents;
} & typeof themeConfig;

export const theme: CuminTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'primary',
    components: [
      'Box',
      'Button',
      'Checkbox',
      'IconButton',
      'Radio',
      'Switch',
      'Toolbar',
    ],
  }),
  themeConfig
) as CuminTheme;
