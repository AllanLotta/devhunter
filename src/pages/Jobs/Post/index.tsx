import React, { useCallback, useRef } from 'react';
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

interface PostFormData {
  title: string;
  description: string;
  role: string;
  type: string;
  level: string;
  salary_min: number;
  salary_max: number;
}

const PostJob: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: PostFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('Field required'),
        description: Yup.string().required('Field required'),
        role: Yup.string(),
        type: Yup.string(),
        level: Yup.string(),
        salary_min: Yup.number().required('Field required'),
        salary_max: Yup.number().required('Field required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      // call create post here

      history.push('/');
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
            <Select name="role" placeholder="Select Role" options={roles} />
            <Select name="type" placeholder="Select Type" options={types} />
            <Select name="level" placeholder="Select Level" options={levels} />
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
          <span>Description</span>
          <TextArea name="description" placeholder="Description" />

          <button type="submit">Post</button>
        </Form>
      </Content>
    </Container>
  );
};
export default PostJob;
