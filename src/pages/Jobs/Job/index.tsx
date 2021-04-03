import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { useJobs } from '../../../hooks/Jobs';
import { IJob } from '../../../hooks/Jobs/interfaces';
import { formatNumber } from '../../../utils/formatNumber';

import { Container, Content, ActionsContainer } from './styles';

interface Params {
  id: string;
}

const Job: React.FC = () => {
  const { id } = useParams<Params>();
  const [job, setJob] = useState<IJob>({} as IJob);
  const history = useHistory();
  const { getJobById, deleteJob } = useJobs();

  useEffect(() => {
    const getJobData = async () => {
      const jobId = parseInt(id, 10);
      const jobData = await getJobById(jobId);
      setJob(jobData);
    };

    getJobData();
  }, [id]);

  const handleDelete = async () => {
    const isDeleted = await deleteJob(job.id);
    if (isDeleted) {
      history.push('/jobs');
    }
  };

  return (
    <Container>
      <Content>
        <div>
          <span>{job?.role}</span>
          <strong>{job?.title}</strong>
          <p>{job?.description}</p>
          <span>
            ${formatNumber(job?.salary_min)} - ${formatNumber(job?.salary_max)}
          </span>
        </div>
        <ActionsContainer>
          <Link to={`/Edit/${id}`}>
            <button className="edit-button" type="button">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete()}
            className="delete-button"
            type="button"
          >
            Delete
          </button>
        </ActionsContainer>
      </Content>
    </Container>
  );
};

export default Job;
