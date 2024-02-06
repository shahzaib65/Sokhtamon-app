import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const contactUs = createAsyncThunk("contact", async (userData) => {
  const response = await fetch(
    "https://sokhtamon-backend-production.up.railway.app/api/contactus/upload",
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
  return data;
});

const contactUsSlice = createSlice({
  name: "contact",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(contactUs.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(contactUs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(contactUs.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error", action.payload);
      state.data = action.payload;
    });
  },
});
export default contactUsSlice.reducer;
