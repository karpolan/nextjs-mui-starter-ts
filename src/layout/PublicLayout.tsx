import { FunctionComponent, useCallback, useState } from 'react';
import { Grid } from '@mui/material/';
import NavBar from './NavBar';
import { useEventSwitchDarkMode, useOnMobile } from './hooks';
import TopBar from './TopBar';
import { LinkToPage } from '../utils/type';
import { useAppStore } from '../store';
import { AppIconButton } from '../components';
import SideBar from './SideBar';
import ErrorBoundary from '../components/ErrorBoundary';
import { IS_SERVER } from '../utils/NextJS';

const TITLE_PUBLIC = '_TITLE_'; // TODO: change to your app name or other word

/**
 * Sidebar items with links
 */
const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Log In',
    path: '/auth/login',
    icon: 'login',
  },
  {
    title: 'Sign Up',
    path: '/auth/signup',
    icon: 'signup',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];

/**
 * Bottom Navigation links
 */
const NAV_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Log In',
    path: '/auth/login',
    icon: 'login',
  },
  {
    title: 'Sign Up',
    path: '/auth/signup',
    icon: 'signup',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];

/**
 * Renders "Public Layout" composition
 */
const PublicLayout: FunctionComponent = ({ children }) => {
  const onMobile = useOnMobile();
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [state] = useAppStore();

  const title = TITLE_PUBLIC;
  if (!IS_SERVER) {
    document.title = title; // Also Update Tab/Document Title
  }

  const onSwitchDarkMode = useEventSwitchDarkMode();

  const onSideBarOpen = useCallback(() => {
    if (!sideBarVisible) setSideBarVisible(true); // Don't re-render Layout when SideBar is already open
  }, [sideBarVisible]);

  const onSideBarClose = useCallback(() => {
    if (sideBarVisible) setSideBarVisible(false); // Don't re-render Layout when SideBar is already closed
  }, [sideBarVisible]);

  return (
    <Grid
      container
      direction="column"
      sx={{
        minHeight: '100vh', // Full screen height
        paddingTop: onMobile ? 56 : 64,
      }}
    >
      <Grid item component="header">
        <TopBar
          startNode={<AppIconButton icon="logo" onClick={onSideBarOpen} />}
          title={title}
          endNode={
            <AppIconButton
              icon={state.darkMode ? 'day' : 'night'}
              title={state.darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
              color="primary"
              onClick={onSwitchDarkMode}
            />
          }
        />

        <SideBar
          anchor="left"
          open={sideBarVisible}
          variant="temporary"
          items={SIDE_BAR_ITEMS}
          onClose={onSideBarClose}
        />
      </Grid>

      <Grid
        item
        component="main"
        sx={{
          flexGrow: 1, // Takes all possible space
          padding: 1,
        }}
      >
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Grid>

      <Grid item component="footer">
        <NavBar items={NAV_BAR_ITEMS} />
      </Grid>
    </Grid>
  );
};

export default PublicLayout;
