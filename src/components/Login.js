import React, { useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import app from './Firebase';
import { useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {

const[email ,setemail] = useState("");
const[password ,setpassword] = useState("");
const auth = getAuth(app);

const navigate = useNavigate();
useEffect(()=>{
  let login = localStorage.getItem('signin');
  if(login){
    
    navigate('/');
    
  }

})
const signin = ()=>{
 
 
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Successfully signed in")
    localStorage.setItem('signin' ,true);
  navigate('/');
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    alert("Email/Password is Invalid")
  });
}
  return (
    <div className="signup">
        <div className="first">
            <h2>ENTER YOUR CREDENTIALS</h2>
            <input className="kya-hu"type="email" placeholder="Enter your Email" onChange={(e)=>setemail(e.target.value)}></input>
            <input type="password" className="kya-hu"placeholder="Enter your Password"onChange={(e)=>setpassword(e.target.value)}></input>
            <button className = "btnhuma"onClick={signin}>Sign In</button>
            <p>Don't have an Account? <Link to = "/signup">SIGN UP</Link></p>
        </div>
    </div>
  )
}
