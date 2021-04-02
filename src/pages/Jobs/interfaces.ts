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
