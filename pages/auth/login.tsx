import { NextPage } from 'next';
import Head from 'next/head';
import { Stack } from '@mui/material';
import { AppButton } from 'src/components';
import { useAppStore } from 'src/store';
import { useRouter } from 'next/router';

/**
 * User Login page
 * @page Login
 */
const Login: NextPage = () => {
  const router = useRouter();
  const [, dispatch] = useAppStore();

  const emulateLogin = () => {
    dispatch({ type: 'LOG_IN' });
    router.push('/');
  };

  const emulateLogout = () => {
    dispatch({ type: 'LOG_OUT' });
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Login - _TITLE_</title>
      </Head>

      <Stack alignItems="center" spacing={2} padding={2}>
        <Stack>Put form controls or add social login buttons here...</Stack>

        <Stack direction="row">
          <AppButton color="success" onClick={emulateLogin}>
            Emulate User Login
          </AppButton>
          <AppButton color="warning" onClick={emulateLogout}>
            Logout User
          </AppButton>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
