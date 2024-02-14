import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
export const loginWithEmail = createAsyncThunk("email", async (userData) => {
    const response = await fetch(
      "https://sokhtamon-backend-production-874c.up.railway.app/api/user/login",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  });

  const loginWithEmailSlice = createSlice({
    name: "email",
    initialState: {
      isLoading: false,
      data: null,
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(loginWithEmail.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(loginWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(loginWithEmail.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        console.log("Error", action.payload);
        state.data = action.payload;
      });
    },
  });
  export default loginWithEmailSlice.reducer;