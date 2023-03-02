import { configureStore } from "@reduxjs/toolkit";
import userInfo from './slices/userInfo.slice'
import cart from './slices/card.slice'

export default configureStore({
    reducer: {
        userInfo, 
        cart,
    }
})