import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// 통신두절 이나 다른 부분에 문제가 없다면 생략 가능
import productList from '../productList.json';

export const fetchAllProducts = createAsyncThunk('fetch-all=products',async (apiUrl) => {
   const response = await fetch(apiUrl)
   return response.json();
});

const productslice = createSlice({
   name:'products',
   initialState:{data:[],fetchStatus:''},
   reducers:{},
   extraReducers: (builder) =>{builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
                        state.data = action.payload
                        state.fetchStatus = '성공'

                        .addCase(fetchAllProducts.pending,(state)=>{
                           state.fetchStatus = '진행중'
                        })
                        .addCase(fetchAllProducts.rejected,(state)=>{
                           state.data = productList.products
                           state.fetchStatus = '에러입니다'
                        })
   })}
   
})

export default productslice;