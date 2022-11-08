export declare type ColorVariant =
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
  | 'accentPurple';
export declare type ColorMode = {
  dark: Partial<Record<ColorVariant, string>>;
};
export declare type ColorTheme = Record<ColorVariant, string> & {
  modes: ColorMode;
};
export declare const colors: ColorTheme;
