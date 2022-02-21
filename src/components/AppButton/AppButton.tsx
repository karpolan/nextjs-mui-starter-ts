import Button, { ButtonProps } from '@mui/material/Button';
import { FunctionComponent, ReactNode, useMemo } from 'react';
import AppIcon from '../AppIcon';
import { APP_BUTTON_VARIANT } from '../config';

interface Props extends ButtonProps {
  endIcon?: string | ReactNode;
  label?: string; // Alternate to .text
  text?: string; // Alternate to .label
  startIcon?: string | ReactNode;
  // Missing props
  component?: React.ElementType; // Could be RouterLink, AppLink, <a>, etc.
  to?: string; // Link prop
  href?: string; // Link prop
  openInNewTab?: boolean; // Link prop
  underline?: 'none' | 'hover' | 'always'; // Link prop
}

/**
 * Application styled Material UI Button with Box around to specify margins using props
 * @component AppButton
 * @param {string} [color] - color of the button body 'primary', 'secondary', 'warning', and so on
 * @param {string} [children] - content to render, overrides .label and .text props
 * @param {tring | ReactNode} [endIcon] - name of AppIcon or ReactNode to show after the button label
 * @param {string} [label] - text to render, alternate to .text
 * @param {tring | ReactNode} [startIcon] - name of AppIcon or ReactNode to show before the button label
 * @param {Array<func| object| bool> | func | object} [sx] - additional CSS styles to apply to the button
 * @param {string} [text] - text to render, alternate to .label
 */
const AppButton: FunctionComponent<Props> = ({
  children,
  color = 'inherit',
  endIcon,
  label,
  startIcon,
  sx = { margin: 1 },
  text,
  underline = 'none',
  variant = APP_BUTTON_VARIANT,
  ...restOfProps
}) => {
  const iconStart: ReactNode = useMemo(
    () => (!startIcon ? undefined : typeof startIcon === 'string' ? <AppIcon icon={String(startIcon)} /> : startIcon),
    [startIcon]
  );

  const iconEnd: ReactNode = useMemo(
    () => (!endIcon ? undefined : typeof endIcon === 'string' ? <AppIcon icon={String(endIcon)} /> : endIcon),
    [endIcon]
  );

  return (
    <Button variant={variant} {...{ ...restOfProps, underline }}>
      {children || label || text}
    </Button>
  );
};

export default AppButton;
