import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';
import Container from '@material-ui/core/Container';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading="Загрузка" persistor={store.persistor}>
        <BrowserRouter>
          <Container>
            <App />
          </Container>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
