import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import PropTypes from 'prop-types';
import Container from '../Container';
import authSelectors from '../../Redux/auth/auth-selectors';
import s from './AppBar.module.scss';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header>
      <Container classes={s.header}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
};

AppBar.propTypes = {
  isAuthenticated: PropTypes.string,
};

export default AppBar;
