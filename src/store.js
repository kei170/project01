import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./redux/CartSlice";
import productslice from "./redux/ProductList";
 
const store = configureStore({
   reducer:{
      cart:CartSlice.reducer,
      products:productslice.reducer
   }
})
export default store;