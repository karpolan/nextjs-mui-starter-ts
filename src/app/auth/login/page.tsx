import { Metadata, NextPage } from 'next';
import LoginForm from './LoginForm';

/**
 * User Login page
 * @page Login
 */
const LoginPage: NextPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export const metadata: Metadata = {
  title: 'Login - _TITLE_',
  description: '_DESCRIPTION_',
};

export default LoginPage;
