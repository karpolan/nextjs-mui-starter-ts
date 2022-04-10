import { Stack } from '@mui/material';
import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        border: '1px #f00 dashed', // TODO: remove this, it's just for demo
      }}
    >
      Copyright &copy; KARPOLAN
    </Stack>
  );
};

export default Footer;
