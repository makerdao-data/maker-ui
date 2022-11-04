import {
  Badge as ThemeUIBadge,
  BadgeProps as ThemeUIBadgeProps
} from 'theme-ui';
import { BadgeVariant } from '../theme/badges';

type BadgeProps = ThemeUIBadgeProps & {
  variant?: BadgeVariant;
};

export default function Badge({ children, variant, ...props }: BadgeProps) {
  return (
    <ThemeUIBadge variant={variant} {...props}>
      {children}
    </ThemeUIBadge> hj
  );
}
