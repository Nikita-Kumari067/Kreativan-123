import { createSlice } from "@reduxjs/toolkit";
const initialState={
    filteredProduct:"",


}

const productSlice=createSlice(
    {
        name:"product",
        initialState:initialState,
        reducers:{
            filterProduct(state,action){},
        }
    }
)
export const {filterProduct}=productSlice.actions
export default productSlice.reducer