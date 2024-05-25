import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    product: [],
    wishlist: [],
    cart: []
}

const ecommerceSlice = createSlice({
    name: "ecommerce",
    initialState: initialState,
    reducers:{
        addProduct(state, action){
            state.product.push(action.payload);
        },
        addToWishlist(state, action){
            state.wishlist.push(action.payload);
        },
        removeFromWishlist(state, action){
            state.wishlist.filter((item)=>item!==action.payload);
            // const index = state.wishlist.findIndex((item)=>item === action.payload);
            // state.wishlist.splice(index, 1);
        }
    }
})

export const {addProduct, addToWishlist, removeFromWishlist} = ecommerceSlice.actions;
export default ecommerceSlice.reducer;