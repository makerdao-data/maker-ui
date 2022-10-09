import {
  Textarea as ThemeUITextarea,
  TextareaProps as ThemeUITextareaProps
} from 'theme-ui';
import { TextareaVariant } from '../theme/forms';

type TextareaProps = ThemeUITextareaProps & {
  variant?: TextareaVariant;
};

export default function Textarea({
  children,
  variant,
  ...props
}: TextareaProps) {
  return (
    <ThemeUITextarea variant={variant} {...props}>
      {children}
    </ThemeUITextarea>
  );
}
