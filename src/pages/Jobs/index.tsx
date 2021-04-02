import React from 'react';
import JobCard from '../../components/JobCard';
import { useJobs } from '../../hooks/Jobs';

import { Container, Content } from './styles';

const Jobs: React.FC = () => {
  const { jobs } = useJobs();
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
