import React, { useState } from 'react';
import './Header.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Head = () => {
  const history = useHistory();
  const handleLoginClick = () => {
    history.push("/signup");
  };

  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label>+919048898225</label>
            <i className='fa fa-envelope'></i>
            <label>kishore@gmail.com</label>
          </div>
          <div className="rightRow">
            <label>Theme FAQ</label>
            <label>Need Help</label>
            <span>🏁</span>
            <label>GER</label>
            <span>🏴</span>
            <label>USA</label>
          </div>
          <Button className='login-button' onClick={handleLoginClick}>Login/Signup</Button>
        </div>
      </section>
    </>
  );
};

export default Head;
