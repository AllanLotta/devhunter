import axios from 'axios';
import React, { createContext, useContext, useCallback } from 'react';
import IJobsContextData, { IJob, PostFormData } from './interfaces';
import { baseURL } from '../../services/api';

const JobsContext = createContext<IJobsContextData>({} as IJobsContextData);

const JobsProvider: React.FC = ({ children }) => {
  const getJobsList = useCallback(async (): Promise<IJob[]> => {
    try {
      const response = await axios.get(`${baseURL}/jobs`);

      return response.data;
    } catch (error) {
      return [] as IJob[];
    }
  }, []);

  const getJobById = useCallback(async (id: number): Promise<IJob> => {
    try {
      const response = await axios.get(`${baseURL}/jobs/${id}`);

      return response.data;
    } catch (error) {
      return {} as IJob;
    }
  }, []);

  const postJob = useCallback(async (data: IJob): Promise<boolean> => {
    try {
      const response = await axios.post(`${baseURL}/jobs`, data, {
        headers: {
          'Content-type': 'application/json; charset=utf-8',
        },
      });
      if (response.data.id) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }, []);

  const editJob = useCallback(async (data: IJob): Promise<boolean> => {
    try {
      const response = await axios.put(`${baseURL}/jobs/${data.id}`, data, {
        headers: {
          'Content-type': 'application/json; charset=utf-8',
        },
      });
      if (response.data.id) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }, []);

  const deleteJob = useCallback(async (id: number): Promise<boolean> => {
    try {
      const response = await axios.delete(`${baseURL}/jobs/${id}`);
      if (response.data) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }, []);

  return (
    <JobsContext.Provider
      value={{
        getJobsList,
        getJobById,
        postJob,
        editJob,
        deleteJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

function useJobs(): IJobsContextData {
  const context = useContext(JobsContext);

  if (!context) {
    throw new Error('useJobs must be used within an JobsProvider');
  }

  return context;
}

export { JobsProvider, useJobs };
