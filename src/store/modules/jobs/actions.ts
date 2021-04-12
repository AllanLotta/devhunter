import { ActionTypes, IJob, PostFormData } from './types';

export function editJobRequest(data: IJob) {
  return {
    type: ActionTypes.editJobRequest,
    payload: {
      data,
    },
  };
}

export function editJobSuccess() {
  return {
    type: ActionTypes.editJobSuccess,
  };
}

export function editJobFailure() {
  return {
    type: ActionTypes.editJobFailure,
  };
}

export function postJobRequest(data: PostFormData) {
  return {
    type: ActionTypes.postJobRequest,
    payload: {
      data,
    },
  };
}

export function postJobSuccess() {
  return {
    type: ActionTypes.postJobSuccess,
  };
}

export function postJobFailure() {
  return {
    type: ActionTypes.postJobFailure,
  };
}

export function deleteJobRequest(id: string) {
  return {
    type: ActionTypes.deleteJobRequest,
    payload: {
      id,
    },
  };
}

export function deleteJobSuccess() {
  return {
    type: ActionTypes.deleteJobSuccess,
  };
}

export function deleteJobFailure() {
  return {
    type: ActionTypes.deleteJobFailure,
  };
}

export function clearAlert() {
  return {
    type: ActionTypes.clearAlert,
  };
}
