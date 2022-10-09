import { ThemeUIStyleObject } from 'theme-ui';

export type CardVariant =
  | 'primary'
  | 'compact'
  | 'noPadding'
  | 'tight'
  | 'emphasized';

export type CardTheme = Record<CardVariant, ThemeUIStyleObject>;

export const cards: CardTheme = {
  primary: {
    border: 'none',
    boxShadow: (theme) =>
      `0px 20px 40px ${theme.colors.shadowFloater}, 0px 1px 3px #bebebe40`,
    p: 3,
    borderRadius: 'medium',
    bg: 'surface'
  },
  compact: {
    variant: 'cards.primary',
    p: 3
  },
  noPadding: {
    variant: 'cards.primary',
    p: 0
  },
  tight: {
    variant: 'cards.primary',
    p: 2
  },
  emphasized: {
    variant: 'cards.primary',
    border: '1px solid',
    borderColor: 'onSecondary'
  }
};
