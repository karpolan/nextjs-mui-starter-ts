import { useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

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
