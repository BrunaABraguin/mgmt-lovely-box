import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import * as S from './style';

interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
}

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => { 
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    });

    return (
        <S.Container>
            <Navbar />
            <S.Row>
            { products.map(product => (  
                <div>
                    <h1>{ product.id }</h1>       
                    <h1>{ product.title }</h1>
                    <p>{ product.price }</p>
                    <p>{ product.category }</p>
                </div>
            ))}
            </S.Row>
        </S.Container>
    )
}
