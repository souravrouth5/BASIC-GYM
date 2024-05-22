import { Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs, fetchBlogDetails } from "../redux/Blogsslice";
import { Link, useParams } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';

export function Blogdetails() {

    const { id } = useParams()
    const { blogDetailsResponse } = useSelector(state => state.blogDetails)
    const { allBlogsResponse } = useSelector(state => state?.allBlogs)
    const dispatch = useDispatch()

    const getMonth = () => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const d = new Date();
        let month = months[d.getMonth()];
        return month;
    }

    console.log(allBlogsResponse);

    useEffect(() => {
        dispatch(fetchBlogDetails(id))
        dispatch(fetchAllBlogs())
        window.scrollTo(0, 0)
    }, [id, dispatch])

    return (
        <>
            <Container maxWidth='xl' disableGutters >
                <div className="singleBlogImg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7991655/pexels-photo-7991655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', width: '100%', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.58)', backgroundBlendMode: 'hue', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {/* <img src="https://images.pexels.com/photos/7991655/pexels-photo-7991655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width='100%'/> */}
                    <Typography variant="h1" mt={8} color={'white'} fontWeight={'bolder'} sx={{ textAlign: 'center', }}>Blog Details</Typography>
                    <Typography variant="body2" mt={2} color={'white'}><Link to={'/'} style={{ textDecoration: 'none', color: 'white', }} className="breadCrumbLink">Home</Link> &#x27A4; <Link to={'/blogs'} style={{ textDecoration: 'none', color: 'white' }} className="breadCrumbLink">Blog</Link> &#x27A4; Blog Details</Typography>
                </div>

                <Grid container maxWidth='lg' sx={{ mx: 'auto', mt: '140px' }}>

                    <Grid item xs={12} md={8} padding={3}>
                        <Stack >
                            <div className="imgbox" style={{marginBottom: '36px'}}>
                                <img src={`https://corefitserver.onrender.com/${blogDetailsResponse?.data?.image}`} alt={blogDetailsResponse?.data?.image} width={'100%'} height={'550px'} />
                            </div>
                            <Typography variant="h4" mb={2}>{blogDetailsResponse?.data?.title}</Typography>
                            <Typography variant="h6" mb={1}>{blogDetailsResponse?.data?.subtitle}</Typography>
                            <Typography variant="body1" textAlign={'justify'}>{blogDetailsResponse?.data?.content}</Typography>
                            <Typography variant="body1" textAlign={'justify'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit assumenda architecto nam sed officia molestias, odio nisi hic quod, at, sunt est amet quo? Nesciunt totam ratione rerum aliquid. Reiciendis dolorum ea tenetur praesentium! Ratione velit tempore eligendi dolore, corporis assumenda deleniti error, dolores illum earum ullam debitis deserunt aperiam labore blanditiis! Ipsa reprehenderit, laborum beatae veritatis cum, cupiditate fuga consectetur corporis, quisquam distinctio architecto enim voluptates voluptate labore? Necessitatibus distinctio voluptas vero quae. Quo velit sed hic itaque soluta, animi ipsam recusandae tenetur mollitia? Unde dolorum rem temporibus laborum officiis porro nihil, mollitia voluptatum dolor cumque iure harum optio fuga nulla excepturi? Beatae ullam exercitationem molestias possimus odio ad ab repellendus, dolor vero harum commodi libero nostrum, accusamus nisi provident delectus doloremque sit esse doloribus velit magni, quas dolore. Rerum, voluptate eius! Voluptatibus aspernatur aut libero aliquam reprehenderit numquam culpa repellendus, pariatur quas voluptatem quibusdam aperiam magni dicta quam deleniti laborum neque sunt consequatur minima provident iste maiores! Sint eligendi modi libero repellat exercitationem explicabo quibusdam asperiores repudiandae ipsam vitae, voluptates odit magnam molestiae quasi laudantium? Enim earum quos voluptates! Quae laboriosam sint ullam odio pariatur error quaerat earum exercitationem! Blanditiis sit voluptatibus adipisci esse repudiandae laudantium dignissimos recusandae unde perspiciatis? Quaerat, illo iure labore, odit nam quo natus voluptates quisquam quasi vero consequuntur voluptatem velit dolore, iste aut. Quos maiores autem facere rerum rem deserunt saepe accusantium non aliquid? Voluptatibus magnam architecto repudiandae fugit reiciendis saepe consequatur natus velit. Ad aperiam aliquam recusandae deleniti hic saepe quo debitis accusamus sapiente! Sint, quam commodi tempora adipisci aperiam porro voluptatum sed! Reprehenderit deserunt ut voluptas architecto ab sunt enim, tempore ipsum nisi consequatur. Beatae dolor architecto et, provident voluptatibus fugit vitae temporibus ullam perferendis dolorum veniam veritatis facere ipsam nostrum nam ab totam est voluptate? Odio nihil ut libero ipsam a officiis eaque hic molestias voluptate sapiente soluta laboriosam, aut ducimus ex vero magni error cumque blanditiis voluptas ipsum quod est quibusdam accusamus sequi. Magnam repudiandae placeat eos eveniet, inventore sint maiores velit blanditiis beatae architecto minima voluptatum voluptates nostrum, eligendi nulla doloribus commodi aut adipisci. Voluptate debitis, suscipit possimus maiores sapiente doloremque asperiores quisquam error, laborum a labore est nesciunt? Rem nesciunt quod porro quidem, fuga quaerat magnam adipisci at, facilis debitis suscipit, exercitationem ipsum odio minus amet molestias consequuntur iure recusandae expedita accusantium. Assumenda voluptas molestiae explicabo doloremque nemo recusandae iure, perspiciatis dignissimos vel veritatis veniam excepturi obcaecati?</Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={4} padding={3}>
                        <Typography variant="h5" fontWeight={'bold'}>RECENT BLOGS</Typography>

                        {
                            allBlogsResponse?.data?.map(item => {
                                return (
                                    <Stack key={item._id} direction={'row'} spacing={3} my={2}>
                                        <img src={`https://corefitserver.onrender.com/${item.image}`} alt={item.image} width={100} height={75} />
                                        <Stack >
                                            <Link to={`/blogdetails/${item._id}`} className="link" style={{ textDecoration: 'none'}}><Typography variant="body2" color={'#3f3c3c'} sx={{ transition: 'all .3s ease','&:hover' : { color: 'red'}}}>{item.title}</Typography></Link>
                                            <Typography fontSize={'10px'}><PersonIcon sx={{ verticalAlign: 'middle', color: '#6c757d', fontSize: '10px' }} /> Admin  <CalendarMonthIcon sx={{ verticalAlign: 'middle', color: '#6c757d', fontSize: '10px' }} /> {new Date().getDate()} {getMonth()} {new Date().getFullYear()}  <ForumIcon sx={{ verticalAlign: 'middle', color: '#6c757d', fontSize: '10px' }} /> {Math.floor((Math.random() * 23) + 13)} Comments</Typography>
                                        </Stack>
                                    </Stack>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}