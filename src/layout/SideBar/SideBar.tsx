import { FunctionComponent, useCallback } from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import { useAppStore } from '../../store/AppStore';
import { AppIconButton } from '../../components';

import SideBarNavigation from './SideBarNavigation';
import { LinkToPage } from '../../utils/type';
import { useEventLogout, useEventSwitchDarkMode, useOnMobile } from '../hooks';
import { Stack } from '@mui/material';

export const SIDEBAR_MOBILE_ANCHOR = 'left'; // 'right';
export const SIDEBAR_DESKTOP_ANCHOR = 'left'; // 'right';
export const SIDEBAR_WIDTH = 240; // 240px

interface Props extends Pick<DrawerProps, 'anchor' | 'className' | 'open' | 'variant' | 'onClose'> {
  items: Array<LinkToPage>;
}

/**
 * Renders SideBar with Menu and User details
 * Actually for Authenticated users only, rendered in "Private Layout"
 * @class SideBar
 * @param {string} anchor - 'left' or 'right'
 * @param {boolean} open - the Drawer is visible when true
 * @param {string} variant - variant of the Drawer, one of 'permanent', 'persistent', 'temporary'
 * @param {func} onClose - called when the Drawer is closing
 */
const SideBar: FunctionComponent<Props> = ({ anchor, open, variant, items, onClose, ...restOfProps }) => {
  const [state] = useAppStore();
  const onMobile = useOnMobile();

  const onSwitchDarkMode = useEventSwitchDarkMode();
  const onLogout = useEventLogout();

  const handleAfterLinkClick = useCallback(
    (event: React.MouseEvent) => {
      if (variant === 'temporary' && typeof onClose === 'function') {
        onClose(event, 'backdropClick');
      }
    },
    [variant, onClose]
  );

  return (
    <Drawer
      anchor={anchor}
      open={open}
      variant={variant}
      PaperProps={{
        sx: {
          width: SIDEBAR_WIDTH,
          marginTop: onMobile ? 0 : '64px',
          height: onMobile ? '100%' : 'calc(100% - 64px)',
        },
      }}
      onClose={onClose}
    >
      <Stack
        sx={{
          height: '100%',
          padding: 2,
        }}
        {...restOfProps}
        onClick={handleAfterLinkClick}
      >
        <SideBarNavigation items={items} showIcons />
        <Divider />

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <Tooltip title={state.darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}>
            <FormControlLabel
              label={!state.darkMode ? 'Light mode' : 'Dark mode'}
              control={<Switch checked={state.darkMode} onChange={onSwitchDarkMode} />}
            />
          </Tooltip>

          {state.isAuthenticated && <AppIconButton icon="logout" title="Logout Current User" onClick={onLogout} />}
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default SideBar;
