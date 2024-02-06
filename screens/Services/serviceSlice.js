import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const services = createAsyncThunk("services", async(obj) => {
  const response = await fetch(
      `https://sokhtamon-backend-production.up.railway.app/api/job/fetch?city=${obj.cityValue}&service=${obj.selectedValue}`,
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
 
  return data;
});

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(services.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(services.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(services.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error", action.payload);
      state.data = action.payload;
    });
  },
});
export default serviceSlice.reducer;