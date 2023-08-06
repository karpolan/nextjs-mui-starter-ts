import { ReactElement } from 'react';
import { SimplePaletteColorOptions } from '@mui/material';
import Document, { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import defaultThemeOptions, { createEmotionCache } from '../src/theme';
import createEmotionServer from '@emotion/server/create-instance';

const THEME_COLOR = (defaultThemeOptions.palette?.primary as SimplePaletteColorOptions)?.main || '#FFFFFF';

interface Props extends DocumentProps {
  emotionStyleTags: ReactElement;
}

/**
 * Extended Document class to support MUI and Emotion styling
 * See also: https://github.com/mui/material-ui/blob/master/examples/nextjs/pages/_document.js
 * @component AppDocument
 */
class AppDocument extends Document<Props> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          {/* PWA primary color */}
          <meta name="theme-color" content={THEME_COLOR} />
          {/* Note: Replace Roboto with other font if needed */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
AppDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          // eslint-disable-next-line
          const MainApp = App as any; // Actually it should be ClassComponent<MainAppProps> or similar to allow only .emotionCache property to be injected, but TypeScript doesn't support that.
          return <MainApp emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

export default AppDocument;
