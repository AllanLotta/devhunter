import React, { createContext, useState, useContext } from 'react';

import IJobsContext from './interface';

const JobsContext = createContext<IJobsContext>({} as IJobsContext);

const JobsProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
