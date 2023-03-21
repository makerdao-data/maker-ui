export type ColorVariant =
  | 'primary'
  | 'onPrimary'
  | 'primary-active'
  | 'primary-disabled'
  | 'primary-strong'
  | 'primary-alt'
  | 'text'
  | 'muted'
  | 'secondary'
  | 'onSecondary'
  | 'error'
  | 'onError'
  | 'error-200'
  | 'success'
  | 'onSuccess'
  | 'success-200'
  | 'warning'
  | 'onWarning'
  | 'warning-200'
  | 'highlight'
  | 'notice'
  | 'link'
  | 'dai'
  | 'background'
  | 'surface'
  | 'onsurface'
  | 'onsurface-100'
  | 'onsurface-200'
  | 'onsurface-500'
  | 'onsurface-600';

export type ColorMode = {
  dark: Partial<Record<ColorVariant, string>>;
};

export type ColorTheme = Record<ColorVariant, string> & { modes: ColorMode };

export const colors: ColorTheme = {
  primary: '#1AAB9B',
  onPrimary: '#F1F1F1',
  secondary: '#231536',
  onSecondary: '#F1F1F1',
  background: '#F1F4FB',
  surface: '#FFFFFF',
  onsurface: '#9FAFB9',
  text: '#231536',
  muted: '#7E7E88',
  highlight: '#FFEBBC',
  notice: '#FACB61',
  link: '#447AFB',
  success: '#24A148',
  onSuccess: '#F1F1F1',
  warning: '#FF832B',
  onWarning: '#F1F1F1',
  error: '#BC2F48',
  onError: '#F1F1F1',
  dai: '#FDC134',
  'primary-active': '#2DC1B1',
  'primary-disabled': '#B6EDE7',
  'primary-strong': '#098C7D',
  'primary-alt': '#424E4D',
  'success-200': '#E8FCEE',
  'warning-200': '#FCEDE8',
  'error-200': '#FCEDE8',
  'onsurface-100': '#FFFFFF',
  'onsurface-200': '#D1DEE6',
  'onsurface-500': '#708390',
  'onsurface-600': '#405361',
  modes: {
    dark: {
      primary: '#1AAB9B',
      onPrimary: '#F1F1F1',
      secondary: '#231536',
      onSecondary: '#F1F1F1',
      background: '#0F0F0F',
      surface: '#212121',
      onsurface: '#9FAFB9',
      text: '#F1F1F1',
      muted: '#7E7E88',
      highlight: '#FFEBBC',
      notice: '#FACB61',
      link: '#447AFB',
      success: '#24A148',
      onSuccess: '#F1F1F1',
      warning: '#FF832B',
      onWarning: '#F1F1F1',
      error: '#BC2F48',
      onError: '#F1F1F1',
      dai: '#FDC134',
      'primary-active': '#2DC1B1',
      'primary-disabled': '#424E4D',
      'primary-strong': '#098C7D',
      'primary-alt': '#B6EDE7',
      'success-200': '#E8FCEE',
      'warning-200': '#FCEDE8',
      'error-200': '#FCEDE8',
      'onsurface-100': '#405361',
      'onsurface-200': '#708390',
      'onsurface-500': '#D1DEE6',
      'onsurface-600': '#FFFFFF'
    }
  }
};
