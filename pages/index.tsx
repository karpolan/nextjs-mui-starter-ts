import { Stack } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AppIcon } from '../src/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>_TITLE_</title>
        <meta name="description" content="_DESCRIPTION_" />
      </Head>

      <Stack>
        <AppIcon icon="home" />
        <AppIcon icon="logo" />
        <AppIcon icon="home" />
        <AppIcon icon="home" />
      </Stack>
    </>
  );
};

export default Home;
