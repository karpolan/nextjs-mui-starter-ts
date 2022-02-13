import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { FunctionComponent, useMemo } from 'react';
import { useAppStore } from '../store';
import DARK_THEME from './dark';
import LIGHT_THEME from './light';

interface Props {
  emotionCache: EmotionCache; // You can omit it if you don't want to use Emotion styling library
}

/**
 * Renders composition of Emotion's CacheProvider + MUI's ThemeProvider to wrap content of entire App
 * The Light or Dark themes applied depending on global .darkMode state
 * @param {EmotionCache} emotionCache - shared Emotion's cache to use in the App
 */
const AppThemeProvider: FunctionComponent<Props> = ({ children, emotionCache }) => {
  const [state] = useAppStore();
  const theme = useMemo(() => (state.darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME)), [state.darkMode]);

  return (
    <CacheProvider value={emotionCache}>
      {/* <StyledEngineProvider injectFirst> use this instead of Emotion's <CacheProvider/> if you want to use alternate styling library */}
      <ThemeProvider theme={theme}>
        <CssBaseline /* MUI Styles */ />
        {children}
      </ThemeProvider>
      {/* </StyledEngineProvider> */}
    </CacheProvider>
  );
};

export default AppThemeProvider;
