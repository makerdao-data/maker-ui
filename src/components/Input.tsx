import {
  Input as ThemeUIInput,
  InputProps as ThemeUIInputProps
} from 'theme-ui';
import { InputVariant } from '../theme/forms';

type InputProps = ThemeUIInputProps & {
  variant?: InputVariant;
};

export default function Input({ children, variant, ...props }: InputProps) {
  return (
    <ThemeUIInput variant={variant} {...props}>
      {children}
    </ThemeUIInput>
  );
}
