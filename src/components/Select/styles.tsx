import styled from 'styled-components';

export const Container = styled.div`
  min-width: 200px;
  & + div {
    margin-top: 10px;
  }
`;
