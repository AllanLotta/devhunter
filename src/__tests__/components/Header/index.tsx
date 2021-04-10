import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Header from '../../../components/Header';

describe('Header Component', () => {
  it('should initialize Header Component', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toBeDefined();
  });

  it('should render header with links', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/');
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/');
    expect(wrapper.find(Link).at(2).prop('to')).toEqual('/Jobs');
    expect(wrapper.find(Link).at(3).prop('to')).toEqual('/PostJob');
  });
});
