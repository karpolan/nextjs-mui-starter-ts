import { NextPage } from 'next';
import Head from 'next/head';
import { Stack, Typography } from '@mui/material';
import { AppLink } from 'src/components';
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

      <Stack spacing={2} padding={2}>
        <Stack>
          <Typography variant="h3">About application</Typography>
          <Typography variant="body1">
            This application is a mix of{' '}
            <AppLink href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</AppLink> and{' '}
            <AppLink href="https://mui.com/">MUI</AppLink> with set of reusable components and utilities to build
            professional <AppLink href="https://nextjs.org/">NextJS</AppLink> application faster.
          </Typography>
        </Stack>

        <Stack alignItems="center" spacing={1}>
          <DemoAppAlert />
          <DemoAppButton />
          <DemoAppIcon />
          <DemoAppIconButton />
          <DemoAppImage />
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
