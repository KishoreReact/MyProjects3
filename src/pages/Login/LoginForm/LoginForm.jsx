import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';
import LoginButton from '../../../components/Button/Button';
import { useHistory } from 'react-router-dom';


const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/", {
        email,
        password
      });

      if (res.data === "exist") {
        history.push("/landing");
        // navigate("/landing", { state: { id: email } });
      } else if (res.data === "notexist") {
        alert("User is not signed up");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  }

  return (
    <div className="login-align with-background-image">
      <h3>Login</h3>
      <Form 
      onSubmit={handleSubmit}
      >
        <Form.Group className='login-space'>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='login-space'>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <LoginButton type="submit">Login</LoginButton>
      </Form>
      <div className='sign-link'>
        <p>OR</p>
        <Link to="/signup">Signup Page</Link>
      </div>
    </div>
  );
};

export default LoginForm;
