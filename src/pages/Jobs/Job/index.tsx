import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';
import { IState } from '../../../store';
import {
  clearAlert,
  deleteJobRequest,
} from '../../../store/modules/jobs/actions';
import { IJob } from '../../../store/modules/jobs/types';
import { formatNumber } from '../../../utils/formatNumber';

import { Container, Content, ActionsContainer } from './styles';

interface Params {
  id: string;
}

const Job: React.FC = () => {
  const { id } = useParams<Params>();
  const dispatch = useDispatch();
  const { alert } = useSelector((state: IState) => state.jobs);

  const [job, setJob] = useState<IJob>({} as IJob);
  const history = useHistory();

  useEffect(() => {
    if (alert?.type === 'success') {
      history.push('/jobs');
      dispatch(clearAlert());
    }
  }, [alert]);

  useEffect(() => {
    const getJobData = async () => {
      const jobData = await api(`jobs/${id}`);
      setJob(jobData.data);
    };

    getJobData();
  }, [id]);

  const handleDelete = async () => {
    dispatch(deleteJobRequest(job.id));
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
