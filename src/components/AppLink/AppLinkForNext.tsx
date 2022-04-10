// See: https://github.com/mui-org/material-ui/blob/6b18675c7e6204b77f4c469e113f62ee8be39178/examples/nextjs-with-typescript/src/Link.tsx
/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { APP_LINK_COLOR, APP_LINK_UNDERLINE } from '../config';

/**
 * Props for NextLinkComposed component
 */
interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'href' | 'as'> {
  to: NextLinkProps['href'];
  linkAs?: NextLinkProps['as'];
  href?: NextLinkProps['href'];
}

/**
 * NextJS composed link to use with Material UI
 * @NextLinkComposed NextLinkComposed
 */
const NextLinkComposed = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(function NextLinkComposed(
  { to, linkAs, href, replace, scroll, passHref, shallow, prefetch, ...restOfProps },
  ref
) {
  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      <a ref={ref} {...restOfProps} />
    </NextLink>
  );
});

/**
 * Props for AppLinkForNext component
 */
export type AppLinkProps = {
  activeClassName?: string;
  as?: NextLinkProps['as'];
  href?: string | NextLinkProps['href'];
  noLinkStyle?: boolean;
  to?: string | NextLinkProps['href'];
  openInNewTab?: boolean;
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
  Omit<MuiLinkProps, 'href'>;

/**
 * Material UI link for NextJS
 * A styled version of the Next.js Link component: https://nextjs.org/docs/#with-link
 * @component AppLinkForNext
 * @param {object|function} children - content to wrap with <a> tag
 * @param {string} [to] - internal link URI
 * @param {string} [href] - external link URI
 * @param {boolean} [openInNewTab] - link will be opened in new tab when true
 */
const AppLinkForNext = React.forwardRef<HTMLAnchorElement, AppLinkProps>(function Link(props, ref) {
  const {
    activeClassName = 'active',
    as: linkAs,
    className: classNameProps,
    href,
    noLinkStyle,
    role, // Link don't have roles.
    color = APP_LINK_COLOR,
    underline = APP_LINK_UNDERLINE,
    to,
    sx,
    openInNewTab = Boolean(href), // Open external links in new Tab by default
    ...restOfProps
  } = props;

  const router = useRouter();
  const destination = to || href || '';
  const pathname = typeof destination === 'string' ? destination : destination.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  const isExternal =
    typeof destination === 'string' && (destination.indexOf('http') === 0 || destination.indexOf('mailto:') === 0);

  const propsToRender = {
    color,
    underline,
    ...(openInNewTab ? { target: '_blank', rel: 'noreferrer noopener' } : {}),
    ...restOfProps,
  };

  if (isExternal) {
    if (noLinkStyle) {
      return <a className={className} href={destination as string} ref={ref as any} {...propsToRender} />;
    }

    return <MuiLink className={className} href={destination as string} ref={ref} sx={sx} {...propsToRender} />;
  }

  if (noLinkStyle) {
    return <NextLinkComposed className={className} ref={ref as any} to={destination} {...propsToRender} />;
  }

  return (
    <MuiLink
      component={NextLinkComposed}
      linkAs={linkAs}
      className={className}
      ref={ref}
      to={destination}
      sx={sx}
      {...propsToRender}
    />
  );
});

export default AppLinkForNext;
