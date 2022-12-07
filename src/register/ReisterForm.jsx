import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './RegisterForm.scss';




const ReisterForm = () => {

  const [firstName ,setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const user = {
    firstName,
    lastName,
    address,
    username,
    email,
    password
  }

const createUser =(e)=> {
  e.preventDefault();
  axios.post('http://localhost:3000/user/register', 
   user
  )
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 

  return (
    <div className="form-wrapper container mt-5">
        <h3>Registrirajte se</h3>
        <Form className='form'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ime</Form.Label>
            <Form.Control type="text" placeholder="Ime" onChange={e => setFirstName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Prezime</Form.Label>
            <Form.Control type="text" placeholder="Prezime" onChange={e => setLastName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresa</Form.Label>
            <Form.Control type="text" placeholder="Adresa" onChange={e => setAddress(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Korisnicko ime</Form.Label>
            <Form.Control type="text" placeholder="Korisnicko ime" onChange={e => setUsername(e.target.value)} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email adresa</Form.Label>
            <Form.Control type="email" placeholder="Unesite email" onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            Nikada nećemo dijeliti vašu e-poštu ni sa kim.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Lozinka</Form.Label>
            <Form.Control type="password" placeholder="Lozinka" onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button variant="primary" type="submit" onClick={createUser} >
            Registrirajte se
          </Button>
        <a className=' ms-5' href="/login">Vec imam racun</a>
        </Form>
      </div>

  )
}
export default ReisterForm