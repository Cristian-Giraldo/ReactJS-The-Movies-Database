import React from 'react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom';
// import swalAlert from '@sweetalert/with-react'

function Login(){

    const navigate = useNavigate();

    const submitHandler = e =>{
        e.preventDefault();
        
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // Validaciones
        if(email === '' || password ===''){
            console.log('Los campos no pueden estar vacios')
            return;
        }
        if(email !=='' && !regexEmail.test(email)){
            console.log('Debes escribir una dirección de correo electronico valida')
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            console.log('Credenciales Invalidas');
            return
        }
        // Solicitud post a la API
        console.log('Ok, estamos listos para enviar la infomación');
        axios
            .post('https://jsonplaceholder.typicode.com/users',{email,password})
            .then(res=>{ 
                
                
                console.log(res.data); //Tokens devulto por la API
                //proceso para guardar el token o objeto devuelto por la APi en el localStore para realizar manipulaciones a futuro
                const tokenRecibido = res.data;
                const tokenInString = JSON.stringify(tokenRecibido);
                localStorage.setItem('token', tokenInString);
                return navigate('/listado');    
            })
    }

    return(
        <>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <input type="text" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </> 
    )
}

export default Login;