import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import JobCard from '../../../components/JobCard';
import { IJobCardProps } from '../../../components/JobCard/interfaces';

describe('JobCard Component', () => {
  const mockJobCardProps: IJobCardProps = {
    job: {
      id: '2',
      title: 'Teste',
      company_id: '0',
      description: 'Teste Description',
      role: 'Front test',
      type: '',
      level: '',
      salary_min: 100,
      salary_max: 200,
    },
  };

  it('should initialize JobCard Component', () => {
    const wrapper = shallow(<JobCard {...mockJobCardProps} />);

    expect(wrapper).toBeDefined();
  });

  it('should render job card with details', () => {
    const wrapper = shallow(<JobCard {...mockJobCardProps} />);

    expect(wrapper.find('span').at(0).text()).toEqual('Front test');
    expect(wrapper.find('h3').text()).toEqual('Teste');
    expect(wrapper.find('p').text()).toEqual('Teste Description');
    expect(wrapper.find('span').at(1).text()).toEqual('$0.1k - $0.2k');
    expect(wrapper.find(Link).prop('to')).toEqual('/Job/2');
  });

  it('should render job card with details', () => {
    const wrapper = shallow(<JobCard {...mockJobCardProps} />);

    wrapper.find('button').simulate('click');

    expect(window.location).toEqual('d');
  });
});
