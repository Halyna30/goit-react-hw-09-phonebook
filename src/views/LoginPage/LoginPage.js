import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from '../../Redux/auth/auth-operation';
import Container from '../../components/Container';
import PropTypes from 'prop-types';
import s from './LoginPage.module.scss';
import Button from '@material-ui/core/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onLogin = user => dispatch(authOperation.logIn(user));

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    onLogin({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Container>
        <h1>Login page</h1>

        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <label className={s.label}>
            email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>

          <label className={s.label}>
            password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          <Button type="submit" variant="contained" color="primary">
            Войти
          </Button>
        </form>
      </Container>
    </div>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
