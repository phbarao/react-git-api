import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Repository from '../Repository';
import { Title, Form, Repositories } from './styles';

// Usando const é mais fácil tipar o componente
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/62365336?s=400&u=77f3d8aeebff51881efffaa2a4c0d48537538e09&v=4"
            alt="Pedro"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Performance-focused API for React forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/62365336?s=400&u=77f3d8aeebff51881efffaa2a4c0d48537538e09&v=4"
            alt="Pedro"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Performance-focused API for React forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/62365336?s=400&u=77f3d8aeebff51881efffaa2a4c0d48537538e09&v=4"
            alt="Pedro"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Performance-focused API for React forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
