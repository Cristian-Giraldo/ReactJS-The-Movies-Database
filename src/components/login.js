import React from 'react';
import axios from 'axios';

import {useNavigate,Navigate} from 'react-router-dom';

function Login(){

    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    const submitHandler = e =>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // Validaciones
        if(email === '' || password ===''){
            console.log('Los campos no pueden estar vacios');
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
            .post('http://challenge-react.alkemy.org',{email,password})
            .then(res=>{ 
                
                console.log(res.data); //Tokens devulto por la API
                //proceso para guardar el token o objeto devuelto por la APi en el localStore para realizar manipulaciones a futuro
                const tokenRecibido = res.data.token;
                localStorage.setItem('token',tokenRecibido);
                navigate('/listado');    
            })
    }


    return(
        <>
        { token && <Navigate to='/listado'/>}

        <div className='w-100  d-flex justify-content-center align-items-center' >
            <form onSubmit={submitHandler} className='mt-5 text-center' >
                <h3 className='h3 mb-3 fw-normal'>Log-In</h3>
                <input type="text" name="email" placeholder="challenge@alkemy.org" className='py-3 p-5 form-control'/>
                <br/>
                <input type="password" name="password" placeholder="react" className='py-3 p-5 form-control'/>
                <br/>
                <button type="submit" className='w-100 btn btn-lg btn-primary'>Login</button>
            </form>
        </div>
        </> 
    )
}

export default Login;