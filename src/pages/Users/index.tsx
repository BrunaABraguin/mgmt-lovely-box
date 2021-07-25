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
        axios.get('http://localhost:8080/users')
        .then(response => {
            setUsers(response.data);
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
                            <th>Username</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td className="text-capitalize">{user.name.firstname} {user.name.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </S.Row>
        </S.Container>
    )
}
