import React from "react";

function Login(){
    const submitHandler = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === '' || password ===''){
            console.log('Los campos no pueden estar vacios')
            return;
        }
        if(email !=='' && !regexEmail.test(email)){
            console.log('Debes escribir una dirección de correo electronico valida')
            return;
        }
        if(email !== 'naitsircarevir@gmail.com' || password !== 'React'){
            console.log('Credenciales Invalidas');
            return
        }
        console.log('Ok, estamos listos para enviar la infomación')
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