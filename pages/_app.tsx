import type { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import createCache, { EmotionCache } from '@emotion/cache';
import { AppThemeProvider } from '../src/theme';
import AppStore from '../src/store';
import CurrentLayout from 'src/layout';

// Setting .prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

// Client-side cache, shared for the whole session of the user in the browser.
const CLIENT_SIDE_EMOTION_CACHE = createEmotionCache();

export interface MainAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

/**
 * Main application component.
 * Injects the theme provider and the Emotion styling cache.
 */
const MainApp: FunctionComponent<MainAppProps> = ({
  Component,
  emotionCache = CLIENT_SIDE_EMOTION_CACHE,
  pageProps,
}) => {
  return (
    <AppStore>
      <AppThemeProvider emotionCache={emotionCache}>
        <CurrentLayout>
          <Component {...pageProps} />
        </CurrentLayout>
      </AppThemeProvider>
    </AppStore>
  );
};

export default MainApp;
