import {
  Select as ThemeUISelect,
  SelectProps as ThemeUISelectProps
} from 'theme-ui';
import { SelectVariant } from '../theme/forms';

type SelectProps = ThemeUISelectProps & {
  variant?: SelectVariant;
};

export default function Select({ children, variant, ...props }: SelectProps) {
  return (
    <ThemeUISelect variant={variant} {...props}>
      {children}
    </ThemeUISelect>
  );
}
