import { Text as ThemeUIText, TextProps as ThemeUITextProps } from 'theme-ui';
import { TextVariant } from '../theme/text';

type TextProps = ThemeUITextProps & {
  variant?: TextVariant;
};

export default function Text({ children, variant, ...props }: TextProps) {
  return (
    <ThemeUIText variant={variant} {...props}>
      {children}
    </ThemeUIText>
  );
}
