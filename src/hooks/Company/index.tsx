import axios from 'axios';
import React, { createContext, useContext, useCallback } from 'react';
import ICompanyContextData, { ICompany } from './interfaces';
import { baseURL } from '../../services/api';
import { IJob } from '../../store/modules/jobs/types';

const CompanyContext = createContext<ICompanyContextData>(
  {} as ICompanyContextData,
);

const CompanyProvider: React.FC = ({ children }) => {
  const getCompanyList = useCallback(async (): Promise<ICompany[]> => {
    try {
      const response = await axios.get(`${baseURL}/companies`);

      return response.data;
    } catch (error) {
      return [] as ICompany[];
    }
  }, []);

  const getCompanyById = useCallback(async (id: number): Promise<ICompany> => {
    try {
      const response = await axios.get(`${baseURL}/companies/${id}`);

      return response.data;
    } catch (error) {
      return {} as ICompany;
    }
  }, []);

  const getCompanyJobs = useCallback(async (id: number): Promise<IJob[]> => {
    try {
      const response = await axios.get(`${baseURL}/jobs?company_id=${id}`);

      return response.data;
    } catch (error) {
      return [] as IJob[];
    }
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        getCompanyList,
        getCompanyById,
        getCompanyJobs,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

function useCompany(): ICompanyContextData {
  const context = useContext(CompanyContext);

  if (!context) {
    throw new Error('useCompany must be used within an CompanyProvider');
  }

  return context;
}

export { CompanyProvider, useCompany };
