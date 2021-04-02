import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  max-width: 1120px;
  height: calc(100vh - 5rem); //5rem altura do cabecalho

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    height: unset;
    img {
      display: none;
    }
  }
`;

export const Content = styled.div`
  max-width: 600px;

  h1 {
    font-size: 4.5rem;
    font-weight: 900;

    line-height: 4.5rem;
    margin-top: 2.5rem;

    span {
      color: ${Colors.cyan500};
    }
  }

  button {
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const SeeJobsButton = styled.button`
  width: 260px;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 2rem;

  background: ${Colors.yellow500};
  color: ${Colors.gray900};

  font-size: 1.25rem;
  font-weight: bold;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
