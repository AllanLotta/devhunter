import React, { useCallback, useEffect, useState } from 'react';
import ReactSelect from 'react-select';
import JobCard from '../../components/JobCard';
import { useCompany } from '../../hooks/Company';
import { ICompany } from '../../hooks/Company/interfaces';
import api from '../../services/api';
import { IJob } from '../../store/modules/jobs/types';
import { ReactSelectItens } from './interfaces';

import { Container, Content, FilterContainer, FilterButton } from './styles';

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<IJob[]>([] as IJob[]);
  const [companies, setCompanies] = useState<ICompany[]>();
  const [filterSelected, setFilterSelected] = useState<ReactSelectItens | null>(
    null,
  );

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const { getCompanyList } = useCompany();

  useEffect(() => {
    const loadJobs = async () => {
      if (filterSelected) {
        if (filterSelected.value === 'all') {
          const response = await api.get(`jobs`);
          setJobs(response.data);
        } else {
          const response = await api.get(
            `jobs?company_id=${filterSelected.value}`,
          );
          setJobs(response.data);
        }
      } else {
        const response = await api.get(`jobs`);
        setJobs(response.data);
      }
    };
    loadJobs();
  }, [filterSelected]);

  useEffect(() => {
    const loadCompanies = async () => {
      const companiesData = await getCompanyList();
      setCompanies(companiesData);
    };
    loadCompanies();
  }, []);

  const formatCompanyList = useCallback((): ReactSelectItens[] => {
    const formatted: ReactSelectItens[] = [
      {
        value: 'all',
        label: 'All',
      },
    ];
    companies?.map((company) => {
      formatted.push({
        value: company.id,
        label: company.company,
      });
    });
    return formatted;
  }, [companies]);

  return (
    <Container>
      <Content>
        <FilterButton onClick={() => setShowFilter((oldState) => !oldState)}>
          {showFilter ? 'Hide' : 'Filter'}
        </FilterButton>
        {showFilter && (
          <FilterContainer>
            <ReactSelect
              onChange={(selected) => setFilterSelected(selected)}
              classNamePrefix="react-select"
              hideSelectedOptions
              placeholder="Select Company"
              options={formatCompanyList()}
              theme={(theme) => ({
                ...theme,
                borderRadius: 8,
                colors: {
                  ...theme.colors,
                  primary25: '#ff9000',
                  primary: '#ff9000',
                },
              })}
            />
          </FilterContainer>
        )}
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </Content>
    </Container>
  );
};

export default Jobs;
