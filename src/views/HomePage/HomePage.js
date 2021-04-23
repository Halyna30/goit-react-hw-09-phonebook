import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import routes from '../../routes';
import s from './HomePage.module.scss';

const HomePage = () => (
  <section className={s.hero}>
    <Container>
      <h1 className={s.title}>
        Welcome to our service{' '}
        <Link to={routes.login} className={s.link}>
          log in
        </Link>
      </h1>
    </Container>
  </section>
);

export default HomePage;
