import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Router>
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
    <GlobalStyles />
  </Router>
);

export default App;
