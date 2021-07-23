import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
  <S.Navbar>
    <S.Title><Link to="/">LB</Link></S.Title>    
      <Link to="/">
        <S.LinkTitle><S.Icon className="bi bi-basket-fill"></S.Icon>
          Produtos
        </S.LinkTitle>
      </Link>   
       <Link to="/users">
         <S.LinkTitle>
           <S.Icon className="bi bi-people-fill"></S.Icon>
          Clientes
         </S.LinkTitle>
        </Link>
  </S.Navbar>
  );
}

export default Navbar;