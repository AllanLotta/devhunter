import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;
export const Content = styled.div`
  max-width: 900px;
  padding-bottom: 50px;
  margin: 5rem auto 0;

  div {
    margin-top: 2rem;
    line-height: 2rem;
    padding: 2rem;
    font-size: 1.125rem;
    color: ${Colors.gray100};
    border: 1px solid ${Colors.gray700};
    border-radius: 5px;

    span {
      display: block;
      font-size: 1rem;
      color: ${Colors.gray300};
      margin-top: 1.5rem;
    }
  }
`;
