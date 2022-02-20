import { useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useAppStore } from '../store';

/**
 * Hook to detect is current user authenticated or not
 * @returns {boolean} true if user is authenticated, false otherwise
 */
export function useIsAuthenticated() {
  const [state] = useAppStore();
  return state.isAuthenticated;
}

/**
 * Returns event handler to toggle Dark/Light modes
 * @returns {function} calling this event toggles dark/light mode
 */
export function useEventSwitchDarkMode() {
  const [state, dispatch] = useAppStore();

  return useCallback(() => {
    dispatch({
      type: 'DARK_MODE',
      payload: !state.darkMode,
    });
  }, [state, dispatch]);
}

/**
 * Returns event handler to Logout current user
 * @returns {function} calling this event logs out current user
 */
export function useEventLogout() {
  const [, dispatch] = useAppStore();

  return useCallback(() => {
    dispatch({ type: 'LOG_OUT' });
  }, [dispatch]);
}

/**
 * Hook to detect onMobile vs. onDesktop using "resize" event listener
 * @returns {boolean} true if onMobile, false if onDesktop
 */
export function useOnMobileByTrackingWindowsResize() {
  const theme = useTheme();
  const [onMobile, setOnMobile] = useState(false);

  const handleResize = useCallback(() => {
    setOnMobile(window.innerWidth < theme.breakpoints.values.sm); // sx, sm are "onMobile"
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize); // Set resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Remove resize listener
    };
  }, [handleResize]);

  return onMobile;
}

/**
 * Hook to detect onMobile vs. onDesktop using Media Query
 * @returns {boolean} true if onMobile, false if onDesktop
 */
export function useOnMobileByMediaQuery() {
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return onMobile;
}

// export const useOnMobile = useOnMobileByTrackingWindowsResize;
export const useOnMobile = useOnMobileByMediaQuery;
