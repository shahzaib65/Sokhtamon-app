import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const category = createAsyncThunk("category", async() => {

  const response = await fetch(
      "https://sokhtamon-backend-production-874c.up.railway.app/api/category/fetch",
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
  return data.categories;
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(category.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(category.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(category.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error", action.payload);
      state.data = action.payload;
    });
  },
});
export default categorySlice.reducer;