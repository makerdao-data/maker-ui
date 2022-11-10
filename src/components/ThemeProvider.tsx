import { ThemeProvider as ThemeUIThemeProvider } from 'theme-ui';
import theme from '../theme';

type ThemeProviderProps = {
  children: JSX.Element;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeUIThemeProvider theme={theme}>{children}</ThemeUIThemeProvider>;
}
