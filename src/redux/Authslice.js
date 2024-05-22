import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../Axios/AxiosInstance'
import { toast } from 'react-toastify'

export const userRegister = createAsyncThunk('userRegister', async ($payload, { rejectWithValue }) => {
    try {
        const result = await axiosInstance.post(`register`, $payload)
        console.log(result.data);
        if (result.data?.success) {
            // console.log(result.data);
            toast.success(result.data?.message);
            window.location.href = '/login'
        } else {
            // console.log(result.data);
            toast.success(result.data?.message)
        }
        return result.data
    } catch (error) {
        console.log(error);
        toast.error(error?.message)
        toast.error(error?.response.data.message)
        return rejectWithValue(error)
    }
})

export const userLogin = createAsyncThunk('userLogin', async ($payload, { rejectWithValue }) => {
    try {
        const result = await axiosInstance.post(`login`, $payload)
        if (result.data?.status === 200) {
            // console.log(result.data);
            toast.success(result.data?.message);
            window.location.href = '/'
        } else {
            // console.log(result.data);
            toast.success(result.data?.message)
        }
        return result.data
    } catch (error) {
        console.log(error);
        toast.error(error?.response.data.message)
        return rejectWithValue(error)
    }
})

export const Authslice = createSlice({
    name: 'Authslice',
    initialState: {
        status: 'idle',
        registerResponse: [],
        loginResponse: [],
        isLoggedIn: false
    },
    reducers: {
        checkToken: (state) => {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token')
            const user = localStorage.getItem('user') || sessionStorage.getItem('user')
            if(token && user){
                state.isLoggedIn = true
            } else {
                state.isLoggedIn = false
            }
        },
        logout: (state) => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            if ((localStorage.getItem('token') || sessionStorage.getItem('token')) || (localStorage.getItem('user') || sessionStorage.getItem('user')) ){
                state.isLoggedIn = true
                toast.error('Something went wrong')
            } else {
                state.isLoggedIn = false
                toast.success('Logged out successfully')
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegister.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.status = 'success'
                state.registerResponse = action.payload
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.status = 'rejected'
                state.registerResponse = action.payload
            })
            .addCase(userLogin.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = 'success'
                state.registerResponse = action.payload
                if (action.payload?.status === 200){
                    localStorage.setItem('token', JSON.stringify(action.payload.token))
                    localStorage.setItem('user', JSON.stringify(action.payload.data))
                    state.isLoggedIn = true
                }
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = 'rejected'
                state.registerResponse = action.payload
            })
    }
})

export const { checkToken, logout } = Authslice.actions