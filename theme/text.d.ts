import { ThemeUIStyleObject } from 'theme-ui';
export declare type TextVariant = 'heading' | 'largeHeading' | 'mediumHeading' | 'smallHeading' | 'small' | 'error' | 'microHeading' | 'muted' | 'bigText' | 'boldBody' | 'text' | 'smallText' | 'microText' | 'caps' | 'h1' | 'h2' | 'h3' | 'inputText';
export declare type TextTheme = Record<TextVariant, ThemeUIStyleObject>;
export declare const text: TextTheme;
