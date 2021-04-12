import React from 'react';
import { CompanyProvider } from './Company';

const AppProvider: React.FC = ({ children }) => (
  <CompanyProvider>{children}</CompanyProvider>
);

export default AppProvider;
