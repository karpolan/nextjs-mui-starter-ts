import { Box, Stack, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ICONS } from 'src/components/AppIcon/AppIcon';
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

        <Stack>
          <Box>
            <Typography component="div" variant="h5">
              AppButon
            </Typography>
          </Box>
          <Box>
            <AppButton color="primary">primary</AppButton>
            <AppButton color="secondary">secondary</AppButton>
            <AppButton color="success">success</AppButton>
            <AppButton color="error">error</AppButton>
            <AppButton color="info">info</AppButton>
            <AppButton color="warning">warning</AppButton>
            <AppButton color="red" endIcon="close">
              Red
            </AppButton>
            <AppButton color="green" startIcon="menu">
              Green
            </AppButton>
            <AppButton color="blue" startIcon="menu" endIcon="close">
              Blue
            </AppButton>
            <AppButton color="#f0f" to="/">
              #f0f
            </AppButton>
          </Box>
        </Stack>

        <Stack>
          <Box>
            <Typography component="div" variant="h5">
              AppIconButton
            </Typography>
          </Box>
          <Box>
            {Object.keys(ICONS).map((icon) => (
              <AppIconButton key={icon} icon={icon} title={icon} />
            ))}
          </Box>
        </Stack>

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
