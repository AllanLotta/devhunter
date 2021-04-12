export enum ActionTypes {
  editJobRequest = 'EDIT_JOB_REQUEST',
  editJobSuccess = 'EDIT_JOB_SUCCESS',
  editJobFailure = 'EDIT_JOB_FAILURE',

  postJobRequest = 'POST_JOB_REQUEST',
  postJobSuccess = 'POST_JOB_SUCCESS',
  postJobFailure = 'POST_JOB_FAILURE',

  deleteJobRequest = 'DELETE_JOB_REQUEST',
  deleteJobSuccess = 'DELETE_JOB_SUCCESS',
  deleteJobFailure = 'DELETE_JOB_FAILURE',

  clearAlert = 'CLEAR_ALERT',
}

type AlertType = 'success' | 'error';

export interface IAlert {
  type: AlertType;
  message: string;
  show: boolean;
}

export interface PostFormData {
  title: string;
  company_id: string;
  description: string;
  role: string;
  type: string;
  level: string;
  salary_min: number;
  salary_max: number;
}

export interface IJob {
  id: string;
  title: string;
  company_id: string;
  description: string;
  role: string;
  type: string;
  level: string;
  salary_min: number;
  salary_max: number;
}
export interface IJobsState {
  jobs: IJob[];
  alert: IAlert | null;
}
