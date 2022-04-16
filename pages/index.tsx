import { Box, Stack, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ICONS } from 'src/components/AppIcon/AppIcon';
import DemoAppButton from 'src/components/forPages/shared/DemoAppButton';
import DemoAppIconButton from 'src/components/forPages/shared/DemoAppIconButton';
import { AppAlert, AppButton, AppIcon, AppIconButton } from '../src/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>_TITLE_</title>
        <meta name="description" content="_DESCRIPTION_" />
      </Head>

      <Stack alignItems="center">
        <Stack>
          <Box>
            <Typography component="div" variant="h5">
              AppIcon
            </Typography>
          </Box>
          <Box>
            {Object.keys(ICONS).map((icon) => (
              <AppIcon key={icon} icon={icon} />
            ))}
          </Box>
        </Stack>

        <DemoAppButton />

        <DemoAppIconButton />

        <Stack>
          <Box>
            <Typography component="div" variant="h5">
              AppAlert
            </Typography>
          </Box>
          <Box>
            <AppAlert severity="info">AppAlert - Info</AppAlert>
            <AppAlert severity="success">AppAlert - Info</AppAlert>
            <AppAlert>AppAlert - Error (default)</AppAlert>
            <AppAlert severity="warning">AppAlert - Info</AppAlert>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
