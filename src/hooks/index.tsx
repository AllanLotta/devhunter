import React from 'react';

import { JobsProvider } from './Jobs';

const AppProvider: React.FC = ({ children }) => (
  <JobsProvider>{children}</JobsProvider>
);

export default AppProvider;
