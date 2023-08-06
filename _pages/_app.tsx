import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import { EmotionCache } from '@emotion/cache';
import { AppThemeProvider, createEmotionCache } from '../src/theme';
import { AppStoreProvider } from '../src/store';
import CurrentLayout from 'src/layout';

// Client-side cache, shared for the whole session of the user in the browser.
const CLIENT_SIDE_EMOTION_CACHE = createEmotionCache();

export interface MainAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

/**
 * Main application component.
 * Injects the theme provider and the Emotion styling cache.
 * @component MainApp
 */
const MainApp: FunctionComponent<MainAppProps> = ({
  Component,
  emotionCache = CLIENT_SIDE_EMOTION_CACHE,
  pageProps,
}) => {
  return (
    <AppStoreProvider>
      <AppThemeProvider emotionCache={emotionCache}>
        <CurrentLayout>
          <Component {...pageProps} />
        </CurrentLayout>
      </AppThemeProvider>
    </AppStoreProvider>
  );
};

export default MainApp;
