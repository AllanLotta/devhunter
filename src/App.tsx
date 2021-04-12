import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';

import Routes from './routes';
import AppProvider from './hooks';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
    </AppProvider>
    <GlobalStyles />
  </Router>
);

export default App;
