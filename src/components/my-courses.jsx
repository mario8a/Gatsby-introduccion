import React from 'react';

const isAuth = true;

export default (props) => {
    if(!isAuth) {
        props.navigate('/app');
        return null
    }
    return (
        <div>
            <h1>Mis cursos</h1>
        </div>
    )
}