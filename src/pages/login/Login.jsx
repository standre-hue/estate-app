import { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const navigate = useNavigate();
  //const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { currentUser, login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let bodyFormData = new FormData();
        bodyFormData.set('email', email);
        bodyFormData.set('password', password);
      const res = await login(bodyFormData);
      //navigate("/");
    } catch (err) {
      console.error(err)
    }
  };

  // if (currentUser) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Buckety Login.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Vous n'avez pas de compte?</span>
          <Link to="/register">
            <button>S'inscrire</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={(event)=>setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(event)=>setPassword(event.target.value)}
            />
            {err && err}
            <button onClick={handleLogin}>Se Connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;



/**
 * 
 * 
import React, { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import { Button } from '@mui/material';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import splash from '../assets/splash.jpg';

function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        let bodyFormData = new FormData();
        bodyFormData.set('email', email);
        bodyFormData.set('password', password);
        try {

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/login',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                    })
                    .then(function (response) {
                        //handle success
                        const data = response.data
                        console.log(data);
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <MDBContainer fluid>
            <MDBRow>

                <MDBCol sm='6'>

                    <div className='d-flex flex-row ps-5 pt-5'>
                        <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                        <span className="h1 fw-bold mb-0">Immobilier</span>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Address email' id='formControlLg' type='email' size="lg" onChange={(event) => setEmail(event.target.value)} />
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Mot de pass' id='formControlLg' type='password' size="lg" onChange={(event) => setPassword(event.target.value)} />

                        <div>


                            <Button
                                className='mb-4 mx-5 w-100'
                                variant="contained"
                                onClick={() => {
                                    //alert('clicked');
                                    handleSubmit()
                                }}
                            >Se Connecter</Button>
                        </div>
                        <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Mot de pass oublie?</a></p>
                        <p className='ms-5'>Vous n'avez pas de compte? <a href="/register" class="link-info">S'enregistrer ici</a></p>

                    </div>

                </MDBCol>

                <MDBCol sm='6' className='d-none d-sm-block px-0'>
                    <img src={splash}
                        alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default LoginPage;


 */
