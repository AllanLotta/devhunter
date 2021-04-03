import { IJob } from '../../pages/Jobs/interfaces';

export default interface IJobsContextData {
  getJobsList: () => Promise<IJob[]>;
  getJobById: (id: number) => Promise<IJob>;
  postJob: (data: IJob) => Promise<boolean>;
  editJob: (data: IJob) => Promise<boolean>;
  deleteJob: (id: number) => Promise<boolean>;
}
