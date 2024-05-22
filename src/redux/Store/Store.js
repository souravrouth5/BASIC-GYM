import { configureStore } from '@reduxjs/toolkit'
import { Authslice } from '../Authslice'
import { Bannerslice, Serviceslice, Testimonialslice, Trainerslice } from '../Homeslice'
import { allBlogsslice, blogDetails } from '../Blogsslice'
import { Bookingslice } from '../Bookingslice'

export const Store = configureStore({
    reducer: {
        authentication: Authslice.reducer,
        banner: Bannerslice.reducer,
        trainer: Trainerslice.reducer,
        service: Serviceslice.reducer,
        testimonial: Testimonialslice.reducer,
        allBlogs: allBlogsslice.reducer,
        blogDetails: blogDetails.reducer,
        bookingDetails: Bookingslice.reducer
    }
})