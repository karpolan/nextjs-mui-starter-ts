import { NextPage } from 'next';
import { AppButton } from 'src/components';
import Footer from '../../src/components/Footer';
import Logo from '../../src/components/Logo';

import DefaultIcon from '@mui/icons-material/MoreHoriz';

const DevPage: NextPage = () => {
  return (
    <div>
      <Logo />

      <AppButton>No color </AppButton>

      <AppButton color="primary">Primary</AppButton>
      <AppButton color="secondary">AppButton</AppButton>

      <AppButton color="error" endIcon="close">
        Error
      </AppButton>
      <AppButton color="red" startIcon="menu">
        Green
      </AppButton>
      <AppButton color="green" startIcon="menu">
        Green
      </AppButton>
      <AppButton color="blue" startIcon="menu">
        Green
      </AppButton>
      <AppButton color="#f0f" to="/">
        #f0f
      </AppButton>

      <Footer />
    </div>
  );
};

export default DevPage;
