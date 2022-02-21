import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { LinkToPage } from '../../utils/type';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AppIcon, AppLink } from '../../components';

interface Props extends LinkToPage {
  openInNewTab?: boolean;
  selected?: boolean;
  onClick?: React.MouseEventHandler;
}

/**
 * Renders Navigation Item for SideBar, detects current url and sets selected state if needed
 * @component SideBarNavItem
 */
const SideBarNavItem: FunctionComponent<Props> = ({
  openInNewTab,
  icon,
  path,
  selected: propSelected = false,
  subtitle,
  title,
  onClick,
}) => {
  const router = useRouter();
  const selected = propSelected || (path && router.pathname.startsWith(path)) || false;

  return (
    <ListItemButton component={AppLink} openInNewTab={openInNewTab} selected={selected} to={path} onClick={onClick}>
      <ListItemIcon>{icon && <AppIcon icon={icon} />}</ListItemIcon>
      <ListItemText primary={title} secondary={subtitle} />
    </ListItemButton>
  );
};

export default SideBarNavItem;
