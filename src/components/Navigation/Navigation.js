import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import PropTypes from 'prop-types';
import s from './Navigation.module.scss';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <ul className={s.list}>
      <li>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink
            to="/contacts"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.string,
};

export default Navigation;
