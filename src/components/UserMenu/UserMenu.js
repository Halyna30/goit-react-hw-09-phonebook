import defaultAvatar from './default-avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import authOperation from '../../Redux/auth/auth-operation';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import s from './UserMenu.module.scss';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  const avatar = defaultAvatar;
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperation.logOut);

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {email}</span>
      <Button
        type="button"
        onClick={onLogout}
        variant="contained"
        color="primary"
      >
        Logout
      </Button>
    </div>
  );
};

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
export default UserMenu;
