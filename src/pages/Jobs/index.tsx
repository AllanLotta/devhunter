import React, { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard';
import { useJobs } from '../../hooks/Jobs';
import { IJob } from './interfaces';

import { Container, Content } from './styles';

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<IJob[]>([] as IJob[]);
  const { getJobsList } = useJobs();

  useEffect(() => {
    const loadJobs = async () => {
      const jobsArray = await getJobsList();
      setJobs(jobsArray);
    };
    loadJobs();
  }, []);

  return (
    <Container>
      <Content>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </Content>
    </Container>
  );
};

export default Jobs;
