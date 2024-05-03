import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { FunctionComponent, PropsWithChildren } from 'react';

/**
 * Platform-specific ThemeProvider for Next.js
 * @component MuiThemeProviderForNextJs
 */
const MuiThemeProviderForNextJs: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
};

export default MuiThemeProviderForNextJs;
