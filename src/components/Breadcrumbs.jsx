import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


export function Breadcrumbs({ title, pageLink, page, subpageLink,subpage}){

    return(
        <>
            <div className="singleBlogImg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7991655/pexels-photo-7991655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', width: '100%', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.58)', backgroundBlendMode: 'hue', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* <img src="https://images.pexels.com/photos/7991655/pexels-photo-7991655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width='100%'/> */}
                <Typography variant="h1" mt={8} color={'white'} fontWeight={'bolder'} sx={{ textAlign: 'center', }}>{title}</Typography>
                <Typography variant="body2" mt={2} color={'white'}><Link to={`/${pageLink}`} style={{ textDecoration: 'none', color: 'white', }} className="breadCrumbLink">{page}</Link> &#x27A4; <Link to={`/${subpageLink}`} style={{ textDecoration: 'none', color: 'white' }} className="breadCrumbLink">{page}</Link> &#x27A4; Blog Details</Typography>
            </div>
        </>
    )
}