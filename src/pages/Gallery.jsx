import { Box, Button } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Gallery = () => {
  return (
    <Box>
      <Navbar/>
      <Box sx={{ height: '90vh' }}></Box>
      <Footer/>
      <Link to='/gallery'><Button>Gallery</Button></Link>
    </Box>
  )
}

export default Gallery
