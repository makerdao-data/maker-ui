import {
  Alert as ThemeUIAlert,
  AlertProps as ThemeUIAlertProps
} from 'theme-ui';
import { AlertVariant } from '../theme/alerts';

type AlertProps = ThemeUIAlertProps & {
  variant?: AlertVariant;
};

export default function Alert({ children, variant, ...props }: AlertProps) {
  return (
    <ThemeUIAlert variant={variant} {...props}>
      {children}
    </ThemeUIAlert>
  );
}
