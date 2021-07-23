import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import * as S from './style';

export const Product = () => {
    const handleProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data);
                return <div>{response.data}</div>;
            })
            .catch(error => {
                console.log(error);
                return <div>{error}</div>;
            });
    } 

    return (
        <S.Container>
            <Navbar />            
            <h1>Products</h1>
            <button onClick={handleProducts}>Press me</button>    
        </S.Container>
    )
}
