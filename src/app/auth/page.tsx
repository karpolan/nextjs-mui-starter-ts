import { redirect } from 'next/navigation';

/**
 * Redirects to default Auth page
 * @page Auth
 * @redirect /auth
 */
const AuthPage = () => {
  redirect('/auth/login');
  // return <div>Auth Page</div>;
};

export default AuthPage;
