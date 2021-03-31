import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img
          src="https://blog.geekhunter.com.br/wp-content/uploads/2018/04/marca_geekhunter_colorida.png"
          width="100"
          alt="job.news"
        />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Jobs">Jobs</Link>
          <Link className="create-post-button" to="/Post">
            Post Job
          </Link>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
