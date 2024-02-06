import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const cities = createAsyncThunk("cities", async() => {

  const response = await fetch(
      "https://sokhtamon-backend-production.up.railway.app/api/city/fetch",
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  );

  const data = await response.json();

  return data.Cities;
});

const citySlice = createSlice({
  name: "cities",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(cities.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(cities.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(cities.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error", action.payload);
      state.data = action.payload;
    });
  },
});
export default citySlice.reducer;