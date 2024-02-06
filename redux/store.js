import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../screens/Login/loginSlice";
import otpReducer from "../screens/Otp/otpSlice";
import categoryReducer from "../screens/PlaceAd/categorySlice";
import postReducer from "../screens/Home/postSlice";
import cityReducer from "../screens/Services/citySlice";
import serviceReducer from "../screens/Services/serviceSlice";
import contactReducer from "../screens/ContactUs/contactSlice";
import adReducer from "../screens/PlaceAd/adSlice";



export const store = configureStore({
    reducer: {
        email: loginReducer,
        otp: otpReducer,
        category: categoryReducer,
        post: postReducer,
        city: cityReducer,
        service: serviceReducer,
        contact: contactReducer,
        ad: adReducer
    }
});