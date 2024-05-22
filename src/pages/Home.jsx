import { Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { MuiCarousel } from "../components/MuiCarousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBanners, fetchServices, fetchTestimonials, fetchTrainers } from "../redux/Homeslice";
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Home() {

    const { bannerResponse } = useSelector(state => state?.banner)
    const { trainerResponse } = useSelector(state => state?.trainer)
    const { serviceResponse } = useSelector(state => state?.service)
    const { testimonialResponse } = useSelector(state => state?.testimonial)
    const dispatch = useDispatch()

    // const theme = createTheme({
    //     breakpoints: {
    //         values: {
    //             sm: 600,
    //             lg: 1280
    //         }
    //     }
    // })

    console.log(testimonialResponse);

    useEffect(() => {
        dispatch(fetchBanners())
        dispatch(fetchTrainers())
        dispatch(fetchServices())
        dispatch(fetchTestimonials())
        window.scrollTo(0, 0)
    }, [dispatch])


    return (
        <>
            <Container maxWidth='xl' disableGutters>

                {/* Banner */}
                <MuiCarousel data={bannerResponse?.data} url='https://corefitserver.onrender.com' />
                {/* Banner */}

                {/* services */}
                <Grid container maxWidth={'lg'} pt={3} justifyContent={'center'} border={'2px solid transparent'} mx={'auto'} mb={8}>

                    <Grid item xs={12} textAlign={'center'} mb={8}>
                        <Typography variant="h5" color={'red'} fontWeight={'bold'} pb={2}>Why Choose Us ?</Typography>
                        <Typography variant="h3" color={'#3f3c3c'} fontWeight={'700'}>Benefits of Joining Our Team</Typography>
                    </Grid>

                    {
                        serviceResponse?.data?.map(item => {
                            return (
                                <Grid item key={item._id} xs={12} md={6} display={'flex'} justifyContent={'space-between'} p={0} border={'2px solid transparent'} px={8}>
                                    <img src={`https://corefitserver.onrender.com/${item.image}`} alt={item.image} width={'40%'} height={'90%'} style={{ paddingRight: '12px', alignSelf: 'center' }} />
                                    <Stack spacing={1} alignSelf={'center'}>
                                        <Typography variant="h6" fontWeight={'bold'}>{item.service_name}</Typography>
                                        <Typography variant="body1" color={'#595353'}>{item.service_description?.slice(0, 160)}</Typography>
                                    </Stack>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                {/* serices */}
                {/* trainer */}

                <Grid container maxWidth='lg' mx={'auto'}>

                    <Grid item xs={12} textAlign={'center'}>
                        <Typography variant="h6" color={'red'} fontWeight={'bold'} pb={2}>Our Trainers</Typography>
                        <Typography variant="h3" color={'#3f3c3c'} fontWeight={'700'}>Meet Our Expert Trainers</Typography>
                    </Grid>

                    {
                        trainerResponse?.data?.slice(0, 4)?.map(item => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={item._id} p={2}>

                                    <Card className="card">
                                        <CardMedia
                                            component={'img'}
                                            image={`https://corefitserver.onrender.com/${item.image}`}
                                            height={300}
                                            className="cardmedia"
                                        />
                                        <Stack className="card-socials" height={'100%'} width={'100%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} border={'2px solid transparent'}>
                                            <Link ><div style={{ borderRadius: '50%', border: '2px solid white', backgroundColor: 'transparent', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 5px' }}><FacebookIcon /></div></Link>
                                            <Link ><div style={{ borderRadius: '50%', border: '2px solid white', backgroundColor: 'transparent', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 5px' }}><TwitterIcon /></div></Link>
                                            <Link ><div style={{ borderRadius: '50%', border: '2px solid white', backgroundColor: 'transparent', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 5px' }}><LinkedInIcon /></div></Link>
                                            <Link ><div style={{ borderRadius: '50%', border: '2px solid white', backgroundColor: 'transparent', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 5px' }}><InstagramIcon /></div></Link>
                                        </Stack>
                                        <CardContent className="cardcontent" sx={{ bgcolor: 'black', textAlign: 'center' }}>
                                            <Typography variant="h4" color={'red'} fontWeight={'500'}>{item.name}</Typography>
                                            <Typography variant="body1" color={'white'} fontWeight={'500'}>{item.speciality}</Typography>
                                            <Typography variant="body1" color={'white'} fontWeight={'300'}>{item.experience}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                {/* trainer */}

                {/* testimonial */}

                <Grid container maxWidth={'lg'} mx={'auto'} pt={8} sx={{ color: 'white', bgcolor: '' }}>
                    <Grid item xs={12}>
                        <Typography variant="h3" textAlign={'center'} color={'black'} mb={4} sx={{ color: 'red', fontWeight: 'bold' }}>What Our Clients Say ?</Typography>
                    </Grid>

                    {
                        testimonialResponse?.data?.map(item => {
                            return (

                                <Grid item xs={12} sm={6} key={item._id} sx={{ bgcolor: 'black' }} padding={2} >
                                    <Stack spacing={2}>

                                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                            <img src={`https://corefitserver.onrender.com/${item.image}`} alt={item.image} width={'70px'} height={'70px'} style={{ border: '10px solid #343a40', borderRadius: '50%' }} />
                                            <Stack >
                                                <Typography variant="h5" color={'red'} fontWeight={'bold'}>{item.client_name}</Typography>
                                                <Typography variant="body1" color={'white'} fontWeight={'200'}>{item.service_details[0].service_name}</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack sx={{ bgcolor: '#343a40', border: '1px solid #dee2e6', padding: '20px 10px', position: 'relative', '&::before': { content: `"\\1F781"`, position: 'absolute', fontSize: '35px', color: '#343a40', top: '-26px', left: '25px',  }  }}>
                                            <Typography variant="body1">{item.review}</Typography>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                {/* testimonial */}
            </Container>
        </>
    )
}