import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)' }} pb={2} px={3}>
        <Box sx={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} pb={4} pt={4}>
            <Grid container px={0}>
                <Grid item xs={4} sm={3} sx={{ borderRight: '1px solid rgba(0,0,0,0.2)' }} px={3}>
                    <Box>
                        <Typography sx={{ fontFamily: "'Lateef', serif", fontSize: '2.75vw', color: 'white', fontWeight: 'bold' }}>Gennotate</Typography>
                        <Typography sx={{ fontSize: '1.2vw', color: 'white', lineHeight: 1.2 }} textAlign='justify'>Gennotate, meticulously developed by NUST students, serves as a comprehensive web application dedicated to the precise generation and segmentation of Optical Coherence Tomography (OCT) images, reflecting a seamless blend of simplicity and functionality.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} sx={{ borderRight: '1px solid rgba(0,0,0,0.2)' }} px={3}>
                    <Box py={1}>
                        <Typography sx={{ fontSize: '1.25vw', color: 'white', fontWeight: 'bold' }}>Services</Typography>
                        <Box py={2}>
                            <Typography sx={{ fontSize: '1.2vw', color: 'white' }}>Image Generation</Typography>
                            <Typography sx={{ fontSize: '1.2vw', color: 'white' }}>Image Segmentation</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} sx={{ borderRight: '1px solid rgba(0,0,0,0.2)' }} px={3}>
                    <Box py={1}>
                        <Typography sx={{ fontSize: '1.25vw', color: 'white', fontWeight: 'bold' }}>Services</Typography>
                        <Box py={2}>
                            <Typography sx={{ fontSize: '1.2vw', color: 'white' }}>Image Generation</Typography>
                            <Typography sx={{ fontSize: '1.2vw', color: 'white' }}>Image Segmentation</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3}>
                    <Box py={1}>
                        <Typography sx={{ fontSize: '1.25vw', color: 'white', fontWeight: 'bold' }}>Pages</Typography>
                        <Box py={2}>
                            <Typography sx={{ fontSize: '1.2vw', color: 'white' }}>Home</Typography>
                            <Typography sx={{ fontSize: '1.2vw', color: 'white' }}>Gallery</Typography>
                            <Typography sx={{ fontSize: '1.2vw', color: 'white' }}>Generate</Typography>
                            <Typography sx={{ fontSize: '1.2vw', color: 'white' }}>Our Team</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box mt={2}>
            <Typography textAlign='center' sx={{ color: 'white', fontSize: '1.2vw' }}>© All rights reserved · Gennotate · Privacy Policy</Typography>
        </Box>
    </Box>
  )
}

export default Footer
