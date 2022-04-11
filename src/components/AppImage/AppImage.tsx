import React, { FunctionComponent } from 'react';
import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';

/**
 * This is simply fix for NextJS image optimization
 */
const customImageLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

/**
 * Application wrapper around NextJS image with some default props
 * @component AppImage
 */
const AppImage: FunctionComponent<ImageProps> = ({ alt = 'Image', height = 256, width = 256, ...restOfProps }) => {
  // Uses custom loader + unoptimized="true" to avoid NextImage warning https://nextjs.org/docs/api-reference/next/image#unoptimized
  return (
    <NextImage alt={alt} loader={customImageLoader} height={height} unoptimized={true} width={width} {...restOfProps} />
  );
};

export default AppImage;
