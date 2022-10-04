import { ActionType, GlobalProvider, ThemeState, useLadleContext } from '@ladle/react';
import { useEffect } from 'react';
import { ThemeProvider, useColorMode } from 'theme-ui';
import theme from '../src/theme';

export const Provider: GlobalProvider = ({ children, globalState }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeForwarder>{children}</ColorModeForwarder>
    </ThemeProvider>
  );
};

function ColorModeForwarder({ children }) {
  const [, setThemeUIColorMode] = useColorMode();
  const { globalState, dispatch } = useLadleContext();

  useEffect(() => {
    setThemeUIColorMode(globalState.theme);
  }, [globalState.theme]);


  // Listen system color scheme on first render and listen to changes
  useEffect(() => {
    const darkModeQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    const prefersDark = darkModeQuery.matches;

    if (prefersDark) {
      dispatch({
        type: ActionType.UpdateTheme,
        value: ThemeState.Dark,
      })
    }

    darkModeQuery.addEventListener('change', (event) => {
      dispatch({
        type: ActionType.UpdateTheme,
        value: event.matches ? ThemeState.Dark : ThemeState.Light,
      })
    });
  }, []);

  return children;
}
