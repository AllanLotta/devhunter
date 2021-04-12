import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';

import Input from '../../../components/Input';

import { Container, Content, SalaryContainer, SelectContainer } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';
import TextArea from '../../../components/TextArea';
import { Select } from '../../../components/Select';
import { levels, roles, types } from '../../../utils/const';
import { ICompany } from '../../../hooks/Company/interfaces';
import { ReactSelectItens } from '../interfaces';
import { IState } from '../../../store';
import {
  clearAlert,
  editJobRequest,
} from '../../../store/modules/jobs/actions';
import { IJob, PostFormData } from '../../../store/modules/jobs/types';
import api from '../../../services/api';

interface Params {
  id: string;
}

const EditJob: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { alert } = useSelector((state: IState) => state.jobs);

  const { id } = useParams<Params>();
  const [job, setJob] = useState<IJob>();
  const [companies, setCompanies] = useState<ICompany[]>();
  const [selectCompanyData, setSelectCompanyData] = useState<
    ReactSelectItens[]
  >([] as ReactSelectItens[]);

  useEffect(() => {
    const loadJobData = async () => {
      const jobData = await api(`jobs/${id}`);
      console.log(jobData);
      setJob(jobData.data);
    };
    const loadCompanies = async () => {
      const response = await api.get('companies');
      setCompanies(response.data);
    };
    loadJobData();
    loadCompanies();
  }, []);

  useEffect(() => {
    if (companies && companies?.length > 0) {
      const loadCompanySelectData = () => {
        const selectDataTemp: ReactSelectItens[] = [];
        companies.map((company) => {
          selectDataTemp.push({
            value: company.id,
            label: company.company,
          });
        });
        setSelectCompanyData(selectDataTemp);
      };
      loadCompanySelectData();
    }
  }, [companies]);

  useEffect(() => {
    if (alert?.type === 'success') {
      history.push('/jobs');
      dispatch(clearAlert());
    }
  }, [alert]);

  const handleSubmit = useCallback(async (data: PostFormData) => {
    try {
      console.log(data);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('Field required'),
        description: Yup.string().required('Field required'),
        company_id: Yup.string(),
        role: Yup.string(),
        type: Yup.string(),
        level: Yup.string(),
        salary_min: Yup.number().required('Field required'),
        salary_max: Yup.number().required('Field required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const params: IJob = {
        id,
        ...data,
      };

      dispatch(editJobRequest(params));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  const setDefaultValueCompanySelect = useCallback(() => {
    if (companies && job) {
      const result = companies.filter((item) => item.id === job.company_id);
      if (result.length > 0) {
        return {
          value: result[0].id,
          label: result[0].company,
        };
      }
      return null;
    }
    return null;
  }, [job, companies]);

  return (
    <Container>
      <Content>
        <h2>Post a job</h2>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <span>Job Title</span>
          <Input name="title" defaultValue={job?.title} placeholder="Title" />
          {job && (
            <SelectContainer>
              <Select
                defaultValue={{ value: job?.role, label: job?.role }}
                name="role"
                hideSelectedOptions
                placeholder="Select Role"
                options={roles}
              />
              <Select
                defaultValue={{ value: job?.type, label: job?.type }}
                name="type"
                hideSelectedOptions
                placeholder="Select Type"
                options={types}
              />
              <Select
                defaultValue={{ value: job?.level, label: job?.level }}
                name="level"
                hideSelectedOptions
                placeholder="Select Level"
                options={levels}
              />
            </SelectContainer>
          )}
          <SalaryContainer>
            <div>
              <span>Minimum payment</span>
              <Input
                defaultValue={job?.salary_min}
                name="salary_min"
                inputMode="numeric"
                placeholder="50000"
              />
            </div>
            <div>
              <span>Maximum payment</span>
              <Input
                defaultValue={job?.salary_max}
                name="salary_max"
                inputMode="numeric"
                placeholder="120000"
              />
            </div>
          </SalaryContainer>
          {job && companies && (
            <>
              <span>Company</span>
              <Select
                defaultValue={setDefaultValueCompanySelect()}
                hideSelectedOptions
                name="company_id"
                placeholder="Select Company"
                options={selectCompanyData}
              />
            </>
          )}
          <span>Description</span>
          <TextArea
            defaultValue={job?.description}
            name="description"
            placeholder="Description"
          />

          <button type="submit">Save</button>
        </Form>
      </Content>
    </Container>
  );
};

export default EditJob;
