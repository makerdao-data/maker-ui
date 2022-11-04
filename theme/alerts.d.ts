import { ThemeUICSSObject } from 'theme-ui';
export declare type AlertVariant = 'primary' | 'success' | 'notice' | 'warning';
export declare type AlertTheme = Record<AlertVariant, ThemeUICSSObject>;
export declare const alerts: AlertTheme;
