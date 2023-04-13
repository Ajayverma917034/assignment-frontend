import { Box } from '@mui/material'
import React from 'react'
import MainPage from './Component/MainPage.jsx/MainPage'
import OurServices from './Component/OurServices/OurServices'

const App1 = () => {
    return (
        <Box sx={{ padding: { xs: '0 10px', md: '0 30px' } }}>
            <MainPage />
            <OurServices />
        </Box>
    )
}

export default App1