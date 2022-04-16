import { NextPage } from 'next';
import { AppButton } from 'src/components';
import Footer from '../../src/components/Footer';
import Logo from '../../src/components/Logo';

/**
 * Renders Development tools when env.NEXT_PUBLIC_DEBUG is true
 * @page DevPage
 */
const DevPage: NextPage = () => {
  if (!process.env.NEXT_PUBLIC_DEBUG) return null;

  return (
    <div>
      <Logo />

      <Footer />
    </div>
  );
};

export default DevPage;
