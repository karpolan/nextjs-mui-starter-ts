import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { Avatar, Stack, Typography, TypographyVariant } from '@mui/material';

const URL_LOGO = '/img/logo.svg';
const SIZE_LOGO = 96;

interface ImageProps {
  width?: number;
  height?: number;
}

interface LogoProps extends ImageProps {
  typographyVariant?: TypographyVariant;
}

const LogoAsNextImage: FunctionComponent<ImageProps> = ({ width, height }) => {
  return <Image src={URL_LOGO} width={width} height={height} alt="Logotype" />;
};

const LogoAsMuiAvatar: FunctionComponent<ImageProps> = ({ width, height }) => {
  return <Avatar src={URL_LOGO} variant="square" sx={{ width, height }} />;
};

/**
 * Renders composition of Logotype image and Title text.
 * @param {integer} [width] - width of the Logotype image
 * @param {integer} [height] - width of the Logotype image
 * @param {string} [typographyVariant] - variant of the Title text
 */
const Logo: FunctionComponent<LogoProps> = ({ height = SIZE_LOGO, typographyVariant = 'h1', width = SIZE_LOGO }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{
        border: '1px #f0f dashed', // TODO: remove this, it's just for demo
      }}
    >
      {/* <LogoAsNextImage width={width} height={height} /> */}
      <LogoAsMuiAvatar width={width} height={height} />
      <Typography variant={typographyVariant} component="span">
        _TITLE_
      </Typography>
    </Stack>
  );
};

export default Logo;
