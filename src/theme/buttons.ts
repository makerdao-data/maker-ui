import { ThemeUIStyleObject } from 'theme-ui';

export type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'small'
  | 'smallOutline'
  | 'textual';

export type ButtonTheme = Record<ButtonVariant, ThemeUIStyleObject>;

export const buttons: ButtonTheme = {
  primary: {
    borderRadius: 'xs',
    cursor: 'pointer',
    outline: 'none',
    fontFamily: 'body',
    fontSize: 6,
    p: 3,
    py: 2,
    color: 'onPrimary',
    fontWeight: 'semiBold',
    letterSpacing: '0.03em',
    bg: 'primary',
    '&:hover': {
      bg: 'primaryEmphasis'
    },
    '&:active': {
      bg: 'primaryAlt'
    },
    '&:disabled': {
      bg: 'primaryMuted',
      pointerEvents: 'none',
      cursor: 'not-allowed'
    }
  },
  outline: {
    variant: 'buttons.primary',
    bg: 'surface',
    color: 'onSecondary',
    border: '1px solid',
    borderColor: 'secondary',
    '&:hover': {
      bg: 'surface',
      color: 'secondaryEmphasis',
      borderColor: 'secondaryEmphasis'
    },
    '&:active': {
      borderColor: 'secondaryAlt',
      color: 'secondaryAlt'
    },
    '&:disabled': {
      bg: 'background',
      pointerEvents: 'none',
      cursor: 'not-allowed',
      borderColor: 'secondaryMuted',
      opacity: 0.5
    }
  },

  small: {
    variant: 'buttons.primary',
    textTransform: 'uppercase',
    outline: 'none',
    letterSpacing: '0.05em',
    fontSize: 3,
    fontWeight: 'bold',
    cursor: 'pointer',
    p: 2,
    color: 'textAlt',
    bg: 'primary',
    '&:hover': {
      bg: 'primaryEmphasis'
    },
    '&:active': {
      bg: 'primaryAlt'
    },
    '&:disabled': {
      bg: 'primaryMuted',
      pointerEvents: 'none',
      cursor: 'not-allowed'
    }
  },
  smallOutline: {
    variant: 'buttons.small',
    bg: 'surface',
    color: 'onSecondary',
    border: '1px solid',
    borderColor: 'secondary',
    '&:hover': {
      bg: 'surface',
      color: 'secondaryEmphasis',
      borderColor: 'secondaryEmphasis'
    },
    '&:active': {
      bg: 'surface',
      borderColor: 'secondaryAlt',
      color: 'secondaryAlt'
    },
    '&:disabled': {
      bg: 'background',
      pointerEvents: 'none',
      cursor: 'not-allowed',
      borderColor: 'secondaryMuted',
      opacity: 0.5
    }
  },
  textual: {
    background: 'transparent',
    color: 'accentBlue',
    outline: 'none',
    cursor: 'pointer',
    fontSize: 6
  }
};
