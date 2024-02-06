import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const otpWithEmail = createAsyncThunk("otpEmail", async (otp) => {
  const response = await fetch(
    "https://sokhtamon-backend-production.up.railway.app/api/user/verifyOtp",
    {
      method: "POST",
      body: JSON.stringify(otp),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
 console.log(data)
 await AsyncStorage.setItem("user_id",data._id)
  return data;
});

const otpWithEmailSlice = createSlice({
  name: "otp",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(otpWithEmail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(otpWithEmail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(otpWithEmail.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error", action.payload);
      state.data = action.payload;
    });
  },
});
export default otpWithEmailSlice.reducer;
