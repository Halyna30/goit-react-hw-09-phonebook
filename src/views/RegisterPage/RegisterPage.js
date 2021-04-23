import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from '../../Redux/auth/auth-operation';
import Container from '../../components/Container';
import PropTypes from 'prop-types';
import s from './RegisterPage.module.scss';
import Button from '@material-ui/core/Button';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onRegister = user => dispatch(authOperation.register(user));
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onRegister({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
  );
};

RegisterPage.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterPage;
