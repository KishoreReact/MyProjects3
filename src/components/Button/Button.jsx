import React from 'react'
import { Button as BsButton } from "react-bootstrap";
import './Button.css'


export default function LoginButton (props) {
  return (
    <BsButton
    className='button'
    onClick={props.onClick}>
      {props.signup ? <h4 className='login'>Signup</h4>: <h4 className='login'>Login</h4>}
        
    </BsButton>
  )
}


