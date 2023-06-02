import { createSlice } from "@reduxjs/toolkit";
import product from '../Home'
const initialState = { 
   cart:[],
   items: product,
   Totalquantity: 1,
   Totalprice: 0
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
     addtocart: (state ,action)=>{
      const find = state.cart.findIndex((item)  =>item.id === action.payload.id);
      if(find  >= 0 ){
         state.cart[find].quantity += 1;
         
      }
      else{
         const temp = {...action.payload ,quantity:1};
         state.cart.push(temp)
      }
      
     },
     gettotalcart: (state) =>{
      let {Totalquantity ,Totalprice} = state.cart.reduce((cartTotal ,cartItem)=>{
              const {price ,quantity} = cartItem;
              const itemTotal = price*quantity;
              cartTotal.Totalprice += itemTotal;
              cartTotal.Totalquantity += quantity;
              return cartTotal;        
      },
      {
         Totalprice: 0,
         Totalquantity: 0
      }
     

      );
      state.Totalprice = parseInt(Totalprice.toFixed(2));
      state.Totalquantity = Totalquantity;
     }
  },
});


export const {addtocart , gettotalcart} = counterSlice.actions;
export default counterSlice.reducer;