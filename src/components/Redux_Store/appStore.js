import { configureStore } from "@reduxjs/toolkit";
import mealReducer from './itemSlice';
import userReducer from './userSlice';

const appStore = configureStore({
    reducer: {
        meal: mealReducer,
        user : userReducer,
    }
});

export default appStore;
