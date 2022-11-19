import { useContext } from 'react';
import { ThemeUIContextValue, __ThemeUIContext } from 'theme-ui';
import { Theme } from '../theme';

export interface ThemeContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: Theme;
}

export default function useTheme(): ThemeContextValue {
  const themeContext = useContext(__ThemeUIContext);

  return themeContext as ThemeContextValue;
}
