import { FunctionComponent, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { SimplePaletteColorOptions } from '@mui/material';
import { AppStoreProvider } from 'src/store';
import defaultTheme, { ThemeProvider } from 'src/theme';
import CurrentLayout from 'src/layout';
import './globals.css';

const THEME_COLOR = (defaultTheme.palette?.primary as SimplePaletteColorOptions)?.main || '#FFFFFF';

export const metadata: Metadata = {
  title: '_TITLE_',
  description: '_DESCRIPTION_',
  manifest: '/site.webmanifest',
  themeColor: THEME_COLOR,

  // <link rel="shortcut icon" href="/favicon.ico" />
  // <link rel="manifest" href="/site.webmanifest" />
  // {/* PWA primary color */}
  // <meta name="theme-color" content={THEME_COLOR} />
  // {/* Note: Replace Roboto with other font if needed */}
  // <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  // {/* Inject MUI styles first to match with the prepend: true configuration. */}
  // {this.props.emotionStyleTags}

  // TODO: Add Open Graph metadata
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppStoreProvider>
          <ThemeProvider>
            <CurrentLayout>{children}</CurrentLayout>
          </ThemeProvider>
        </AppStoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
