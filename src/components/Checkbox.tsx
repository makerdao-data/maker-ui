import {
  Checkbox as ThemeUICheckbox,
  CheckboxProps as ThemeUICheckboxProps
} from 'theme-ui';
import { CheckboxVariant } from '../theme/forms';

type CheckboxProps = ThemeUICheckboxProps & {
  variant?: CheckboxVariant;
};

export default function Checkbox({
  children,
  variant,
  ...props
}: CheckboxProps) {
  return (
    <ThemeUICheckbox variant={variant} {...props}>
      {children}
    </ThemeUICheckbox>
  );
}
