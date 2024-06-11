'use client';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AppButton, AppLink } from '@/components';
import { useAppStore } from '@/store';
import { useEventLogout } from '@/hooks';
import { sessionStorageSet } from '@/utils';

/**
 * Renders login form for user to authenticate
 * @component LoginForm
 */
const LoginForm = () => {
  const router = useRouter();
  const [, dispatch] = useAppStore();
  const onLogout = useEventLogout();

  const onLogin = () => {
    // TODO: AUTH: Sample of access token store, replace next line in real application
    sessionStorageSet('access_token', 'TODO:_save-real-access-token-here');

    dispatch({ type: 'LOG_IN' });
    router.replace('/'); // Redirect to home page without ability to go back
  };

  return (
    <Stack alignItems="center" spacing={2} padding={2}>
      <Stack>Put form controls or add social login buttons here...</Stack>

      <Stack direction="row">
        <AppButton color="success" onClick={onLogin}>
          Emulate User Login
        </AppButton>
        <AppButton color="warning" onClick={onLogout}>
          Logout User
        </AppButton>
      </Stack>

      <div>
        The source code is available at{' '}
        <AppLink href="https://github.com/karpolan/nextjs-mui-starter-ts">GitHub</AppLink>
      </div>
    </Stack>
  );
};

export default LoginForm;
