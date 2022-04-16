import { Stack, Typography } from '@mui/material';
import { NextPage } from 'next';

import DemoAppButton from 'src/components/forPages/shared/DemoAppButton';
import DemoAppIcon from 'src/components/forPages/shared/DemoAppIcon';
import DemoAppIconButton from 'src/components/forPages/shared/DemoAppIconButton';

/**
 * Renders About Application page
 * @page AboutPage
 */
const AboutPage: NextPage = () => {
  return (
    <Stack>
      <Typography>About page</Typography>
      <Typography>
        Bla bla bla. Bla bla bla. Bla bla bla. Bla bla bla. Bla bla bla. Bla bla bla. Bla bla bla. Bla bla bla.{' '}
      </Typography>
      <br />
      <br />
      <Stack alignItems="center" spacing={1}>
        <DemoAppButton />
        <DemoAppIcon />
        <DemoAppIconButton />
      </Stack>
    </Stack>
  );
};

export default AboutPage;
