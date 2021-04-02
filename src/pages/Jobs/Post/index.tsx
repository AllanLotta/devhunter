import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import Input from '../../../components/Input';

import { Container, Content } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';
import TextArea from '../../../components/TextArea';

interface PostFormData {
  title: string;
  description: string;
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
        <h1>Post a job</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <span>Title</span>
          <Input name="title" placeholder="Title" />
          <span>Description</span>
          <TextArea name="description" placeholder="Description" />

          <button type="submit">Post</button>
        </Form>
      </Content>
    </Container>
  );
};
export default PostJob;
