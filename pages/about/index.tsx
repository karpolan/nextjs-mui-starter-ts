import { Stack, Typography } from '@mui/material';
import { NextPage } from 'next';
import Footer from '../../src/components/Footer';
import Logo from '../../src/components/Logo';

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
    </Stack>
  );
};

export default AboutPage;
