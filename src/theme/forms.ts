import { ThemeUICSSObject } from 'theme-ui';

export type InputVariant = 'input' | 'inputError';
export type LabelVariant = 'label' | 'thinLabel';
export type TextareaVariant = 'textarea' | 'textareaError';
export type SelectVariant = 'select';
export type SliderVariant = 'slider' | 'sliderActive';
export type RadioVariant = 'radio';
export type CheckboxVariant = 'checkbox';

export type FormVariant =
  | InputVariant
  | LabelVariant
  | TextareaVariant
  | SelectVariant
  | SliderVariant
  | RadioVariant
  | CheckboxVariant;

export type FormTheme = Record<FormVariant, ThemeUICSSObject>;

export const forms: FormTheme = {
  label: {
    fontSize: 2,
    fontWeight: 'bold',
    py: 2
  },
  thinLabel: {
    fontSize: 2,
    fontWeight: 'semiBold',
    py: 2
  },
  input: {
    outline: 'none',
    borderRadius: 'small',
    borderColor: 'secondary',
    color: 'onSurface',
    p: 2,
    '&:focus': {
      borderColor: 'secondaryEmphasis',
      color: 'text'
    }
  },
  inputError: {
    variant: 'forms.input',
    borderColor: 'error',
    color: 'onSurface',
    '&:focus': {
      borderColor: 'error',
      color: 'text'
    }
  },
  textarea: { variant: 'forms.input', fontFamily: 'body' },
  textareaError: { variant: 'forms.inputError', fontFamily: 'body' },
  select: { variant: 'forms.input' },
  slider: {
    height: '2px',
    borderRadius: 'small',
    color: 'text',
    '&:active, &:hover, &:focus': {
      color: 'primary',
      bg: 'primary'
    }
  },
  sliderActive: {
    variant: 'forms.slider',
    color: 'primary',
    bg: 'primary'
  },
  radio: {
    color: 'secondary',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      bg: 'successMuted'
    }
  },
  checkbox: {
    color: 'secondary',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      color: 'primary',
      bg: 'successMuted'
    }
  }
};
