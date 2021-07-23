import React from 'react';
import Navigation from '../Navigation';
import axios from 'axios';
import * as S from './style';

export const Users = () => {

    const handleUsers = () => {
        axios.get('https://fakestoreapi.com/users')
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
        <S.UserPage>
            <Navigation />
            <button onClick={handleUsers}>Press me</button>           
            <h1>Users</h1>
        </S.UserPage>
    )
}
