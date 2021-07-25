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
    const [username, setUsername] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    useEffect(() => {
        axios.get('http://localhost:8080/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const addUser = () => {
        localStorage.setItem('user', JSON.stringify({
            username: username,
            name: {
                firstname: firstname,
                lastname: lastname,
            },
            email: email,
            phone: phone
        }));

        axios.post('http://localhost:8080/users', {
            username: username,
            name: {
                firstname: firstname,
                lastname: lastname,
            },
            email: email,
            phone: phone
        });
        localStorage.clear();
    };

    return (
        <S.Container>
            <Navbar />
            <S.Row>
                <form onSubmit={addUser}>
                    <S.FormFields>                        
                        <label htmlFor="username">Nome de usuário</label>
                        <input
                        type="text" 
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    </S.FormFields>

                    <S.FormFields>
                        <label htmlFor="firstname">Nome</label>
                        <input 
                        type="text" 
                        id="firstname" 
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}/>
                    </S.FormFields>
                    
                    <S.FormFields>
                        <label htmlFor="lastname">Sobrenome</label>
                        <input 
                        type="text" 
                        id="lastname" 
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}/>
                    </S.FormFields>

                    <S.FormFields>
                        <label htmlFor="email">E-mail</label>
                        <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </S.FormFields>

                    <S.FormFields>
                        <label htmlFor="phone">Telefone</label>
                        <input 
                        type="phone" 
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                    </S.FormFields>

                    <S.SubmitButton>
                        <button type="submit">Salvar</button>
                    </S.SubmitButton>
                </form>   
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
                                <td className="text-capitalize">{user.name?.firstname} {user.name?.lastname}</td>
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
