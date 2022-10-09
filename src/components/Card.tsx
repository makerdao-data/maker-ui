import { Card as ThemeUICard, CardProps as ThemeUICardProps } from 'theme-ui';
import { CardVariant } from '../theme/cards';

type CardProps = ThemeUICardProps & {
  variant?: CardVariant;
};

export default function Card({ children, variant, ...props }: CardProps) {
  return (
    <ThemeUICard variant={variant} {...props}>
      {children}
    </ThemeUICard>
  );
}
