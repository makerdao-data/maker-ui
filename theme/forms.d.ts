import { ThemeUICSSObject } from 'theme-ui';
export declare type InputVariant = 'input' | 'inputError';
export declare type LabelVariant = 'label';
export declare type TextareaVariant = 'textarea' | 'textareaError';
export declare type SelectVariant = 'select';
export declare type SliderVariant = 'slider' | 'sliderActive';
export declare type RadioVariant = 'radio';
export declare type CheckboxVariant = 'checkbox';
export declare type FormVariant =
  | InputVariant
  | LabelVariant
  | TextareaVariant
  | SelectVariant
  | SliderVariant
  | RadioVariant
  | CheckboxVariant;
export declare type FormTheme = Record<FormVariant, ThemeUICSSObject>;
export declare const forms: FormTheme;
