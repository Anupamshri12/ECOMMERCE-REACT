import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar({length}) {
  const [clickhu ,clickhu1] = useState(false)
  function handleme(){
    clickhu1(!clickhu)
  }
  const {cart} = useSelector((state)=>{
    return state.carts;
  })
 
 

  
  return (
   <>
   <nav>
    <div className="left-hu">
    <i class="fa-sharp fa-solid fa-dumpster-fire"></i>
    <h4>SOP<span>Clues</span></h4>
    </div>
   
      <ul id = "navbar" className={clickhu === false ? "#navbar" : "#navbar active"}>
      <li className="nav-links"><Link to  = "/home">SHOP</Link></li>
      <li className="nav-links"><Link to = "/about">BRANDS</Link></li>
      <li className="nav-links"><Link to = "/in">SIGN IN</Link></li>
      <li className="nav-links"><Link to = "/contact">COLLECTIONS</Link></li>
      
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
