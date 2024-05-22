import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../Axios/AxiosInstance";


export const fetchAllBlogs = createAsyncThunk('fetchAllBlogs', async (_, { rejectWithValue }) => {
    try {
        let result = await axiosInstance.get(`getblog`)
        return result.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const fetchBlogDetails = createAsyncThunk('fetchBlogDetails', async (id, { rejectWithValue }) => {
    try {
        let result = await axiosInstance.get(`getblogdetails/${id}`)
        return result.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const allBlogsslice = createSlice({
    name: 'allBlogsslice',
    initialState: {
        status: 'idle',
        allBlogsResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBlogs.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllBlogs.fulfilled, (state, action) => {
                state.status = 'success'
                state.allBlogsResponse = action.payload
            })
            .addCase(fetchAllBlogs.rejected, (state, action) => {
                state.status = 'rejected'
                state.allBlogsResponse = action.payload
            })
    }
})

export const blogDetails = createSlice({
    name: 'blogDetails',
    initialState: {
        status: 'idle',
        blogDetailsResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogDetails.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchBlogDetails.fulfilled, (state, action) => {
                state.status = 'loading'
                state.blogDetailsResponse = action.payload
            })
            .addCase(fetchBlogDetails.rejected, (state, action) => {
                state.status = 'rejected'
                state.blogDetailsResponse = action.payload
            })
    }
})