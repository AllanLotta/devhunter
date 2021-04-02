import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 2rem;
`;
export const Content = styled.div`
  max-width: 900px;
  padding-bottom: 50px;
  margin: 5rem auto 0;
  line-height: 2rem;
  padding: 2rem;
  font-size: 1.125rem;
  color: ${Colors.gray100};
  border: 1px solid ${Colors.gray700};
  border-radius: 5px;

  span {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: ${Colors.gray300};
    margin-top: 1.5rem;
  }

  button {
    margin-top: 20px;
    padding: 5px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;

    border: 0;
    border-radius: 2rem;

    background: ${Colors.yellow500};
    color: ${Colors.gray900};

    font-size: 1.1rem;
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .react-select__menu-list {
    background-color: ${Colors.gray800};
  }

  @media (max-width: 768px) {
    display: inline;
  }
`;

export const SalaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    & + div {
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    display: inline;
    div {
      & + div {
        margin-left: 0px;
      }
    }
  }
`;
