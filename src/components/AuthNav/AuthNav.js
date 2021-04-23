import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';
import routes from '../../routes';

const AuthNav = () => (
  <ul className={s.userMenu}>
    <li>
      <NavLink
        exact
        to={routes.register}
        className={s.link}
        activeClassName={s.activeLink}
      >
        Register
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to={routes.login}
        className={s.link}
        activeClassName={s.activeLink}
      >
        Login
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
