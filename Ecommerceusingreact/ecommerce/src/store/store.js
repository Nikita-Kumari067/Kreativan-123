import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from './ecommerceSlice'


const store = configureStore({
    reducer:{
        ecommerce: ecommerceReducer,
      
    }
})

export default store;