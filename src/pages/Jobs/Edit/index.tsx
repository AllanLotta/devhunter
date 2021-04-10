import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';

import Input from '../../../components/Input';

import { Container, Content, SalaryContainer, SelectContainer } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';
import TextArea from '../../../components/TextArea';
import { Select } from '../../../components/Select';
import { levels, roles, types } from '../../../utils/const';
import { useJobs } from '../../../hooks/Jobs';
import { IJob, PostFormData } from '../../../hooks/Jobs/interfaces';
import { useCompany } from '../../../hooks/Company';
import { ICompany } from '../../../hooks/Company/interfaces';

interface SelectData {
  value: number;
  label: string;
}

interface Params {
  id: string;
}

const EditJob: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { id } = useParams<Params>();
  const [job, setJob] = useState<IJob>();
  const { editJob, getJobById } = useJobs();
  const { getCompanyList } = useCompany();
  const [companies, setCompanies] = useState<ICompany[]>();
  const [selectCompanyData, setSelectCompanyData] = useState<SelectData[]>(
    [] as SelectData[],
  );

  useEffect(() => {
    const loadJobData = async () => {
      const jobId = parseInt(id, 10);
      const jobData = await getJobById(jobId);
      console.log(jobData);
      setJob(jobData);
    };
    const loadCompanies = async () => {
      const companiesData = await getCompanyList();
      setCompanies(companiesData);
    };
    loadJobData();
    loadCompanies();
  }, []);

  useEffect(() => {
    if (companies && companies?.length > 0) {
      const loadCompanySelectData = () => {
        const selectDataTemp: SelectData[] = [];
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

  const handleSubmit = useCallback(async (data: PostFormData) => {
    try {
      console.log(data);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('Field required'),
        description: Yup.string().required('Field required'),
        company_id: Yup.number(),
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
        id: parseInt(id, 10),
        ...data,
      };

      const didPosted = await editJob(params);

      if (didPosted) {
        history.push('/jobs');
      }
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
