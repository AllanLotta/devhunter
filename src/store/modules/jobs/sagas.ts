import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
  editJobRequest,
  editJobSuccess,
  editJobFailure,
  postJobRequest,
  postJobSuccess,
  postJobFailure,
  deleteJobRequest,
  deleteJobSuccess,
  deleteJobFailure,
} from './actions';

import api from '../../../services/api';
import { ActionTypes } from './types';

type EditJobRequest = ReturnType<typeof editJobRequest>;
type PostJobRequest = ReturnType<typeof postJobRequest>;
type DeleteJobRequest = ReturnType<typeof deleteJobRequest>;

function* editJob({ payload }: EditJobRequest) {
  const { data } = payload;

  const response: AxiosResponse = yield call(api.put, `jobs/${data.id}`, data);

  console.log('edit response', response);

  if (response.status === 200) {
    yield put(editJobSuccess());
  } else {
    yield put(editJobFailure());
  }
}

function* postJob({ payload }: PostJobRequest) {
  const { data } = payload;

  const response: AxiosResponse = yield call(api.post, `jobs`, data);

  console.log('post response', response);

  if (response.status === 201) {
    yield put(postJobSuccess());
  } else {
    yield put(postJobFailure());
  }
}

function* deleteJob({ payload }: DeleteJobRequest) {
  const { id } = payload;

  const response: AxiosResponse = yield call(api.delete, `jobs/${id}`);

  console.log('response', response);

  if (response.status === 200) {
    yield put(deleteJobSuccess());
  } else {
    yield put(deleteJobFailure());
  }
}

export default all([
  takeLatest(ActionTypes.editJobRequest, editJob),
  takeLatest(ActionTypes.postJobRequest, postJob),
  takeLatest(ActionTypes.deleteJobRequest, deleteJob),
]);
