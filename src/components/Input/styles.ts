import styled, { css } from 'styled-components';
import { Colors } from '../../styles/colors';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  border: 2px solid #232129;
  color: ${Colors.gray600};
  display: flex;
  align-items: center;
  & + div {
    margin-top: 10px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${Colors.red600};
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: ${Colors.yellow500};
      border-color: ${Colors.yellow500};
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: ${Colors.yellow500};
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${Colors.gray100};
    &::placeholder {
      color: ${Colors.gray600};
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
