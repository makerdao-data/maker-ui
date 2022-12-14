import { ThemeUIStyleObject } from 'theme-ui';

export type TextVariant =
  | 'heading'
  | 'largeHeading'
  | 'mediumHeading'
  | 'smallHeading'
  | 'small'
  | 'error'
  | 'microHeading'
  | 'muted'
  | 'bigText'
  | 'boldBody'
  | 'text'
  | 'smallText'
  | 'microText'
  | 'caps'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'inputText';

export type TextTheme = Record<TextVariant, ThemeUIStyleObject>;

export const text: TextTheme = {
  heading: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: [8, 9],
    color: 'text'
  },
  largeHeading: {
    variant: 'text.heading',
    fontSize: [9, 10]
  },
  mediumHeading: {
    variant: 'text.heading',
    fontSize: [8, 9]
  },
  smallHeading: {
    variant: 'text.heading',
    fontSize: [5, 6]
  },
  microHeading: {
    variant: 'text.heading',
    fontSize: [4, 5]
  },
  text: {
    fontSize: 5,
    color: 'text'
  },
  smallText: {
    fontSize: 4,
    color: 'text'
  },
  microText: {
    fontSize: 3,
    color: 'text'
  },
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'textMuted',
    fontSize: 5,
    fontWeight: 'bold'
  },
  h1: {
    fontSize: 8,
    letterSpacing: '0.3px',
    fontWeight: 'semiBold'
  },

  h2: {
    fontSize: 6,
    lineHeight: 'loose',
    fontWeight: 'semiBold',
    letterSpacing: '0.4px'
  },

  h3: {
    fontSize: 5,
    lineHeight: 'loose',
    fontWeight: 'semiBold',
    letterSpacing: '0.4px'
  },

  bigText: {
    fontSize: 7
  },
  boldBody: {
    fontSize: 5,
    fontWeight: 'semiBold',
    letterSpacing: '0.3px'
  },
  small: {
    fontSize: 1
  },
  inputText: {
    fontSize: 3,
    fontWeight: 'normal'
  },
  error: {
    fontSize: 5,
    color: 'error'
  },
  muted: {
    color: 'textMuted',
    fontSize: 4,
    lineHeight: 'body'
  }
};
