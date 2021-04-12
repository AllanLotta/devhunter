import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Content = styled.div`
  max-width: 900px;
  padding-bottom: 50px;
  margin: 5rem auto 0;
`;

export const FilterContainer = styled.div`
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid ${Colors.gray600};
  .react-select__menu-list {
    background-color: ${Colors.gray800};
  }
`;

export const FilterButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 20px;
  max-width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 2rem;

  background: ${Colors.cyan500};
  color: ${Colors.gray900};

  font-size: 1.1rem;
  font-weight: bold;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const FilterClear = styled.button`
  float: right;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: ${Colors.white};
`;
