import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../Axios/AxiosInstance'

export const fetchBanners = createAsyncThunk('fetchBanners', async (_, { rejectWithValue }) => {
    try {
        const result = await axiosInstance.get(`getbanner`)
        return result.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const fetchTrainers = createAsyncThunk('fetchTrainers', async (_, { rejectWithValue }) => {
    try {
        const result = await axiosInstance.get(`gettrainer`)
        return result.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const fetchServices = createAsyncThunk('fetchServices', async (_, { rejectWithValue }) => {
    try {
        const result = await axiosInstance.get(`getservice`)
        return result.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const fetchTestimonials = createAsyncThunk('fetchTestimonials', async (_, { rejectWithValue }) => {
    try {
        const result = await axiosInstance.get(`gettestimonial`)
        return result.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const Bannerslice = createSlice({
    name: 'Bannerslice',
    initialState: {
        status: 'idle',
        bannerResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBanners.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBanners.fulfilled, (state, action) => {
            state.status = 'success'
            state.bannerResponse = action.payload
        })
        .addCase(fetchBanners.rejected, (state, action) => {
            state.status = 'rejected'
            state.bannerResponse = action.payload
        })
    }
})

export const Trainerslice = createSlice({
    name: 'Trainerslice',
    initialState: {
        status: 'idle',
        trainerResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrainers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTrainers.fulfilled, (state, action) => {
                state.status = 'success'
                state.trainerResponse = action.payload
            })
            .addCase(fetchTrainers.rejected, (state, action) => {
                state.status = 'rejected'
                state.trainerResponse = action.payload
            })
        }
})

export const Serviceslice = createSlice({
    name: 'Serviceslice',
    initialState: {
        status: 'idle',
        serviceResponse: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.status = 'success'
                state.serviceResponse = action.payload
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.status = 'rejected'
                state.serviceResponse = action.payload
            })
    }
})

export const Testimonialslice = createSlice({
    name: 'Testimonialslice',
    initialState: {
        status: 'idle',
        testimonialResponse: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTestimonials.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTestimonials.fulfilled, (state, action) => {
                state.status = 'success'
                state.testimonialResponse = action.payload
            })
            .addCase(fetchTestimonials.rejected, (state, action) => {
                state.status = 'rejected'
                state.testimonialResponse = action.payload
            })
    }
})