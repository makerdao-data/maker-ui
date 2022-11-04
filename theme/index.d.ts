import { BadgeTheme } from './badges';
import { ButtonTheme } from './buttons';
import { ColorTheme } from './colors';
import { CardTheme } from './cards';
import { FormTheme } from './forms';
import { TextTheme } from './text';
import { Theme as ThemeUiTheme, ThemeUIStyleObject } from 'theme-ui';
export declare type DialogTarget = 'desktop' | 'mobile';
export interface Theme extends Omit<ThemeUiTheme, 'buttons, text, cards, badges, colors, forms, shadows'> {
    buttons?: ButtonTheme;
    text?: TextTheme;
    cards?: CardTheme;
    badges?: BadgeTheme;
    colors?: ColorTheme;
    forms?: FormTheme;
    useBodyStyles: boolean;
    modal?: Record<string, ThemeUIStyleObject>;
    listboxes?: Record<string, ThemeUIStyleObject>;
    menubuttons?: Record<string, ThemeUIStyleObject>;
    dialog?: Record<DialogTarget, ThemeUIStyleObject>;
    shadows?: Record<'lightPrimary' | 'floater', string>;
}
declare const theme: Theme;
export default theme;
