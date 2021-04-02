import { IJob } from '../../pages/Jobs/interfaces';

export default interface IJobsContextData {
  jobs: IJob[];
  getJobById: (id: number) => Promise<IJob | null>;
  postJob: (data: IJob) => Promise<boolean>;
  editJob: (data: IJob) => Promise<boolean>;
  deleteJob: (id: number) => Promise<boolean>;
}
