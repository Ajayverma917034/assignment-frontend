import { Box, Typography } from '@mui/material'
import React from 'react'
import main from "../../img/main.jpg"

const MainPage = () => {
    return (
        <Box style={{
            display: 'flex', alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '10px'
        }}
        >
            <Box style={{ display: 'flex', justifyContent: 'center' }} sx={{ width: { xs: '100%', md: '50%' } }}>
                <img src={main} alt='leftImg' width={'100%'} />
            </Box>

            <Box sx={{ paddingTop: { xs: '40px' } }}>
                <Typography style={{ fontWeight: 300 }} sx={{ fontSize: { xs: 35, md: 45 } }} color={'#1976d2'}>
                    Welcome to our <br /> bookshelves
                </Typography>
                <Typography style={{ fontWeight: 300, lineHeight: '24px' }} sx={{ fontSize: { xs: 18, md: 20 } }} >
                    Go down for more details
                </Typography>

            </Box>


        </Box>
    )
}

export default MainPage