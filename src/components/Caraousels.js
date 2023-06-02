import React from 'react'
import './Caraouselss.css'
import { useSelector , useDispatch} from "react-redux";
import { addtocart } from '../feautres/Slice';
export default function Caraousels() {
  const product = useSelector((state)=>{
    return state.carts.items
  })
  const dispatch = useDispatch();
  return (
   <>
   <div className="starter">
    <h2>TRENDING</h2>
    <p>NEAR YOU</p>
   </div>
    <div className="flex-hu">
      {
      product.map((producthu)=>{
        return(
          <div  className="stylese">
            <div>

              <img src ={producthu.url} alt = "ERROR" width="100%" ></img>
              <div className="part-sa">
                <div>
                <h4>{producthu.Title}</h4>
              <p>{producthu.name}</p>
              <p><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i> {producthu.price}</p>
              <button className="cart-wala" onClick={()=>{dispatch(addtocart(producthu))}}>Add to Cart</button>
                </div>
            
              <div className="start-hu">
            <button><i class="fa-solid fa-star"></i>4.4 </button><span><i class="fa-solid fa-heart"></i></span>
           </div>
                </div>
            

           </div>
          
          </div>
        )
      })
      }
    </div>
   </>
  )
}
