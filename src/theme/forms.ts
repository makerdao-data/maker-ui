import { transparentize } from '@theme-ui/color';
import { ThemeUICSSObject } from 'theme-ui';
import theme from '.';

export type InputVariant = 'input' | 'inputError';
export type LabelVariant = 'label';
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
    fontSize: 3,
    fontWeight: 'semiBold',
    py: 2
  },
  input: {
    outline: 'none',
    borderRadius: 'small',
    borderColor: 'muted',
    color: 'text',
    p: 2,
    '&:focus': {
      borderColor: 'mutedAlt',
      color: 'text'
    }
  },
  inputError: {
    variant: 'forms.input',
    borderColor: 'error',
    color: 'text',
    '&:focus': {
      borderColor: 'error',
      color: 'text'
    }
  },
  textarea: { variant: 'forms.input' },
  textareaError: { variant: 'forms.inputError' },
  select: { variant: 'forms.input' },
  slider: {
    height: '2px',
    borderRadius: 'small',
    color: 'text',
    '&:active, &:hover, &:focus': {
      color: 'primary',
      bg: 'primary',
      '&::-webkit-slider-thumb': {
        boxShadow: `0 0 1px 5px ${transparentize('primary', 0.8)}`
      }
    }
  },
  sliderActive: {
    variant: 'forms.slider',
    color: 'primary',
    bg: 'primary'
  },
  radio: {
    color: 'muted',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      bg: 'successMuted'
    }
  },
  checkbox: {
    color: 'muted',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      color: 'primary',
      bg: 'successMuted'
    }
  }
};
