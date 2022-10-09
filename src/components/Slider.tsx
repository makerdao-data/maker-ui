import {
  Slider as ThemeUISlider,
  SliderProps as ThemeUISliderProps
} from 'theme-ui';
import { SliderVariant } from '../theme/forms';

type SliderProps = ThemeUISliderProps & {
  variant?: SliderVariant;
};

export default function Slider({ children, variant, ...props }: SliderProps) {
  return (
    <ThemeUISlider variant={variant} {...props}>
      {children}
    </ThemeUISlider>
  );
}
