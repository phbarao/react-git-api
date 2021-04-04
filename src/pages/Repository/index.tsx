import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

// Usando const é mais fácil tipar o componente
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/62365336?v=4"
            alt="Repo"
          />
          <div>
            <strong>facebook/react</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1800</strong>
            <span>Starts</span>
          </li>

          <li>
            <strong>67</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>40</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/asdasdasd">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
