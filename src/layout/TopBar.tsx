import { AppBar, Toolbar, Typography } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

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
      sx={{
        // boxShadow: 'none', // Uncomment to hide shadow
        minWidth: '20rem',
        // backgroundColor: theme.palette.primary.main, // Uncomment if you also need colored background in dark mode
      }}
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
