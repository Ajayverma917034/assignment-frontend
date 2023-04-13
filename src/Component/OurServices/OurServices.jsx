import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import CardItem from './CardItem'
import { data } from '../../constant/data';
const OurServices = () => {
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', paddingTop: 140, paddingBottom: 50 }}>
            <Typography fontSize={45}>Our Services</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                {
                    data && data.map((item, index) => (
                        <CardItem key={index} item={item} />
                    ))
                }
            </Box>
        </Container>
    )
}

export default OurServices