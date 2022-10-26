import { ThemeUICSSObject } from 'theme-ui';

export type BadgeVariant = 'primary' | 'success' | 'notice' | 'warning';

export type BadgeTheme = Record<BadgeVariant, ThemeUICSSObject>;

export const badges: BadgeTheme = {
  primary: {
    py: 1,
    px: 4,
    borderRadius: 'roundish',
    variant: 'text.caps',
    color: 'primary',
    bg: 'surface',
    border: '1px solid',
    borderColor: 'primary',
    fontSize: 5
  },
  success: {
    variant: 'badges.primary',
    borderColor: 'success',
    color: 'success',
    fontSize: 5
  },
  notice: {
    variant: 'badges.primary',
    borderColor: 'notice',
    color: 'notice',
    fontSize: 5
  },
  warning: {
    variant: 'badges.primary',
    borderColor: 'warning',
    color: 'warning',
    fontSize: 5
  }
};
