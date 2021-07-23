import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import * as S from './style';

interface User {
    id: number;
    username: string;
    name: {
        firstname: string;
        lastname: string;
    };
    email: string;
    phone: string;
}

export const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    });

    return (
        <S.Container>
            <Navbar />       
            <S.Row>
                {users.map(user => (
                    <div>
                    <h1>{ user.id }</h1>       
                    <h1>{ user.username }</h1>
                    <p>{ user.name.firstname } { user.name.lastname }</p>
                    <p>{ user.email }</p>
                    <p>{ user.phone }</p>
                </div>
            ))}
            </S.Row>
        </S.Container>
    )
}
