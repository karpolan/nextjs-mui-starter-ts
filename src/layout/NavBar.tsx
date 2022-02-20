import React, { FunctionComponent, useCallback, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useRouter } from 'next/router';
import AppIcon from '../components/AppIcon';
import { LinkToPage } from '../utils/type';

type Props = {
  items: Array<LinkToPage>;
};

/**
 * Renders horizontal Navigation Bar using MUI BottomNavigation component
 * @component NavBar
 */
const NavBar: FunctionComponent<Props> = ({ items }) => {
  const router = useRouter();
  const [value, setValue] = useState('/');

  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: string) => {
      setValue(newValue);
      router.push(newValue);
    },
    [router]
  );

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels>
      {items.map(({ title, path, icon }) => (
        <BottomNavigationAction key={`${title}-${path}`} label={title} value={path} icon={<AppIcon icon={icon} />} />
      ))}
    </BottomNavigation>
  );
};

export default NavBar;
