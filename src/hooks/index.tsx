import React from 'react';

import { JobsProvider } from './Jobs';
import { CompanyProvider } from './Company';

const AppProvider: React.FC = ({ children }) => (
  <JobsProvider>
    <CompanyProvider>{children}</CompanyProvider>
  </JobsProvider>
);

export default AppProvider;
