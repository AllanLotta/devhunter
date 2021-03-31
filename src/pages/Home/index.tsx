import React from 'react';
import { Container, Content, SeeJobsButton } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>
          Search online <span>millions of jobs</span> <br /> to find the next
          step in your career.
        </h1>
        <SeeJobsButton>See Jobs</SeeJobsButton>
      </Content>
      <img
        src="https://d4zjpv0aa4kr2.cloudfront.net/assets/home/man-yellow-shirt-b77f31c40fff206cf3d8ed7feb6855cd7cf8d84fca30313a6cf2e679f4657796.png"
        alt="Girl coding"
      />
    </Container>
  );
};

export default Home;
