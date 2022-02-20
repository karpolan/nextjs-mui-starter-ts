import clsx from 'clsx';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SideBarLink from './SideBarLink';
import { LinkToPage } from '../../utils/type';
import { AppIcon } from '../../components';
import { Stack } from '@mui/material';

/**
 * Renders list of Navigation Items inside SideBar
 * @param {string} [prop.className] - optional className for styling
 * @param {array} props.items - list of objects to render as navigation links
 * @param {boolean} [props.showIcons] - icons in links are visible when true
 * @param {func} [props.afterLinkClink] - optional callback called when some link was clicked
 */
interface Props {
  className?: string;
  items: Array<LinkToPage>;
  showIcons?: boolean;
  afterLinkClick?: React.MouseEventHandler;
}
const SideBarNavigation: React.FC<Props> = ({
  className,
  items,
  showIcons = false,
  afterLinkClick,
  ...restOfProps
}) => {
  return (
    <nav>
      <List {...restOfProps}>
        {items.map((link) => (
          <ListItem
            key={`${link.title}-${link.path}`}
            sx={{ display: 'flex', paddingTop: 0, paddingBottom: 0 }}
            disableGutters
          >
            <Button
              sx={{
                // color: theme.palette.button,
                padding: '10px 8px',
                justifyContent: 'flex-start',
                textTransform: 'none',
                letterSpacing: 0,
                width: '100%',
                // fontWeight: theme.typography.fontWeightMedium,
                flexGrow: 1,
              }}
              component={SideBarLink}
              to={link.path}
              onClick={afterLinkClick}
            >
              <Stack alignItems={'center'} sx={{ width: 24, height: 24, marginRight: 1 }}>
                {showIcons && link.icon ? <AppIcon icon={link.icon} /> : null}
              </Stack>
              {link.title}
            </Button>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default SideBarNavigation;
