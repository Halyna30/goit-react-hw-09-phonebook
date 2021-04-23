import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import authOperation from './Redux/auth/auth-operation';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import routes from './routes';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import CssBaseline from '@material-ui/core/CssBaseline';

const HomePage = lazy(() => import('./views/HomePage'));
const Contacts = lazy(() => import('./views/ContactsPage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  const onGetCurrentUser = () => dispatch(authOperation.getCurrentUser());

  useEffect(() => {
    onGetCurrentUser();
  }, []);

  return (
    <>
      <AppBar />
      <CssBaseline />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <PrivateRoute
            exact
            path={routes.contacts}
            component={Contacts}
            redirectTo={routes.login}
          />
          <PublicRoute
            path={routes.register}
            restricted
            component={RegisterPage}
            redirectTo={routes.contacts}
          />
          <PublicRoute
            path={routes.login}
            restricted
            component={LoginPage}
            redirectTo={routes.contacts}
          />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

App.propTypes = {
  onGetCurrentUser: PropTypes.func.isRequired,
};

export default App;
