import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${Colors.gray800};
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: ${Colors.gray300};

      transition: color 0.2s;

      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: ${Colors.white};
      }

      &.active {
        color: ${Colors.white};
        font-weight: bold;
      }

      &.active::after {
        height: 3px;
        content: '';
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: ${Colors.yellow500};
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;
