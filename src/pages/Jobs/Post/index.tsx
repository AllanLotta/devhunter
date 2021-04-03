import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

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

const PostJob: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { postJob } = useJobs();
  const { getCompanyList } = useCompany();
  const [companies, setCompanies] = useState<ICompany[]>();
  const [selectCompanyData, setSelectCompanyData] = useState<SelectData[]>(
    [] as SelectData[],
  );

  useEffect(() => {
    const loadCompanies = async () => {
      const companiesData = await getCompanyList();
      setCompanies(companiesData);
    };
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
        ...data,
        id: parseInt(Math.random().toString(36), 10),
      };

      const didPosted = await postJob(params);

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

  return (
    <Container>
      <Content>
        <h2>Post a job</h2>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <span>Job Title</span>
          <Input name="title" placeholder="Title" />
          <SelectContainer>
            <Select
              defaultValue={roles[0]}
              name="role"
              placeholder="Select Role"
              options={roles}
            />
            <Select
              defaultValue={types[0]}
              name="type"
              placeholder="Select Type"
              options={types}
            />
            <Select
              defaultValue={levels[0]}
              name="level"
              placeholder="Select Level"
              options={levels}
            />
          </SelectContainer>
          <SalaryContainer>
            <div>
              <span>Minimum payment</span>
              <Input
                name="salary_min"
                inputMode="numeric"
                placeholder="50000"
              />
            </div>
            <div>
              <span>Maximum payment</span>
              <Input
                name="salary_max"
                inputMode="numeric"
                placeholder="120000"
              />
            </div>
          </SalaryContainer>
          <span>Company</span>
          <Select
            name="company_id"
            placeholder="Select Company"
            options={selectCompanyData}
          />
          <span>Description</span>
          <TextArea name="description" placeholder="Description" />

          <button type="submit">Post</button>
        </Form>
      </Content>
    </Container>
  );
};
export default PostJob;
