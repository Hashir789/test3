import React, { useState } from 'react'
import { FaCircleUser, FaBars, FaXmark } from "react-icons/fa6";
import { AppBar, Box, Typography, Checkbox } from '@mui/material'

const Navbar = () => {
  const [a, setA] = useState(true)
  return (
    <Box>
      <AppBar sx={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)', height: { xs: a?'18vw':'70vw', sm: '5vw'}, overflow: 'hidden', transition: 'height 0.4s ease' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontFamily: "'Lateef', serif", fontSize: { sm: '3vw', xs: '12vw' }, color: '#154d4f', fontWeight: 'bold' }} pl={6}>Gennotate</Typography>
          <Box sx={{ display: { sm: 'flex', xs: 'none' }, width: '30vw', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '1.2vw', color: 'white', fontWeight: 'bold' }}>Home</Typography>
            <Typography sx={{ fontSize: '1.2vw', color: 'white', fontWeight: 'bold' }}>Gallery</Typography>
            <Typography sx={{ fontSize: '1.2vw', color: 'white', fontWeight: 'bold' }}>Generate</Typography>
            <Typography sx={{ fontSize: '1.2vw', color: 'white', fontWeight: 'bold' }}>Our Team</Typography>
          </Box>
          <Box mr={6}sx={{ display: {xs: 'none', sm: 'flex'} }}><FaCircleUser style={{  color: '#154d4f', background: 'inherit' }} size={30}/></Box>
          <Box mr={6}sx={{ display: {xs: 'flex', sm: 'none'} }}>
            <Checkbox onChange={()=>{ setA(!a); console.log('object') }} icon={<FaBars style={{  color: '#154d4f', background: 'inherit' }} size={26}/>} checkedIcon={<FaXmark style={{  color: '#154d4f', background: 'inherit' }} size={26}/>} />  
          </Box>
        </Box>
        <Box px={6} pb={2} sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column' }}>
          <Box my={1}><Typography sx={{ fontSize: '4vw' , color: 'white', fontWeight: 'bold' }}>Home</Typography></Box>
          <Box my={1}><Typography sx={{ fontSize: '6vw', color: 'white', fontWeight: 'bold' }}>Gallery</Typography></Box>
          <Box my={1}><Typography sx={{ fontSize: '6vw', color: 'white', fontWeight: 'bold' }}>Generate</Typography></Box>
          <Box my={1}><Typography sx={{ fontSize: '4vw', color: 'white', fontWeight: 'bold' }}>Our Team</Typography></Box>
        </Box>
      </AppBar>
    </Box>
  )
}

export default Navbar
