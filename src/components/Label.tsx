import {
  Label as ThemeUILabel,
  LabelProps as ThemeUILabelProps
} from 'theme-ui';
import { LabelVariant } from '../theme/forms';

type LabelProps = ThemeUILabelProps & {
  variant?: LabelVariant;
};

export default function Label({ children, variant, ...props }: LabelProps) {
  return (
    <ThemeUILabel variant={variant} {...props}>
      {children}
    </ThemeUILabel>
  );
}
