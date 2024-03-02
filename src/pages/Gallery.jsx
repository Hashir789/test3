import { Box, Button } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const Gallery = () => {
  return (
    <Box>
      <Box sx={{ height: '90vh' }}></Box>
      <Footer/>
      <Link to='/gallery'><Button>Gallery</Button></Link>
    </Box>
  )
}

export default Gallery
