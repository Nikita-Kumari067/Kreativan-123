import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from './ecommerceSlice'
import productReducer from "./productSlice";


const store = configureStore({
    reducer:{
        ecommerce: ecommerceReducer,
        product: productReducer
      
    }
})

export default store;