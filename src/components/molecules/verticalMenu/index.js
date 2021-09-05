import { Link, Spacing } from '@atoms';
import { PATHS } from '@constants/paths';
import RcMenu, { MenuItem as RcMenuItem } from 'rc-menu';
import './style.scss';

const classes = {
  link: 'flex items-center',
  icon: '',
  label: 'flex-1 truncate',
  badge: 'w-7 h-4 text- bg-white rounded-100px text-dark-alpha perfect-center text-12px',
};

const Badge = (props) => <span {...props} className={classes.badge} />;

const Menu = (props) => {
  const { menuProps, menuItemProps, data = [1, 2, 3] } = props;
  return (
    <RcMenu mode='vertical' {...menuProps}>
      {data.map(({ icon, label, count, path, appendBase = true }) => {
        const pathname = appendBase ? `${PATHS.DASHBOARD}${path}` : path;
        return (
          <RcMenuItem {...menuItemProps}>
            <Link to={pathname} className={classes.link}>
              <span children={icon} className={classes.icon} />
              <Spacing className='pl-4' />
              <span children={label} className={classes.label} />
              <Spacing className='pl-1' />
              {count ? <Badge children={count} /> : null}
            </Link>
          </RcMenuItem>
        );
      })}
    </RcMenu>
  );
};

export default Menu;
