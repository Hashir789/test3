import React, { useState } from 'react'
import { FaCircleUser, FaBars, FaXmark } from "react-icons/fa6";
import { AppBar, Box, Typography, Checkbox } from '@mui/material'

const Navbar = () => {
  const [a, setA] = useState(true)
  const [b, setB] = useState(0)
  const [c, setC] = useState(2)
  const navList = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'Gallery' },
    { id: 3, title: 'Generate' },
    { id: 4, title: 'Our Team' },
  ]
  return (
    <Box>
      <AppBar sx={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)', height: { xs: a?'18vw':'65vw', sm: '5vw'}, overflow: 'hidden', transition: 'height 0.4s ease' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: { xs: '18vw', sm: '5vw'} }}>
          <Typography sx={{ fontFamily: "'Lateef', serif", fontSize: { sm: '3vw', xs: '12vw' }, color: '#154d4f', fontWeight: 'bold' }} pl={6}>Gennotate</Typography>
          <Box sx={{ display: { sm: 'flex', xs: 'none' }, width: `${navList.length - 1}0vw`, alignItems: 'center', justifyContent: 'space-between' }}>
            {navList.map((item) => (<Box key={item.id} onMouseEnter={() => setB(item.id)} onMouseLeave={() => setB(0)} sx={{ ':hover': { cursor: 'pointer' }, height: '100%' }} >
              <Typography sx={{ fontSize: '1.3vw', color: (b === item.id || c === item.id) ? '#154d4f' : 'inherit', fontWeight: 'bold' }} px={1} >{item.title}</Typography>
              <Box sx={{ width: (b === item.id || c === item.id) ? '100%' : '1%', background: (b === item.id || c === item.id) ? '#154d4f' : 'inherit', height: '0.2vw', transition: '0.5s ease width' }}></Box>
            </Box>))}
          </Box>
          <Box mr={6}sx={{ display: {xs: 'none', sm: 'flex'} }}><FaCircleUser style={{  color: '#154d4f', background: 'inherit' }} size={30}/></Box>
          <Box mr={6}sx={{ display: {xs: 'flex', sm: 'none'} }}>
            <Checkbox onChange={()=>{ setA(!a); console.log('object') }} icon={<FaBars style={{  color: '#154d4f', background: 'inherit' }} size={26}/>} checkedIcon={<FaXmark style={{  color: '#154d4f', background: 'inherit' }} size={26}/>} />  
          </Box>
        </Box>
        <Box px={6} pb={2} sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column' }}>
            {navList.map((item) => (<Box key={item.id} onMouseEnter={() => setB(item.id)} onMouseLeave={() => setB(0)} sx={{ ':hover': { cursor: 'pointer' }, height: '100%' }} mb={1} >
              <Typography sx={{ fontSize: '5vw', color: (b === item.id || c === item.id) ? '#154d4f' : 'inherit', fontWeight: 'bold' }} px={1} >{item.title}</Typography>
              <Box sx={{ width: (b === item.id || c === item.id) ? '100%' : '1%', background: (b === item.id || c === item.id) ? '#154d4f' : 'inherit', height: '0.7vw', transition: '0.5s ease width' }}></Box>
            </Box>))}
        </Box>
      </AppBar>
    </Box>
  )
}

export default Navbar
