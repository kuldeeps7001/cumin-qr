
import {legacyThemeStyles} from './legacy';
import {tokens} from './tokens';

export const CSS_VAR_PREFIX = 'chakra';

const baseThemeStyles = {
  colors: {...legacyThemeStyles.colors},
  fonts: {
    ...legacyThemeStyles.fonts,
  },
  fontSizes: {
    ...legacyThemeStyles.fontSizes,
  },
  fontWeights: {
    ...legacyThemeStyles.fontWeights,
  },
  lineHeights: {
    ...legacyThemeStyles.lineHeights,
  },
  space: {
    ...legacyThemeStyles.space,
  },
  sizes: {
    none: undefined,
  },
  radii: {
    ...legacyThemeStyles.radii,
  },
  borders: legacyThemeStyles.borders,
  shadows: {
    ...legacyThemeStyles.shadows,
  },

  textStyles: tokens.semanticTokens.typographies,

  // Global style defaults
  styles: {
    global: {
      /*
        This will hide the focus indicator if the element receives focus via the mouse,
         but it will still show up on keyboard focus.
      */
      '.js-focus-visible :focus:not(.focus-visible), .js-focus-visible :focus:not(.focus-visible) + [data-focus]':
        {
          outline: 'none',
          boxShadow: 'none',
        },
      body: {
        fontSize: '14px',
      },
    },
  },
};

export default baseThemeStyles;
