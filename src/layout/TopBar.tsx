import { AppBar, Toolbar, Typography } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

export const TOPBAR_MOBILE_HEIGHT = '56px';
export const TOPBAR_DESKTOP_HEIGHT = '64px';
interface Props {
  endNode?: ReactNode;
  startNode?: ReactNode;
  title?: string;
}

/**
 * Renders TopBar composition
 */
const TopBar: FunctionComponent<Props> = ({ endNode, startNode, title = '', ...restOfProps }) => {
  return (
    <AppBar
      component="div"
      sx={
        {
          // boxShadow: 'none', // Uncomment to hide shadow
        }
      }
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1 }}>
        {startNode}

        <Typography
          variant="h6"
          sx={{
            marginX: 1,
            flexGrow: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>

        {endNode}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
