import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { AppBar, Box, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <Box>
      <AppBar style={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ fontFamily: "'Lateef', serif", fontSize: { sm: '3vw', xs: '12vw' }, color: '#154d4f', fontWeight: 'bold' }} pl={6}>Gennotate</Typography>
        <Box sx={{ display: { sm: 'flex', xs: 'none' }, width: '30vw', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: { sm: '1.2vw', xs: '12vw' }, color: 'white', fontWeight: 'bold' }}>Home</Typography>
          <Typography sx={{ fontSize: { sm: '1.2vw', xs: '12vw' }, color: 'white', fontWeight: 'bold' }}>Gallery</Typography>
          <Typography sx={{ fontSize: { sm: '1.2vw', xs: '12vw' }, color: 'white', fontWeight: 'bold' }}>Generate</Typography>
          <Typography sx={{ fontSize: { sm: '1.2vw', xs: '12vw' }, color: 'white', fontWeight: 'bold' }}>Our Team</Typography>
        </Box>
        <Box mr={6}sx={{ display: 'flex' }}><FaCircleUser style={{  color: '#154d4f', background: 'inherit' }} size={24}/></Box>
      </AppBar>
    </Box>
  )
}

export default Navbar
