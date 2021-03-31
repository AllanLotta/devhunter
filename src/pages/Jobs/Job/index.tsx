import React from 'react';

import { Container, Content } from './styles';

const Job: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <span>FrontEnd</span>
          <strong>Front End Developer (REMOTE)</strong>
          <p>
            Building client facing mobile applications, focusing on high
            performance, beautiful UI and code quality. Collaborate with other
            tech, product, and design people to identify and solve challenging
            problems, creating awesome experiences for users worldwide
          </p>
          <span>R$10000 - R$14000</span>
        </div>
      </Content>
    </Container>
  );
};

export default Job;
