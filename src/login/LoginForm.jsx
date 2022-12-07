import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LoginForm.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedUser, setLoggedUser] = useState();

  const user = {
    email, password
  }

  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate('/products');
  };

  useEffect(() => {
    if (loggedUser) {
      navigateToProducts();
      localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
      window.location.reload();
    }
  }, [loggedUser])

  console.log("123", loggedUser )




  const login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/user/login',
      user
    )
      .then((response) => {
        if (response) {
          setLoggedUser(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  if (!loggedUser) return (

    <div className="form-wrapper container mt-5">
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Unesite vas email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
          Nikada nećemo dijeliti vašu e-poštu ni sa kim.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Lozinka</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit" onClick={login} >
          Povezi se <section></section>
        </Button>
        <a className=' ms-5' href="/register">Nemam račun</a>
      </Form>
    </div>

  )
}

export default LoginForm;
