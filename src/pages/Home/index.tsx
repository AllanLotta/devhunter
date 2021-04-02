import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, SeeJobsButton } from './styles';
import yeah from '../../assets/yeah.png';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>
          Search online <span>millions of jobs</span> <br /> to find the next
          step in your career.
        </h1>
        <Link to="/jobs">
          <SeeJobsButton>See Jobs</SeeJobsButton>
        </Link>
      </Content>
      <img src={yeah} alt="yeah" />
    </Container>
  );
};

export default Home;
