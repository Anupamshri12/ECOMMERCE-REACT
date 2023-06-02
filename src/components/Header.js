import React, { useEffect } from 'react'
import './Header.css'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { gettotalcart } from '../feautres/Slice';
import { useDispatch } from 'react-redux';
export default function Header() {
  const {cart ,Totalquantity ,Totalprice} = useSelector((state)=>{
    return state.carts;
  });
 const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(gettotalcart())
 } ,[cart])
 
  return (
    <>
    <div className="mai-wal">
    
    <div  className="hu-wal">
    <p>Total Cart Items: {cart.length}</p>
        {
           cart.map((cartitem)=>{
                return(
                    <div>
                       <img src = {cartitem.url} alt = "ERROR" width="20%"></img>
                       <span className="hai-kya">
                       <span> {cartitem.Title} </span>
                       <span> {cartitem.name} </span>
                       <button className="btn-wal">-</button>
                        <span className="span-wal"> {cartitem.quantity} </span>
                       <button className="btn-wal" >+</button>
                       <span> <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i> {cartitem.quantity*cartitem.price} </span>
                       <hr></hr>
                        </span>
                      
                    </div>
                    

                )
            })
        }
    </div>
    <div className="sum-hu" id ="helo">
      <h2>
        SUMMARY
        </h2>
        <hr></hr>
      
      <h3>Totalquantity: <span className="sp1">{Totalquantity}</span></h3>
      <h4>Totalprice:   <span className="sp2">{Totalprice}</span> </h4>
      <button className="out">CHECKOUT NOW</button>
    </div>
   
    </div>
    </>
  )
}
