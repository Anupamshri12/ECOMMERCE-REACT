import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import app from './Firebase';
import { useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import { Link } from 'react-router-dom';
export default function Signup() {
    const[email ,setemail] = useState("");
const[password ,setpassword] = useState("");
const[name ,setname1] = useState("");
const[name1 ,setname2] = useState("");
const navigate = useNavigate();
const auth = getAuth(app);
    const signup = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          
          alert("succesffully created your account")
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(email.length == 0){
            alert("Enter Your Email")
          }
          else if(password.length == 0){
            alert("Enter Your Password")
          }
          else if(password.length <= 6){
            alert("Weak Password")
          }
          else if(name.length == 0){
            alert("Enter Your First Name");
          }
          else if(name1.length == 0){
            alert("Enter Your Last Name")
          }
          // ..
        });
    }
  return (
    <div className="signup">
    <div className="first">
        <h2>SIGN UP</h2>
        <input className="kya-hu"type="email" placeholder="Enter your First Name" onChange={(e)=>setname1(e.target.value)}></input>
        <input className="kya-hu"type="email" placeholder="Enter your Last Name" onChange={(e)=>setname2(e.target.value)}></input>
        <input className="kya-hu"type="email" placeholder="Enter your Email" onChange={(e)=>setemail(e.target.value)}></input>
        <input type="password" className="kya-hu"placeholder="Enter your Password"onChange={(e)=>setpassword(e.target.value)}></input>
        <button className = "btnhuma"onClick={signup}>Create Account</button>
        <p>Have SOPclues Account? <Link to = "/signin">SIGN IN</Link></p>
       
    </div>
</div>
  )
}
