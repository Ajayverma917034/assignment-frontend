import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useValue } from '../../context/ContextProvider'
import { AllData, FindAllInSorted } from '../../action/connect'

const CardItem = ({ item }) => {
  const { dispatch } = useValue()
  const Navigate = useNavigate();
  const handleClick = () => {
    if (item.id === 1) {
      AllData(dispatch);
      Navigate('/all-book-magazines')
    }
    else if (item.id === 2) {
      Navigate('/find-book-magazines-by-isbn')
    }
    else if (item.id === 3) {
      Navigate('/find-by-author-email')
    }
    else if (item.id === 4) {
      FindAllInSorted(dispatch);
      Navigate('/all-book-magazines-sorted-by-title')
    }
    else if (item.id === 5) {
      Navigate('/add-book-magazines')
    }
  }

  return (

    <Card
      sx={{
        width: 350, marginTop: 10,
        ':hover': {
          boxShadow: 20, // theme.shadows[20]
        },
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          {item.heading}
        </Typography>


        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Click below for view..
        </Typography>
      </CardContent>
      <Button size="small" style={{ color: '#fff', border: '1px solid #1976d2', background: '#1976d2', marginBottom: '30px' }} onClick={handleClick}>Know Now</Button>
    </Card>
  )
}

export default CardItem