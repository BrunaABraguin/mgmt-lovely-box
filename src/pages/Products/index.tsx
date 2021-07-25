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
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [category, setCategory] = useState<string>("men's clothing");

    useEffect(() => { 
        axios.get('http://localhost:8080/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    
    const addProduct = () => {
        localStorage.setItem('product', JSON.stringify({
            title: title,
            price: price,
            category: category,
        }));
    } 
    return (
        <S.Container>
            <Navbar />
            <S.Row>
                <form onSubmit={addProduct}>
                    <label htmlFor="title">Título</label>
                    <input
                    id="title"
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="price">Preço</label>
                    <input
                    id="price"
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>

                    <label htmlFor="category">Categoria</label>
                    <select
                    name="category" 
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >  
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="women's clothing">Women's Clothing</option>
                    </select>

                    <button type="submit">Salvar</button>
                </form>
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
                                <td className="text-capitalize">{product.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </S.Row>
        </S.Container>
    )
}
