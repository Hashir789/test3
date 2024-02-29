import React, { useContext } from 'react'
import { Box, Button, Card, CardContent, TextField, InputAdornment, Checkbox, Typography } from '@mui/material'
import { FaUser, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import gennotateContext from '../gennotateContext/gennotateContext';

const SignupCard = () => {
    const context = useContext(gennotateContext);
    const { setAuthentication } = context;
    const handleSignup = (e) =>{
        e.preventDefault();
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const cpassword = e.target.elements.cpassword.value;
        console.log('Submitted:', { firstName, lastName, username, password, cpassword });
    }
  return (
    <Box>
        <Box my={2}><Typography sx={{ fontFamily: "'Lateef', serif", fontSize: '15vw', fontWeight: '700', color: 'white' ,display: { xs: 'block', sm: 'none' } }} textAlign='center'>Gennotate</Typography></Box>
        <Card sx={{ width: {xs: '90vw', sm: '35vw'}, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', paddingLeft: '10px', paddingRight: '10px' }}>
            <CardContent>
                <form onSubmit={handleSignup}>
                    <Box mt={3} sx={{ display: 'flex' }}>
                        <TextField name="firstName" variant="standard" label="First Name" fullWidth required color='success' InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
                        <Box mx={1}></Box>
                        <TextField name="lastName" variant="standard" label="Last Name" fullWidth required color='success' InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
                    </Box>
                    <Box mt={3}>
                        <TextField name="username" variant="standard" label="Username" fullWidth required color='success' InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
                    </Box>
                    <Box my={3} sx={{ display: 'flex' }}>
                        <TextField name="password" type="password" variant="standard" label="Password" fullWidth required color='success' inputMode='none' InputProps={{startAdornment: (<InputAdornment position="start"><FaLock size={18}/></InputAdornment>), endAdornment: (<InputAdornment position="end"><Checkbox icon={<FaEye size={18}/>} checkedIcon={<FaEyeSlash size={18}/>} color='default'/></InputAdornment>)}}/>
                        <Box mx={1}></Box>
                        <TextField name="cpassword" type="password" variant="standard" label="Confirm Password" fullWidth required color='success' inputMode='none' InputProps={{startAdornment: (<InputAdornment position="start"><FaLock size={18}/></InputAdornment>), endAdornment: (<InputAdornment position="end"><Checkbox icon={<FaEye size={18}/>} checkedIcon={<FaEyeSlash size={18}/>} color='default'/></InputAdornment>)}}/>
                    </Box>
                    <Box mt={8}>
                        <Button type="submit" variant="contained" fullWidth sx={{ fontWeight: 'bold', backgroundImage: 'linear-gradient(to bottom, #0ea190, #11b97c)' }}>Sign Up</Button>
                    </Box>
                </form>
                <Box my={3}>
                    <hr/>
                </Box>
                <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography color='text.secondary'>Already have an account ?</Typography>
                    <Button color='success' onClick={()=>{ setAuthentication('Login') }}>Login</Button>
                </Box>
            </CardContent>
        </Card>
    </Box>
  )
}

export default SignupCard
