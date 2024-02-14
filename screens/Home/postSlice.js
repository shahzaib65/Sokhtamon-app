import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
export const post = createAsyncThunk("posts", async () => {
    const response = await fetch(
      "https://sokhtamon-backend-production-874c.up.railway.app/api/post/all",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  });

  export const categoryWise = createAsyncThunk("category", async (category) => {
    const response = await fetch(
      "https://sokhtamon-backend-production-874c.up.railway.app/api/post/fetch?category_name="+category,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  });


  const postSlice = createSlice({
    name: "post",
    initialState: {
      isLoading: false,
      data: null,
      isError: false,
    },
    extraReducers: (builder) => {
      builder
      .addCase(post.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(categoryWise.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(categoryWise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(post.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(categoryWise.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        console.log("Error", action.payload);
        state.data = action.payload;
      })
      .addCase(post.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        console.log("Error", action.payload);
        state.data = action.payload;
      });
    },
  });

  
 
  export default postSlice.reducer;