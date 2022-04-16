import type { NextPage } from 'next';
import Head from 'next/head';
import { Stack } from '@mui/material';
import DemoAppAlert from 'src/components/forPages/shared/DemoAppAlerts';
import DemoAppButton from 'src/components/forPages/shared/DemoAppButton';
import DemoAppIcon from 'src/components/forPages/shared/DemoAppIcon';
import DemoAppIconButton from 'src/components/forPages/shared/DemoAppIconButton';
import DemoAppImage from 'src/components/forPages/shared/DemoAppImage';

/**
 * Main page of the Application
 * @page Home
 */
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>_TITLE_</title>
        <meta name="description" content="_DESCRIPTION_" />
      </Head>

      <Stack alignItems="center" spacing={1}>
        <DemoAppAlert />
        <DemoAppButton />
        <DemoAppIcon />
        <DemoAppIconButton />
        <DemoAppImage />
      </Stack>
    </>
  );
};

export default Home;
