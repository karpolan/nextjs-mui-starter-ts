import { forwardRef } from 'react';
import { AppLink } from '../../components';

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1, // takes all width
//   },
//   link: {
//     color: theme.palette.text.secondary,
//   },
//   linkActive: {
//     color: theme.palette.text.primary,
//   },
// }));

/**
 * Router link with styling to use in SideBar, highlights the current url.
 */
const SideBarLink = forwardRef<any, any>((props, ref) => {
  return (
    <div ref={ref}>
      {/* <NavLink exact className={classLink} activeClassName={classes.linkActive} {...restOfProps} /> */}
      <AppLink {...props} />
    </div>
  );
});

export default SideBarLink;
