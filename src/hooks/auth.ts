import { useCallback } from 'react';
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
 * Returns event handler to Logout current user
 * @returns {function} calling this event logs out current user
 */
export function useEventLogout() {
  const [, dispatch] = useAppStore();

  return useCallback(() => {
    dispatch({ type: 'LOG_OUT' });
  }, [dispatch]);
}
