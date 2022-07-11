import { NextPage } from 'next';
import { Stack, Typography } from '@mui/material';
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
    <Stack spacing={2} padding={2}>
      <Stack>
        <Typography variant="h3">DevTools page</Typography>
        <Typography variant="body1">This page is not visible on production.</Typography>
      </Stack>

      <Stack alignItems="center" spacing={1}>
        <DemoAppAlert />
        <DemoAppButton />
        <DemoAppIcon />
        <DemoAppIconButton />
        <DemoAppImage />
      </Stack>
    </Stack>
  );
};

export default DevPage;
