export interface IJob {
  id: number;
  title: string;
  company_id: number;
  description: string;
  role: string;
  type: string;
  level: string;
  salary_min: number;
  salary_max: number;
}

export interface PostFormData {
  title: string;
  company_id: number;
  description: string;
  role: string;
  type: string;
  level: string;
  salary_min: number;
  salary_max: number;
}

export default interface IJobsContextData {
  getJobsList: () => Promise<IJob[]>;
  getJobById: (id: number) => Promise<IJob>;
  postJob: (data: IJob) => Promise<boolean>;
  editJob: (data: IJob) => Promise<boolean>;
  deleteJob: (id: number) => Promise<boolean>;
}
