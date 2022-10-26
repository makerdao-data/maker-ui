import { ThemeUIStyleObject } from 'theme-ui';

export type CardVariant = 'primary';

export type CardTheme = Record<CardVariant, ThemeUIStyleObject>;

export const cards: CardTheme = {
  primary: {
    border: '1px solid',
    borderColor: 'muted',
    p: 3,
    borderRadius: 'medium',
    bg: 'surface'
  }
};
