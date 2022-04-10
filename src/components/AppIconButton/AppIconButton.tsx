import { Tooltip } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { FunctionComponent } from 'react';
import AppIcon from '../AppIcon';

interface Props extends IconButtonProps {
  icon?: string;
  // Missing props
  component?: React.ElementType; // Could be RouterLink, AppLink, <a>, etc.
  to?: string; // Link prop
  href?: string; // Link prop
  openInNewTab?: boolean; // Link prop
}

/**
 * Renders MUI IconButton with SVG image by given Icon name
 * @param {string} [color] - color of background and hover effect. MUI color name!
 * @param {boolean} [disabled] - the IconButton is not active when true, also the Tooltip is not rendered.
 * @param {string} [icon] - name of Icon to render inside the IconButton
 * @param {string} [iconColor] - color of Icon to render inside the IconButton
 * @param {string} [title] - when set, the IconButton is rendered inside Tooltip with this text
 */
const AppIconButton: FunctionComponent<Props> = ({ color, children, disabled, icon, title, ...restOfProps }) => {
  const renderIcon = () => (
    <IconButton disabled={disabled} {...restOfProps}>
      <AppIcon icon={icon} />
      {children}
    </IconButton>
  );

  // When title is set, wrap the IconButton with Tooltip.
  // Note: when IconButton is disabled the Tooltip is not working, so we don't need it
  if (title && !disabled) {
    return <Tooltip title={title}>{renderIcon()}</Tooltip>;
  }

  return title && !disabled ? <Tooltip title={title}>{renderIcon()}</Tooltip> : renderIcon();
};

export default AppIconButton;
