import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllBlogs } from "../redux/Blogsslice"
import { Button, Grid, Stack, Typography } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from "react-router-dom";

export function Blogs() {

    const { allBlogsResponse } = useSelector(state => state.allBlogs)
    const dispatch = useDispatch()

    console.log(allBlogsResponse);


    // const todayDate = () => {
    //     const d = new Date();
    //     const date = d.getDate();
    //     const month = d.getMonth();
    //     const year = d.getFullYear();
    //     const current = date-month-year
    //     return current;
    // }

    const getMonth = () => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const d = new Date();
        let month = months[d.getMonth()];
        return month;
    }

    // console.log(getMonth());


    useEffect(() => {
        dispatch(fetchAllBlogs())

        window.scrollTo(0,0)
    }, [dispatch])

    return (
        <>
            <Grid container maxWidth={'xl'} mx={''}>

                <Grid xs={12} mb={8}>
                    <div className="singleBlogImg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7991655/pexels-photo-7991655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', width: '100%', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.58)', backgroundBlendMode: 'hue', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        {/* <img src="https://images.pexels.com/photos/7991655/pexels-photo-7991655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width='100%'/> */}
                        <Typography variant="body1" mt={8} color={'white'}>Hello! Welcome To</Typography>
                        <Typography variant="h1" mt={2} color={'white'} fontWeight={'bolder'} sx={{ textAlign: 'left', }} textAlign={'left'}>All Blogs</Typography>
                        <Typography variant="body1" mt={2} color={'white'} width={'60%'} textAlign={'left'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque amet unde esse cupiditate debitis autem magni velit deleniti fugit vel nobis enim, suscipit, aut quidem ducimus mollitia voluptatibus laborum animi dolorum? Velit, dolor facere optio blanditiis eum autem molestias reprehenderit nesciunt qui labore modi maiores.</Typography>
                        <Typography variant="body2" mt={2} color={'white'}><Link to={'/'} style={{ textDecoration: 'none', color: 'white', }} className="breadCrumbLink">Home</Link> &#x27A4; <Link to={'/blogs'} style={{ textDecoration: 'none', color: 'white' }} className="breadCrumbLink">Blog</Link></Typography>
                    </div>
                </Grid>

                <Grid item xs={12} textAlign={'center'}>
                    <Typography variant="body1" color={'red'} fontWeight={'bold'} mb={4}>Our Blog</Typography>
                    <Typography variant="h3" color={'#3f3c3c'} fontWeight={'bolder'}>Latest Article From Blog</Typography>
                </Grid>

                <Grid item xs={12}>

                    <Grid container maxWidth={'lg'} mx={'auto'}>

                        {
                            allBlogsResponse?.data?.map(item => {
                                return(
                                    <Grid className="blogCard" item xs={12} md={6} key={item._id} p={3}>
                                        <div className="imgBox" style={{overflow: 'hidden', marginBottom: '8px'}}>
                                            <img src={`https://corefitserver.onrender.com/${item.image}`} alt="" width={'100%'} height={350} className="img"/>
                                        </div>
                                        <Stack direction={'row'}>
                                            <div className="dateCircle" style={{height: '75px', width: '75px', borderRadius: '50%', backgroundColor: 'red', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                <Typography variant="body2" color={'white'} fontSize={'12px'}>{new Date().getDate()}</Typography>
                                                <Typography variant="body1" fontWeight={'bold'} color={'white'}>{getMonth()}</Typography>
                                                <Typography variant="body2" color={'white'} fontSize={'12px'}>{new Date().getFullYear()}</Typography>
                                            </div>
                                            <Stack direction={'column'} spacing={0.3} ml={2}>
                                                <Typography variant="h6" color={'#3f3c3c'}>{item.title}</Typography>
                                                <Typography variant="body2" color={'#3f3c3c'} fontSize={'12px'}>{item.subtitle}</Typography>
                                                <Typography fontSize={''}><PersonIcon sx={{ verticalAlign: 'middle', color: '#6c757d', fontSize: '18px' }} /> Admin  <FolderIcon sx={{ verticalAlign: 'middle', color: '#6c757d', fontSize: '18px' }} /> Web Design  <ForumIcon sx={{ verticalAlign: 'middle', color: '#6c757d', fontSize: '18px' }} /> {Math.floor((Math.random() * 23) + 13)} Comments</Typography>
                                            </Stack>
                                        </Stack>
                                        <Typography variant="body2" mt={2}>{item.content}... </Typography>
                                        <Link to={`/blogdetails/${item._id}`}><Button className="blogBtn" sx={{ bgcolor: 'white', color: 'red', padding: '5px 30px', border: '2px solid red', mt: 2, "&:hover": { bgcolor: 'red', color: 'white' } }}>View Blog</Button></Link>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}