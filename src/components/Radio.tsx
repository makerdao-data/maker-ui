import {
  Radio as ThemeUIRadio,
  RadioProps as ThemeUIRadioProps
} from 'theme-ui';
import { RadioVariant } from '../theme/forms';

type RadioProps = ThemeUIRadioProps & {
  variant?: RadioVariant;
};

export default function Radio({ children, variant, ...props }: RadioProps) {
  return (
    <ThemeUIRadio variant={variant} {...props}>
      {children}
    </ThemeUIRadio>
  );
}
