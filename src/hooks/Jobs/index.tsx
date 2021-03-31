import React, { createContext, useState, useContext, useCallback } from 'react';

import IJobsContext from './interface';

const JobsContext = createContext<IJobsContext>({} as IJobsContext);

const JobsProvider: React.FC = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  return (
    <JobsContext.Provider
      value={{
        jobs,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

const JobsCreateContext = (): IJobsContext => {
  return useContext(JobsContext);
};

export { JobsContext, JobsProvider, JobsCreateContext };
