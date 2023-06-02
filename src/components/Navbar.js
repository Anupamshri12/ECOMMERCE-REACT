import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gettotalcart } from '../feautres/Slice'
import { useEffect } from 'react'
export default function Navbar({length}) {
  const [clickhu ,clickhu1] = useState(false)
  function handleme(){
    clickhu1(!clickhu)
  }
  const {cart , Totalquantity} = useSelector((state)=>{
    return state.carts;;
  })
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(gettotalcart());
  },[cart])

  
  return (
   <>
   <nav>
    <div className="left-hu">
    <i class="fa-sharp fa-solid fa-dumpster-fire"></i>
    <h4>SOP<span>Clues</span></h4>
    </div>
   
      <ul id = "navbar" className={clickhu === false ? "#navbar" : "#navbar active"}>
      <li className="nav-links"><Link to  = "/home">Home</Link></li>
      <li className="nav-links"><Link to = "/about">About</Link></li>
      <li className="nav-links"><Link to = "/service">Service</Link></li>
      <li className="nav-links"><Link to = "/contact">Contact</Link></li>
      
      <input className = "input-me"type="search" placeholder="Search for Products and Brands"></input>
      <li className="nav-links"><Link to = "/Header"><i class="fa-solid fa-cart-shopping" ><sup className="sup">{cart.length}</sup></i></Link></li>
      <li className  = "nav-links"><Link to = "/"><i class="fa-sharp fa-solid fa-user"></i></Link></li>
    </ul>
    <div className="mobile" onClick={handleme}>
        <i className={clickhu === false? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
      </div>
      
   </nav>
  
   </>
  )
}
