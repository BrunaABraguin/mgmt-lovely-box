import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
  <S.Navigation>
    <S.NavigationTitle>LB</S.NavigationTitle>    
      <Link to="/">
        <S.LinkTitle><S.NavigationIcon className="bi bi-basket-fill"></S.NavigationIcon>
          Produtos
        </S.LinkTitle>
      </Link>   
       <Link to="/users">
         <S.LinkTitle>
           <S.NavigationIcon className="bi bi-people-fill"></S.NavigationIcon>
          Clientes
         </S.LinkTitle>
        </Link>
  </S.Navigation>
  );
}

export default Navigation;