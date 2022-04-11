import { NextPage } from 'next';
import { AppButton } from 'src/components';
import Footer from '../../src/components/Footer';
import Logo from '../../src/components/Logo';

const DevPage: NextPage = () => {
  return (
    <div>
      <Logo />

      <Footer />
    </div>
  );
};

export default DevPage;
