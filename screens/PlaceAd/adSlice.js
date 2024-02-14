import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postAd = createAsyncThunk("Ad", async(obj) => {
  console.log(obj)

  const form = new FormData();
  form.append("category_name",obj.category)
  form.append("sub_category_name",obj.subCategory)
  form.append("city",obj.city)
  form.append("state", "empty")
  form.append("email",obj.email)
  form.append("username",obj.username)
  form.append("telephone",obj.telephone)
  form.append("post_heading",obj.heading)
  form.append("post_status","free")
  form.append("price",obj.price)
  form.append("description",obj.description)
  formData.append('image',{
    uri: obj.image,
    type: 'image/jpeg', 
      name: "image.jpg", 
});


//  await fetch("https://sokhtamon-backend-production.up.railway.app/api/post/upload",{
//   method: "POST",
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
//   body: form
//  }).then(response => {
//   console.log(response)
// }).catch(err => {
//   console.log(err.message)
// })

//  const data = await response.json();
//  console.log(data);
//  return data;


   const config = {     
headers: { 'content-type': 'multipart/form-data' }
}

axios.post("https://sokhtamon-backend-production-874c.up.railway.app/api/post/upload",form, config)
.then(response => {
console.log(response)

})
.catch(error => {
console.log(error.message);
// setError(error)
});


});

const adSlice = createSlice({
  name: "Ad",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(postAd.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(postAd.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(postAd.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error", action.payload);
      state.data = action.payload;
    });
  },
});
export default adSlice.reducer;