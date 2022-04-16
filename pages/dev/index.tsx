import { Stack } from '@mui/material';
import { NextPage } from 'next';
import Footer from 'src/components/Footer';
import Logo from 'src/components/Logo';
import DemoAppAlert from 'src/components/forPages/shared/DemoAppAlerts';
import DemoAppButton from 'src/components/forPages/shared/DemoAppButton';
import DemoAppIcon from 'src/components/forPages/shared/DemoAppIcon';
import DemoAppIconButton from 'src/components/forPages/shared/DemoAppIconButton';
import DemoAppImage from 'src/components/forPages/shared/DemoAppImage';

/**
 * Renders Development tools when env.NEXT_PUBLIC_DEBUG is true
 * @page DevPage
 */
const DevPage: NextPage = () => {
  if (process.env.NEXT_PUBLIC_DEBUG) return <div>Debug mode is Off</div>;

  return (
    <div>
      <Logo />
      <Stack alignItems="center" spacing={1}>
        <DemoAppAlert />
        <DemoAppButton />
        <DemoAppIcon />
        <DemoAppIconButton />
        <DemoAppImage />
      </Stack>
      <Footer />
    </div>
  );
};

export default DevPage;
