import axios from 'axios';
import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { IJob } from '../../pages/Jobs/interfaces';
import { baseURL } from '../../services/api';
import IJobsContextData from './interface';

const JobsContext = createContext<IJobsContextData>({} as IJobsContextData);

const JobsProvider: React.FC = ({ children }) => {
  const [jobs, setJobs] = useState<IJob[]>([] as IJob[]);

  useEffect(() => {
    const loadJobs = async (): Promise<void> => {
      const response = await axios.get(`${baseURL}/jobs`);
      setJobs(response.data);
    };
    loadJobs();
  }, []);

  const getJobById = useCallback(async (id: number): Promise<IJob | null> => {
    try {
      const response = await axios.get(`${baseURL}/jobs/${id}`);

      return response.data;
    } catch (error) {
      return null;
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
      if (response.data.id) {
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
        jobs,
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
