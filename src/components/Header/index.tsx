import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} width="100" alt="devhunter" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Jobs">Jobs</Link>
          <Link className="create-post-button" to="/PostJob">
            Post Job
          </Link>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
