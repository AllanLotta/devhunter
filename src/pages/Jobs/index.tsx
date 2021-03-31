import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

const Jobs: React.FC = () => {
  const Jobs = [
    {
      title: 'Front End Developer',
      description: 'Buscamos desenvolvedores font end',
    },
    {
      title: 'Back End Developer',
      description: 'Buscamos desenvolvedores back end',
    },
    {
      title: 'FullStack Developer',
      description:
        'Buscamos desenvolvedores fullstackBuscamos desenvolvedores fullstackBuscamos desenvolvedores fullstackBuscamos desenvolvedores fullstackBuscamos desenvolvedores fullstackBuscamos desenvolvedores fullstack',
    },
  ];
  return (
    <Container>
      <Content>
        {Jobs.map((post) => (
          <div key={post.title}>
            <span>FrontEnd</span>
            <strong>{post.title}</strong>
            <p>{post.description}</p>
            <Link to={`/Job/${post.title}`}>
              <button type="button">See more</button>
            </Link>
          </div>
        ))}
      </Content>
    </Container>
  );
};

export default Jobs;
