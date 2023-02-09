export type ColorVariant =
  | 'text'
  | 'textMuted'
  | 'primary'
  | 'primaryEmphasis'
  | 'primaryAlt'
  | 'primaryMuted'
  | 'onPrimary'
  | 'secondary'
  | 'secondaryEmphasis'
  | 'secondaryAlt'
  | 'secondaryMuted'
  | 'onSecondary'
  | 'background'
  | 'surface'
  | 'onSurface'
  | 'muted'
  | 'mutedAlt'
  | 'error'
  | 'success'
  | 'successAlt'
  | 'onSuccess'
  | 'notice'
  | 'noticeAlt'
  | 'onNotice'
  | 'warning'
  | 'warningAlt'
  | 'onWarning'
  | 'bull'
  | 'bullAlt'
  | 'bear'
  | 'bearAlt'
  | 'accentBlue'
  | 'accentPurple'
  | 'tableStructure';

export type ColorMode = {
  dark: Partial<Record<ColorVariant, string>>;
};

export type ColorTheme = Record<ColorVariant, string> & { modes: ColorMode };

export const colors: ColorTheme = {
  text: '#231536',
  textMuted: '#7E7E88',
  primary: '#1AAB9B',
  primaryEmphasis: '#139D8D',
  primaryAlt: '#098C7D',
  primaryMuted: '#B6EDE7',
  onPrimary: '#FFF',
  secondary: '#D4D9E1',
  secondaryEmphasis: '#7E7E88',
  secondaryAlt: '#231536',
  secondaryMuted: '#D4D9E1',
  onSecondary: '#7E7E88',
  background: '#F6F8F9',
  surface: '#FFFFF',
  onSurface: '#708390',
  muted: '#D4D9E1',
  mutedAlt: '#7E7E88',
  error: '#BC2F48',
  success: '#2DC1B1',
  successAlt: '#E7FCFA',
  onSuccess: '#2DC1B1',
  notice: '#FCDC93',
  noticeAlt: '#FFF9ED',
  onNotice: '#FCDC93',
  warning: '#F77249',
  warningAlt: '#FDEDE8',
  onWarning: '#F77249',
  bull: '#79D8A5',
  bullAlt: '#E8F5F0',
  bear: '#EB3B5A',
  bearAlt: '#F8E7EC',
  accentBlue: '#447AFB',
  accentPurple: '#9055AF',
  tableStructure: '#708390',
  modes: {
    dark: {
      primary: '#1DC1AE',
      onPrimary: '#000',
      background: '#0F0F0F',
      text: '#F1F1F1',
      secondaryMuted: '#FFF',
      surface: '#212121',
      onSurface: '#7E7E88',
      primaryMuted: '#13554D',
      secondaryAlt: '#FFF',
      accentBlue: '#5D8DFC',
      noticeAlt: '#3a3528',
      onNotice: '#FCC045',
      warningAlt: '#F75524',
      successAlt: '#002C26',
      onSuccess: '#1DC1AE',
      bull: '#1AAB9B',
      bear: '#F75524',
      tableStructure: '#708390'
    }
  }
};
