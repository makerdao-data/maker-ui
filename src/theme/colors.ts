export type ColorVariant =
  | 'primary-200'
  | 'primary-400'
  | 'primary-500'
  | 'primary-600'
  | 'primary-900'
  | 'secondary-100'
  | 'secondary-200'
  | 'secondary-400'
  | 'secondary-500'
  | 'error-200'
  | 'error-500'
  | 'success-200'
  | 'success-500'
  | 'warning-200'
  | 'warning-500'
  | 'steel-100'
  | 'steel-200'
  | 'steel-300'
  | 'steel-500'
  | 'steel-600'
  | 'highlight'
  | 'notice'
  | 'linked'
  | 'dai'
  | 'background'
  | 'surface';

export type ColorMode = {
  dark: Partial<Record<ColorVariant, string>>;
};

export type ColorTheme = Record<ColorVariant, string> & { modes: ColorMode };

export const colors: ColorTheme = {
  'primary-200': '#B6EDE7',
  'primary-400': '#2DC1B1',
  'primary-500': '#1AAB9B',
  'primary-600': '#098C7D',
  'primary-900': '#424E4D',
  'secondary-100': '#F1F1F1',
  'secondary-200': '#D5D9E0',
  'secondary-400': '#7E7E88',
  'secondary-500': '#231536',
  'success-200': '#E8FCEE',
  'success-500': '#24A148',
  'warning-200': '#FDEDE8',
  'warning-500': '#FF832B',
  'error-200': '#F8E7EC',
  'error-500': '#BC2F48',
  'steel-100': '#FFFFFF',
  'steel-200': '#D1DEE6',
  'steel-300': '#9FAFB9',
  'steel-500': '#708390',
  'steel-600': '#405361',
  highlight: '#FFEBBC',
  notice: '#FACB61',
  linked: '#447AFB',
  dai: '#FDC134',
  background: '#F1F4FB',
  surface: '#FFFFFF',
  modes: {
    dark: {
      'primary-200': '#B6EDE7',
      'primary-400': '#2DC1B1',
      'primary-500': '#1AAB9B',
      'primary-600': '#098C7D',
      'primary-900': '#424E4D',
      'secondary-100': '#F1F1F1',
      'secondary-200': '#D5D9E0',
      'secondary-400': '#7E7E88',
      'secondary-500': '#231536',
      'success-200': '#E8FCEE',
      'success-500': '#24A148',
      'warning-200': '#FDEDE8',
      'warning-500': '#FF832B',
      'error-200': '#F8E7EC',
      'error-500': '#BC2F48',
      'steel-100': '#FFFFFF',
      'steel-200': '#D1DEE6',
      'steel-300': '#9FAFB9',
      'steel-500': '#708390',
      'steel-600': '#494E52',
      highlight: '#FFEBBC',
      notice: '#FACB61',
      linked: '#53B7FF',
      dai: '#FDC134',
      background: '#0F0F0F',
      surface: '#212121'
    }
  }
};
