import { Reducer } from 'redux';
import produce from 'immer';
import { IJobsState, ActionTypes } from './types';

const INITIAL_STATE: IJobsState = {
  jobs: [],
  alert: null,
};

const jobs: Reducer<IJobsState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.editJobSuccess: {
        draft.alert = {
          type: 'success',
          message: 'Edit job success!',
          show: true,
        };
        break;
      }
      case ActionTypes.editJobFailure: {
        draft.alert = {
          type: 'error',
          message: 'Edit job error!',
          show: true,
        };
        break;
      }
      case ActionTypes.postJobSuccess: {
        draft.alert = {
          type: 'success',
          message: 'Post job success!',
          show: true,
        };
        break;
      }
      case ActionTypes.postJobFailure: {
        draft.alert = {
          type: 'error',
          message: 'Post job error!',
          show: true,
        };
        break;
      }
      case ActionTypes.deleteJobSuccess: {
        draft.alert = {
          type: 'success',
          message: 'Delete job success!',
          show: true,
        };
        break;
      }
      case ActionTypes.deleteJobFailure: {
        draft.alert = {
          type: 'error',
          message: 'Delete job error!',
          show: true,
        };
        break;
      }
      case ActionTypes.clearAlert: {
        draft.alert = null;
        break;
      }
      default:
        break;
    }
  });
};

export default jobs;
