import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBanners, fetchTrainers } from '../redux/Homeslice';
import { MuiCarousel } from '../components/MuiCarousel';
import { Button, Container, Grid, Typography } from '@mui/material';

export function Home2() {

    const { bannerResponse } = useSelector(state => state?.banner)
    const { trainerResponse } = useSelector(state => state?.trainer)
    const dispatch = useDispatch()

    // const theme = createTheme({
    //     breakpoints: {
    //         values: {
    //             sm: 600,
    //             lg: 1280
    //         }
    //     }
    // })

    console.log(trainerResponse);

    useEffect(() => {
        dispatch(fetchBanners())
        dispatch(fetchTrainers())
    }, [dispatch])

    return (
        <>
            <Container maxWidth='xl' disableGutters>

                <Grid container maxWidth='xl' sx={{ border: '', minHeight: '120vh' }}>

                    <Grid item xs={12} sx={{ position: 'relative', }}>

                        {/* Banner */}
                        <MuiCarousel data={bannerResponse?.data} url='https://corefitserver.onrender.com' />
                        {/* Banner */}

                    </Grid>

                    <Grid item xs={12} sm={10} sx={(theme) => ({
                        position: 'static',
                        [theme.breakpoints.up('sm')]: { position: 'absolute', zIndex: '1', bottom: { sm: '-60%', md: '-30%'}, left: '50%', transform: 'translate(-50%, 0)', width: '90%' }
                    })}>

                        {/* trainer */}
                        <Grid container border='' >
                            <Grid item xs={12} sm={6} sx={{ bgcolor: 'red', color: 'white', padding: '70px 50px', textAlign: { xs: 'center', sm: 'right'} }}>
                                <Typography fontWeight='bolder' sx={{ fontSize: { xs: '2rem', sm: '3.75rem'}, lineHeight: 1.2, mb: 1}}>Body Building</Typography>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam ut eius magni necessitatibus deleniti, ad quidem assumenda. Voluptatem eos aperiam debitis recusandae odit expedita doloribus neque assumenda cupiditate eaque.
                                </Typography>
                                <Button sx={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white', padding: '10px 30px', borderRadius: '0', mt: '30px', textTransform: 'none', fontSize: '16px', '&:hover': { 'bgcolor': 'white', color: 'black'}}}>Join Now</Button>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ bgcolor: 'black', color: 'white', padding: '70px 50px', textAlign: { xs: 'center', sm: 'left' } }}>
                                <Typography fontWeight='bolder' sx={{ fontSize: { xs: '2rem', sm: '3.75rem' }, lineHeight: 1.2, mb: 1}}>Muscle Building</Typography>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam veritatis ducimus distinctio vitae ratione facilis ut nemo, rem quasi obcaecati officia fuga? Exercitationem, modi non totam eos eaque debitis culpa.
                                </Typography>
                                <Button sx={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white', padding: '10px 30px', borderRadius: '0', mt: '30px', textTransform: 'none', fontSize: '16px', '&:hover': { 'bgcolor': 'white', color: 'black' } }}>Join Now</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container>

                    <Grid item xs={12}>
                        <Typography variant='h4' color='red' fontWeight='bold'>Why Choose Us ?</Typography>
                        
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}