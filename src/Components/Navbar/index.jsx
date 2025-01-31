import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50px',
      backgroundColor: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1001,
      padding: { xs: '0 10px', sm: '0 20px', md: '0 40px' }, // فاصله داخلی برای ریسپانسیو
    }}
  >
    <Typography
      component="p"
      fontSize={{ xs: '12px', sm: '14px', md: '14px' }} // اندازه متن ریسپانسیو
      sx={{
        color: 'black',
        textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        opacity: 0.8,
        textAlign: 'center', // متن وسط‌چین
      }}
    >
      Receive free Supercharging when you take delivery of a new Foundation Series Cybertruck by January 31.{' '}
   
     <Link to="./products" style={{ textDecoration: 'none', color: 'black',
      Bottom:'1px black' }}>
        Explore Inventory
      </Link>
     
    </Typography>
  </Box>
  
  
  )
}
