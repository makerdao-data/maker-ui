import { useEffect } from 'react';
import { ThemeProvider as ThemeUIThemeProvider, useColorMode } from 'theme-ui';
import theme from '../theme';

type ThemeProviderProps = {
  children: JSX.Element;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeUIThemeProvider theme={theme}>
      <ColorModeHandler>{children}</ColorModeHandler>
    </ThemeUIThemeProvider>
  );
}

function ColorModeHandler({ children }: { children: JSX.Element }) {
  const [, setThemeUIColorMode] = useColorMode();

  // Listen system color scheme
  useEffect(() => {
    const darkModeQuery =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    const prefersDark = darkModeQuery.matches;

    if (prefersDark) {
      setThemeUIColorMode('dark');
    }

    darkModeQuery.addEventListener('change', (event) => {
      setThemeUIColorMode(event.matches ? 'dark' : 'light');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
