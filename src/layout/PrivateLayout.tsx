import { useState, useCallback, FunctionComponent } from 'react';
import { Stack } from '@mui/material';
import { LinkToPage } from '../utils/type';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { useOnMobile } from '../hooks/layout';
import { useAppStore } from '../store';
import TopBar, { TOPBAR_DESKTOP_HEIGHT, TOPBAR_MOBILE_HEIGHT } from './TopBar';
import SideBar from './SideBar';
import ErrorBoundary from '../components/ErrorBoundary';
import { SIDEBAR_DESKTOP_ANCHOR, SIDEBAR_MOBILE_ANCHOR, SIDEBAR_WIDTH } from './SideBar/SideBar';
import { PropsWithChildren } from 'react';

const TITLE_PRIVATE = 'Private - _TITLE_'; // TODO: change to your app name or other word, schema is: `Page Title - {TITLE_PRIVATE}`

/**
 * Centralized place in the App to update document.title
 */
function updateDocumentTitle(title = '') {
  if (title) {
    document.title = `${title} - ${TITLE_PRIVATE}`; // TODO: Replace " - " with any other separator
  } else {
    document.title = TITLE_PRIVATE;
  }
  return document.title;
}

/**
 * Sidebar navigation items with links
 */
const SIDEBAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    title: 'Profile',
    path: '/user',
    icon: 'account',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
  {
    title: 'Dev Tools',
    path: '/dev',
    icon: 'settings',
  },
];

/**
 * Renders "Private Layout" composition
 */
const PrivateLayout: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();
  const onMobile = useOnMobile();
  const [state] = useAppStore();
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const onLogoClick = useCallback(() => {
    // Navigate to first SideBar's item or to '/' when clicking on Logo/Menu icon when SideBar is already visible
    router.push(SIDEBAR_ITEMS?.[0]?.path || '/');
  }, [router]);

  const onSideBarOpen = useCallback(() => {
    if (!sideBarVisible) setSideBarVisible(true); // Don't re-render Layout when SideBar is already open
  }, [sideBarVisible]);

  const onSideBarClose = useCallback(() => {
    if (sideBarVisible) setSideBarVisible(false); // Don't re-render Layout when SideBar is already closed
  }, [sideBarVisible]);

  const title = updateDocumentTitle();
  const shouldOpenSideBar = onMobile ? sideBarVisible : true;

  return (
    <Stack
      direction="column"
      sx={{
        minHeight: '100vh', // Full screen height
        paddingTop: onMobile ? TOPBAR_MOBILE_HEIGHT : TOPBAR_DESKTOP_HEIGHT,
        paddingLeft: SIDEBAR_DESKTOP_ANCHOR.includes('left') ? SIDEBAR_WIDTH : 0,
        paddingRight: SIDEBAR_DESKTOP_ANCHOR.includes('right') ? SIDEBAR_WIDTH : 0,
      }}
    >
      <Stack component="header">
        <TopBar title={title} />

        <SideBar
          anchor={onMobile ? SIDEBAR_MOBILE_ANCHOR : SIDEBAR_DESKTOP_ANCHOR}
          open={shouldOpenSideBar}
          variant={onMobile ? 'temporary' : 'persistent'}
          items={SIDEBAR_ITEMS}
          onClose={onSideBarClose}
        />
      </Stack>

      <Stack
        component="main"
        sx={{
          flexGrow: 1, // Takes all possible space
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
        }}
      >
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Stack>

      <Stack component="footer">
        <Footer />
      </Stack>
    </Stack>
  );
};

export default PrivateLayout;
