import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../Axios/AxiosInstance";

export const fetchBookingsById = createAsyncThunk('fetchBookingsById', async (_, { rejectWithValue }) => {
    try {
        const result = await axiosInstance.get(`viewBooking/657c980c8c0deb2b4a8d4387`)
        return result.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const Bookingslice = createSlice({
    name: 'Bookingslice',
    initialState: {
        status: 'idle',
        bookingsResponse: []
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchBookingsById.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBookingsById.fulfilled, (state, action) => {
            state.status = 'succcess'
            state.bookingsResponse = action.payload
        })
        .addCase(fetchBookingsById.rejected, (state, action) => {
            state.status = 'rejected'
            state.bookingsResponse = action.payload
        })
    }
})