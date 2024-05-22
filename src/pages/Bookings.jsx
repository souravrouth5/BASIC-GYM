import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBookingsById } from "../redux/Bookingslice";
import { Container } from "@mui/material";


export function Bookings(){

    const { bookingsResponse } = useSelector(state => state.bookingDetails)
    const dispatch = useDispatch()

    console.log(bookingsResponse);

    useEffect(()=>{
        dispatch(fetchBookingsById())
    }, [dispatch])

    return(
        <>
        <Container maxWidth='xl'>
            
        </Container>
        </>
    )
}