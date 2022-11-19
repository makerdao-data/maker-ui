import { alerts } from './alerts';
import { badges, BadgeTheme } from './badges';
import { buttons, ButtonTheme } from './buttons';
import { colors, ColorTheme } from './colors';
import { cards, CardTheme } from './cards';
import { forms, FormTheme } from './forms';
import { styles } from './styles';
import { text, TextTheme } from './text';
import { Theme as ThemeUiTheme, ThemeUIStyleObject } from 'theme-ui';
import ratioSizes from './ratioSizes';
import { transparentize } from '@theme-ui/color';

export type DialogTarget = 'desktop' | 'mobile';

export interface Theme
  extends Omit<
    ThemeUiTheme,
    'buttons, text, cards, badges, colors, forms, shadows'
  > {
  buttons?: ButtonTheme;
  text?: TextTheme;
  cards?: CardTheme;
  badges?: BadgeTheme;
  colors?: ColorTheme;
  forms?: FormTheme;
  useBodyStyles: boolean;
  modal?: Record<string, ThemeUIStyleObject>;
  listboxes?: Record<string, ThemeUIStyleObject>;
  menubuttons?: Record<string, ThemeUIStyleObject>;
  dialog?: Record<DialogTarget, ThemeUIStyleObject>;
  shadows?: Record<'lightPrimary' | 'floater', string>;
}

const theme: Theme = {
  config: {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: 'system',
    useLocalStorage: false
  },
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ['40em', '52em', '64em'],
  colors,

  fonts: {
    body: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    heading:
      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    monospace: 'monospace'
  },

  fontSizes: [
    ratioSizes[1],
    ratioSizes[2],
    ratioSizes[3],
    ratioSizes[4],
    ratioSizes[5],
    ratioSizes[6],
    ratioSizes[7],
    ratioSizes[8],
    ratioSizes[9],
    ratioSizes[10],
    ratioSizes[11]
  ],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    semiBold: 500
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 1.05,
    loose: 1.2
  },

  borders: {
    light: '1px solid'
  },

  radii: {
    xs: 2,
    small: 4,
    medium: 6,
    roundish: 12,
    round: 24
  },

  shadows: {
    lightPrimary: `0 0 1px 5px ${transparentize('primary', 0.8)}`,
    floater: '0 0 8px rgba(0, 0, 0, 0.125)'
  },

  sizes: {
    ...[0, 4, 8, 16, 32, 64, 128, 256, 512],
    container: 1140,
    ratioSizes
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  alerts,
  text,
  cards,
  buttons,
  badges,
  forms,
  styles,
  layout: {
    container: {
      px: 2
    }
  },
  images: {
    avatar: {}
  },
  messages: {}, // Defaults to "primary" & "highlight"
  links: {
    nav: {
      p: 2,
      fontSize: 3,
      fontWeight: 'body',
      letterSpacing: '0.4px',
      color: 'text',
      cursor: 'pointer',
      '&:hover': {
        color: 'primary',
        cursor: 'pointer'
      }
    },

    footer: {
      fontSize: 4,
      fontWeight: 'semiBold',
      letterSpacing: '0.4px',
      color: 'text',
      cursor: 'pointer'
    }
  }
};

export default theme;
