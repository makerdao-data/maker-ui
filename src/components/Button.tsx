import { Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps } from 'theme-ui';
import { ButtonVariant } from '../theme/buttons';

type ButtonProps = ThemeUIButtonProps & {
  variant?: ButtonVariant;
};

export default function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <ThemeUIButton variant={variant} {...props}>
      {children}
    </ThemeUIButton>
  );
}
