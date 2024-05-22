import { Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel'

export function MuiCarousel({ data, url }) {

    return (
        <Carousel>
            {
                data?.map((item, i) => <Item key={i} item={item} url={url} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <div sx={{ position: 'relative' }}>
            <img src={`${props.url}/${props.item.image}`} alt={props.item.image} style={{ width: '100vw', height: '93vh' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderTop: '', textAlign: 'center', width: '80%', backgroundColor: '', color: 'white' }}>
                <Typography variant='h4' color={'red'} fontWeight={'bold'} sx={{mb: 2}}>{props.item.title}</Typography>
                <Typography variant='h2' fontWeight={'bolder'}>{props.item.subtitle}</Typography>
            </div>
        </div>
    )
}