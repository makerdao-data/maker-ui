import {
  ActionType,
  GlobalProvider,
  ThemeState,
  useLadleContext
} from '@ladle/react';
import React from 'react';
import { useEffect } from 'react';
import { ThemeProvider, useColorMode, Box, Link } from 'theme-ui';
import { GithubIcon, MakerColorIcon, Text } from '../src/components';
import theme from '../src/theme';

export const Provider: GlobalProvider = ({ children, globalState }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeForwarder>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              maxHeight: '95px',
              overflow: 'hidden',
              justifyContent: 'space-between',
              marginBottom: '4rem'
            }}>
            <Box sx={{ display: 'flex' }}>
              <MakerColorIcon width={128} height={128} />
              <Text variant="microHeading" sx={{ alignSelf: 'end' }}>
                UI
              </Text>
            </Box>

            <Link
              href="https://github.com/ofqwx/maker-ui"
              target="_blank"
              sx={{
                alignSelf: 'end',
                color: 'inherit',
                textDecoration: 'inherit',
                cursor: 'pointer'
              }}>
              <GithubIcon width={32} height={32} />
            </Link>
          </Box>

          {children}
        </Box>
      </ColorModeForwarder>
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
    const darkModeQuery =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    const prefersDark = darkModeQuery.matches;

    if (prefersDark) {
      dispatch({
        type: ActionType.UpdateTheme,
        value: ThemeState.Dark
      });
    }

    darkModeQuery.addEventListener('change', (event) => {
      dispatch({
        type: ActionType.UpdateTheme,
        value: event.matches ? ThemeState.Dark : ThemeState.Light
      });
    });
  }, []);

  return children;
}
