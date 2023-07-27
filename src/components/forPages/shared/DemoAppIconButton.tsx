import { Box, Card, CardContent, CardHeader, Tooltip } from '@mui/material';
import { AppIconButton } from 'src/components';

/**
 * Renders "Demo Section" for AppIconButton component
 * @component DemoAppIconButton
 */
const DemoAppIconButton = () => {
  return (
    <Card>
      <CardHeader
        title="AppIconButton"
        subheader="Composition of IconButton + Tooltip with SVG icon specified by name"
      />
      <CardContent sx={{ px: 1, py: 0 }}>
        <Box>
          <AppIconButton title="Default icon, no color specified" />
          <AppIconButton icon="close" color="primary" title="Close icon with Primary color" />
          <AppIconButton icon="menu" color="secondary" title="Menu icon with Secondary color" />
          <AppIconButton icon="settings" color="error" title="Settings icon with Error color" />
          <AppIconButton icon="search" color="warning" title="Search icon with Warning color" />
          <AppIconButton icon="info" color="info" title="Info icon with Info color" />
          <AppIconButton icon="home" color="success" title="Home icon with Success color" />
          <AppIconButton icon="account" color="inherit" title="Account icon with Inherit color" />
          <Tooltip title="Disabled Close icon with Secondary color">
            <span>
              <AppIconButton icon="close" color="secondary" disabled />
            </span>
          </Tooltip>

          <AppIconButton
            color="secondary"
            icon="close"
            size="large"
            to="/about"
            title="Large icon with Secondary color as Internal link"
          />
          <AppIconButton
            color="#F0F"
            href="https://karpolan.com"
            icon="close"
            size="small"
            title="Small icon with Custom color as External link"
          />
          <AppIconButton icon="menu" color="primary" size="small" title="Small Menu icon with Primary color" />
          <AppIconButton
            color="primary"
            title="Default icon with Primary color and Arrow tooltip"
            tooltipProps={{ arrow: true }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DemoAppIconButton;
