import { IJob } from '../../store/modules/jobs/types';

export interface ICompany {
  id: string;
  company: string;
  logo: string;
  description: string;
  ceo_name: string;
  ceo_image: string;
  founded_year: string;
  revenue: string;
  company_size: string;
  salaries: string;
  ratings: number;
}

export default interface ICompanyContextData {
  getCompanyList: () => Promise<ICompany[]>;
  getCompanyById: (id: number) => Promise<ICompany>;
  getCompanyJobs: (id: number) => Promise<IJob[]>;
}
