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
        axios.get('http://localhost:8080/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <S.Container>
            <Navbar />
            <S.Row>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>R$ {product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </S.Row>
        </S.Container>
    )
}
