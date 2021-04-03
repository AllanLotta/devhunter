import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';
import { IJobCardProps } from './interfaces';

import { Container } from './styles';

const JobCard: React.FC<IJobCardProps> = ({ job }) => {
  return (
    <Container>
      <span>{job.role}</span>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <span>
        ${formatNumber(job.salary_min)} - ${formatNumber(job.salary_max)}
      </span>
      <Link to={`/Job/${job.id}`}>
        <button type="button">See more</button>
      </Link>
    </Container>
  );
};

export default JobCard;
